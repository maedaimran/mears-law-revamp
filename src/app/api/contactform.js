// app/api/contact/route.js
import nodemailer from "nodemailer";

// --- SIMPLE IN-MEMORY RATE LIMIT (per-IP) --------------------
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQS = 10; // per IP per hour
const hits = new Map();

function allow(ip) {
  const now = Date.now();
  const data = hits.get(ip) || { count: 0, reset: now + WINDOW_MS };
  if (now > data.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (data.count >= MAX_REQS) return false;
  data.count += 1;
  hits.set(ip, data);
  return true;
}
// --------------------------------------------------------------

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!allow(ip)) {
      return new Response(JSON.stringify({ error: "Too many requests" }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await req.json();

    // Honeypot (bots fill hidden fields)
    if (body.company) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { firstName, lastName, email, phone, message } = body || {};

    // Basic server-side validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !message ||
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return new Response(
        JSON.stringify({ error: "Missing or invalid fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Configure transporter (use your SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
        <h2 style="margin:0 0 8px;color:#0A1628;">New Contact Submission</h2>
        <p style="margin:0 0 16px;color:#374151;">From: <strong>${firstName} ${lastName}</strong></p>
        <p style="margin:0 0 8px;color:#374151;">Email: <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p style="margin:0 0 16px;color:#374151;">Phone: ${phone}</p>` : ""}
        <p style="margin:12px 0 6px;color:#6B7280;">Message:</p>
        <pre style="white-space:pre-wrap;font-family:inherit;color:#374151;background:#FAFBFC;padding:12px;border:1px solid #E5E7EB;border-radius:8px;">${message}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `Contact Form: ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return new Response(JSON.stringify({ error: "Email failed." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

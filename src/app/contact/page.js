"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState({});

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      firstName: form.get("firstName").trim(),
      lastName: form.get("lastName").trim(),
      email: form.get("email").trim(),
      phone: form.get("phone")?.trim() || "",
      message: form.get("message").trim(),
      company: form.get("company") || "", // honeypot
    };

    // quick client validation
    if (!payload.firstName || !payload.lastName || !payload.email || !payload.message) {
      setLoading(false);
      setStatus({ type: "error", msg: "Please fill in all required fields." });
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      e.currentTarget.reset();
      setStatus({ type: "success", msg: "Thank you for reaching out. We've received your message and will respond within two business days." });
    } else {
      const data = await res.json().catch(() => ({}));
      setStatus({ type: "error", msg: data?.error || "Something went wrong. Please try again." });
    }
  }

  const handleFocus = (field) => setFocused({ ...focused, [field]: true });
  const handleBlur = (field) => setFocused({ ...focused, [field]: false });

  return (
    <main className="wrap">
      <div className="container">
        <header className="hdr">

          <h1 className="title">Contact Us</h1>
          <p className="lead">
            Just share a few details, and we'll be in touch within two business days. We look forward to connecting with you.
          </p>
        </header>

        <form className="form" onSubmit={onSubmit} noValidate>
          {/* Honeypot (hidden) */}
          <input type="text" name="company" autoComplete="off" className="hp" tabIndex={-1} />

          <div className="row">
            <label className="label">
              Name <span className="req-text">(required)</span>
            </label>
            <div className="label-row">
              <span className="sublabel">First Name</span>
              <span className="sublabel">Last Name</span>
            </div>
            <div className="cols">
              <div className="input-wrap">
                <input 
                  id="firstName" 
                  name="firstName" 
                  required 
                  className={focused.firstName ? 'focused' : ''}
                  onFocus={() => handleFocus('firstName')}
                  onBlur={() => handleBlur('firstName')}
                />
              </div>
              <div className="input-wrap">
                <input 
                  id="lastName" 
                  name="lastName" 
                  required 
                  className={focused.lastName ? 'focused' : ''}
                  onFocus={() => handleFocus('lastName')}
                  onBlur={() => handleBlur('lastName')}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <label htmlFor="email" className="label">
              Email <span className="req-text">(required)</span>
            </label>
            <div className="input-wrap">
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className={focused.email ? 'focused' : ''}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
              />
            </div>
          </div>

          <div className="row">
            <label htmlFor="phone" className="label">
              Phone <span className="opt-text">(optional)</span>
            </label>
            <div className="input-wrap">
              <input 
                id="phone" 
                name="phone" 
                type="tel" 
                className={focused.phone ? 'focused' : ''}
                onFocus={() => handleFocus('phone')}
                onBlur={() => handleBlur('phone')}
              />
            </div>
          </div>

          <div className="row">
            <label htmlFor="message" className="label">
              Message <span className="req-text">(required)</span>
            </label>
            <div className="input-wrap">
              <textarea 
                id="message" 
                name="message" 
                rows={6} 
                required 
                className={focused.message ? 'focused' : ''}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
              />
            </div>
          </div>

          {status.msg && (
            <div className={`status ${status.type === "success" ? "ok" : "err"}`}>
              {status.msg}
            </div>
          )}

          <div className="btn-wrap">
            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        * { box-sizing: border-box; }
        
        .wrap {
          background: #fafbfc;
          min-height: 100vh;
          padding: 4rem 1.5rem 6rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .container {
          max-width: 960px;
          margin: 0 auto;
        }

        .hdr {
          text-align: center;
          margin-bottom: 4rem;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 400;
          color: #0a1628;
          margin: 0 0 1.5rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .lead {
          color: #374151;
          font-size: 1.125rem;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
          font-weight: 400;
        }

        .form {
          max-width: 800px;
          margin: 0 auto;
        }

        .hp { 
          display: none !important; 
        }

        .row {
          margin-bottom: 2.5rem;
        }

        .label {
          display: block;
          color: #0a1628;
          font-weight: 400;
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .req-text {
          color: #6b7280;
          font-size: 1rem;
        }

        .opt-text {
          color: #6b7280;
          font-size: 1rem;
        }

        .label-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 640px) {
          .label-row { 
            grid-template-columns: 1fr 1fr; 
          }
        }

        .sublabel {
          display: block;
          color: #0a1628;
          font-size: 0.9375rem;
          font-weight: 400;
        }

        .cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .cols { 
            grid-template-columns: 1fr 1fr; 
          }
        }

        .input-wrap {
          position: relative;
        }

        input, textarea {
          width: 100%;
          font-family: inherit;
          font-size: 1rem;
          color: #0a1628;
          background: transparent;
          border: none;
          border-bottom: 1px solid #374151;
          padding: 0.75rem 0;
          outline: none;
          transition: border-color 0.3s ease;
          font-weight: 400;
        }

        input::placeholder, textarea::placeholder {
          color: transparent;
        }

        input.focused, textarea.focused {
          border-bottom-color: #0a1628;
          border-bottom-width: 2px;
        }

        textarea {
          min-height: 140px;
          resize: vertical;
          line-height: 1.6;
          padding-top: 0.5rem;
        }

        .status {
          margin-top: 1.5rem;
          padding: 1rem;
          font-size: 0.9375rem;
          text-align: center;
        }

        .ok { 
          color: #065f46;
        }

        .err { 
          color: #991b1b;
        }

        .btn-wrap {
          margin-top: 3rem;
          text-align: center;
        }

        .btn {
          display: inline-block;
          padding: 1rem 3rem;
          font-family: inherit;
          font-weight: 400;
          font-size: 1.0625rem;
          color: #0a1628;
          background: transparent;
          border: 1.5px solid #0a1628;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.02em;
        }

        .btn:hover:not(:disabled) { 
          background: #0a1628;
          color: #fafbfc;
        }

        .btn:disabled { 
          opacity: 0.5; 
          cursor: not-allowed;
        }

        @media (max-width: 639px) {
          .wrap {
            padding: 2.5rem 1.25rem 4rem;
          }

          .title {
            font-size: 2.5rem;
          }

          .lead {
            font-size: 1rem;
          }

          .hdr {
            margin-bottom: 3rem;
          }

          .row {
            margin-bottom: 2rem;
          }

          .label {
            font-size: 1rem;
          }

          .btn {
            width: 100%;
            padding: 0.875rem 2rem;
          }
        }
      `}</style>
    </main>
  );
}
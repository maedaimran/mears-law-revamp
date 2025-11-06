"use client";
import Script from "next/script";

export default function NewsletterPage() {
  return (
    <main style={{ minHeight: "70vh", padding: "80px 0", background: "#f9fafb" }}>
      <div style={{ width: "min(720px, 92%)", margin: "0 auto" }}>
        <h1 style={{ marginBottom: 16, color: "#0A1628" }}>Sign up for Email Updates</h1>
        <p style={{ marginBottom: 24, color: "#475569" }}>
          Join our mailing list to receive news and updates from Mears Law.
        </p>

        {/* PLACEHOLDER — Kit will inject the form right here */}
        <div className="formkit-container" data-uid="ea71ad71fe" />

        {/* This is the ConvertKit JS that fills the container above. 
           If your account uses a branded domain, Kit may also give you a branded URL. 
           Either way, this pattern is the one that targets the DIV. */}
        <Script async src="https://f.convertkit.com/ea71ad71fe.js" />
      </div>
    </main>
  );
}

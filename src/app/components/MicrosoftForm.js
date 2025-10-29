// src/app/components/MicrosoftForm.js
"use client";

export default function MicrosoftForm({ src, title = "Contact Form" }) {
  return (
    <div className="msf-wrap">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        allow="fullscreen"
        style={{ border: 0 }}
      />
      <style jsx>{`
        .msf-wrap {
          position: relative;
          width: 100%;
          max-width: 900px;      /* match your card width */
          margin: 24px auto 64px;
          background: #fff;      /* your panel */
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(10,22,40,.08);
          overflow: hidden;
        }
        .msf-wrap iframe {
          display: block;
          width: 100%;
          height: min(85vh, 1100px); /* adjusts on phones/laptops */
        }
        @media (max-width: 640px) {
          .msf-wrap { border-radius: 12px; }
          .msf-wrap iframe { height: 85vh; }
        }
      `}</style>
    </div>
  );
}

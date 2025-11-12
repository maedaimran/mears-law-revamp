"use client";
import Script from "next/script";

export default function Page() {
  return (
    <main style={{ padding: "2rem 0" }}>
      <div className="container">
        <h1>Book a Consultation</h1>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/maedaimran/30min"
          style={{ minWidth: 320, height: 700 }}
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </div>
    </main>
  );
}

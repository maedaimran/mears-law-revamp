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
      companyName: form.get("companyName")?.trim() || "",
      phone: form.get("phone")?.trim() || "",
      topics: form.getAll("topics"),
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
            <label htmlFor="companyName" className="label">
              Company <span className="opt-text">(optional)</span>
            </label>
            <div className="input-wrap">
              <input 
                id="companyName" 
                name="companyName" 
                type="text"
                className={focused.companyName ? 'focused' : ''}
                onFocus={() => handleFocus('companyName')}
                onBlur={() => handleBlur('companyName')}
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
            <label className="label">
              Topics <span className="opt-text">(optional)</span>
            </label>
            <div className="topics-grid">
              <label className="checkbox-label">
                <input type="checkbox" name="topics" value="legal-representation" />
                <span className="checkbox-text">Legal Representation</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="topics" value="mailing-list" />
                <span className="checkbox-text">Mailing List</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="topics" value="pr-media" />
                <span className="checkbox-text">PR/Media</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="topics" value="other" />
                <span className="checkbox-text">Other</span>
              </label>
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
          font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
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
          font-weight: 600;
          color: #0a1628;
          margin: 0 0 1.5rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .lead {
          color: #4B5563;
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
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .req-text {
          color: #6b7280;
          font-size: 1rem;
          font-weight: 400;
        }

        .opt-text {
          color: #6b7280;
          font-size: 1rem;
          font-weight: 400;
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
          font-weight: 500;
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

        input:not([type="checkbox"]), textarea {
          width: 100%;
          font-family: inherit;
          font-size: 1rem;
          color: #0a1628;
          background: transparent;
          border: none;
          border-bottom: 1.5px solid #d1d5db;
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

        /* Topics Checkboxes */
        .topics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        @media (max-width: 639px) {
          .topics-grid {
            grid-template-columns: 1fr;
          }
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          padding: 0.5rem 0;
        }

        .checkbox-label input[type="checkbox"] {
          width: 20px;
          height: 20px;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          background: #ffffff;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .checkbox-label input[type="checkbox"]:checked {
          background: #0a1628;
          border-color: #0a1628;
          position: relative;
        }

        .checkbox-label input[type="checkbox"]:checked::after {
          content: '';
          position: absolute;
          left: 6px;
          top: 2px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-label:hover input[type="checkbox"] {
          border-color: #9ca3af;
        }

        .checkbox-text {
          color: #0a1628;
          font-size: 1rem;
          font-weight: 400;
          user-select: none;
        }

        .status {
          margin-top: 1.5rem;
          padding: 1rem;
          font-size: 0.9375rem;
          text-align: center;
          border-radius: 8px;
        }

        .ok { 
          color: #065f46;
          background: #d1fae5;
        }

        .err { 
          color: #991b1b;
          background: #fee2e2;
        }

        .btn-wrap {
          margin-top: 3rem;
          text-align: center;
        }

        .btn {
          display: inline-block;
          padding: 1rem 3rem;
          font-family: inherit;
          font-weight: 600;
          font-size: 1.0625rem;
          color: #ffffff;
          background: #0a1628;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.02em;
        }

        .btn:hover:not(:disabled) { 
          background: #1a2844;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(10, 22, 40, 0.3);
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
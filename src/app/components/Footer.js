"use client";

export default function Footer() {
  const CONTACT = {
    phone: "(437) 888-2974",
    phoneHref: "tel:+14378882974",
    email: "info@mearslaw.ca",
    emailHref: "mailto:info@mearslaw.ca",
    address: "120 Adelaide St W, Toronto, ON M5H 1T1",
  };

  return (
    <>
      <footer className="site-footer">
        {/* CTA band */}
        <div className="container cta-section">
          <h2 className="cta-title">Ready to Discuss Your Legal Matter?</h2>
          <p className="cta-sub">
            Get expert legal guidance tailored to your specific needs. Schedule a confidential
            consultation to explore how we can help.
          </p>
          <a className="cta-btn" href="#book" aria-label="Book Consultation">
            Book Consultation <span className="arrow">→</span>
          </a>
        </div>

        {/* Main footer grid */}
        <div className="container footer-grid">
          {/* Brand + blurb */}
          <div>
            <div className="brand">
              <img src="/images/mears-logo.png" alt="Mears Law logo" className="brand-mark-img" />
              <div className="brand-name">Mears Law</div>
            </div>
            <p className="mini">
              Focused Expertise. Proven Results. Specialized legal counsel delivered with precision,
              discretion, and clear strategy.
            </p>

            <hr className="divider" />

            <div className="copyright">
              © {new Date().getFullYear()} Mears Law. All rights reserved. | Client-Centered, Results-Driven.
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading">Contact Info</h4>
            <div className="contact-list">
              <a className="contact-item" href={CONTACT.phoneHref}>
                <span className="icon" aria-hidden="true">
                  {/* phone */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3.1 18.6 18.6 0 0 1-5.7-5.7A19 19 0 0 1 2.7 4.8 2 2 0 0 1 4.7 2.6h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L9 10a16 16 0 0 0 5 5l1.9-1a2 2 0 0 1 2.1.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.4 1.7Z" />
                  </svg>
                </span>
                {CONTACT.phone}
              </a>

              <a className="contact-item" href={CONTACT.emailHref}>
                <span className="icon" aria-hidden="true">
                  {/* email */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                    <path d="m22 8-10 6L2 8" />
                  </svg>
                </span>
                {CONTACT.email}
              </a>

              <div className="contact-item">
                <span className="icon" aria-hidden="true">
                  {/* map pin */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 22s8-5.4 8-12a8 8 0 1 0-16 0c0 6.6 8 12 8 12Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <address className="addr">{CONTACT.address}</address>
              </div>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h4 className="heading">Follow</h4>
            <div className="socials" aria-label="Social Media">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/mearslawprofessionalcorporation/?originalSubdomain=ca"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.76-2.1 4.02 0 4.76 2.65 4.76 6.1V24h-3.96v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V24H8.5V8.5z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/mearslawjamaica/" aria-label="Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.7.1-1 0-1.6.2-2 .3-.5.2-.8.4-1.1.8-.3.3-.6.6-.8 1.1-.1.4-.3 1-.3 2 0 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.6.3 2 .2.5.4.8.8 1.1.3.3.6.6 1.1.8.4.1 1 .3 2 .3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1 0 1.6-.2 2-.3.5-.2.8-.4 1.1-.8.3-.3.6-.6.8-1.1.1-.4.3-1 .3-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.6-.3-2-.2-.5-.4-.8-.8-1.1-.3-.3-.6-.6-1.1-.8-.4-.1-1-.3-2-.3-1.2-.1-1.6-.1-4.7-.1zM12 6.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8m0 2.2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm5.3-2.6a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@mearslaw" aria-label="TikTok" title="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 8.5c-2.3 0-4.3-1.1-5.6-2.8V17a7 7 0 1 1-7-7c.6 0 1.2.1 1.7.3v3.2a3.7 3.7 0 1 0 2.6 3.5V2h3.2c.3 2.6 2.4 4.6 5.1 4.9V8.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* same tokens as Header */
        .site-footer{
          --navy:#0f223b;
          --slate:#5c6e86;
          --ink:#eaf2ff;
          --ink-dim:#c7d5e9;
          --radius:12px;
        }

        .site-footer{
          position:relative; z-index:1;
          background:var(--navy);
          color:var(--ink);
          padding:36px 0 54px;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
        }

        /* CTA */
        .cta-section{ text-align:center; padding-bottom:56px; }
        .cta-title{
          font-family:"DM Serif Display", serif;
          font-size:clamp(26px, 4vw, 40px);
          margin:0 0 10px; color:#fff;
        }
        .cta-sub{ margin:0 0 18px; color:var(--ink-dim); }
        .site-footer .cta-btn,
        .site-footer .cta-btn:visited,
        .site-footer .cta-btn:link,
        .site-footer .cta-btn:active{
          display:inline-flex; align-items:center; gap:10px;
          padding:12px 20px; border-radius:var(--radius);
          background:#fff; color:var(--navy);
          border:1px solid rgba(0,0,0,.08);
          font-weight:700; text-decoration:none;
          box-shadow:0 6px 16px rgba(0,0,0,.15);
          transition:transform .2s ease, box-shadow .2s ease;
        }
        .site-footer .cta-btn:hover{ transform:translateY(-1px); box-shadow:0 8px 20px rgba(0,0,0,.18); }
        .site-footer .cta-btn:focus-visible{ outline:2px solid #fff; outline-offset:3px; }
        .arrow{ display:inline-block; transform:translateX(2px); }

        /* Grid */
        .container{ width:min(1200px,92%); margin:0 auto; }
        .footer-grid{
          display:grid; grid-template-columns:2fr 1fr 1fr; gap:24px;
          border-top:1px solid rgba(255,255,255,.15);
          padding-top:28px;
        }

        /* Brand & blurb */
        .brand{ display:flex; align-items:center; gap:12px; margin-bottom:10px; color:#fff; text-decoration:none; }
        .brand-mark-img{ width:36px; height:36px; border-radius:10px; object-fit:cover; }
        .brand-name{ font-family:"DM Serif Display", serif; font-size:22px; letter-spacing:.2px; color:#fff; }
        .mini{ color:var(--ink-dim); }

        .divider{ border:0; border-top:1px solid rgba(255,255,255,.15); margin:18px 0; }
        .copyright{ font-size:14px; color:var(--ink-dim); }

        /* Contact + headings */
        .heading{
          font-family:"DM Serif Display", serif;
          font-size:18px; margin:0 0 10px; color:#fff;
        }
        .contact-list{ display:grid; gap:12px; }
        .contact-item{
          display:flex; align-items:center; gap:10px;
          color:#fff; text-decoration:none; transition:opacity .2s ease;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
        }
        .contact-item:hover{ opacity:.85; }
        .contact-item:focus-visible{ outline:2px solid #fff; outline-offset:3px; border-radius:10px; }
        .icon{
          width:36px; height:36px; border-radius:10px; display:grid; place-items:center;
          background:rgba(255,255,255,.08); color:#fff; border:1px solid rgba(255,255,255,.12);
        }
        .addr{ font-style:normal; color:#fff; }

        /* Socials */
        .socials{ display:flex; gap:14px; }
        .socials a{
          display:inline-flex; width:56px; height:56px; border-radius:14px;
          align-items:center; justify-content:center;
          background:var(--navy); color:#fff; border:1px solid rgba(255,255,255,.12);
          transition:transform .2s ease; text-decoration:none;
        }
        .socials a:hover{ transform:translateY(-2px); }
        .socials a:focus-visible{ outline:2px solid #fff; outline-offset:3px; border-radius:14px; }
        .socials svg{ width:24px; height:24px; }

        @media (max-width:900px){
          .footer-grid{ grid-template-columns:1fr; }
        }
      `}</style>
    </>
  );
}
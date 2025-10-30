"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const CONTACT = {
    phone: "(437) 888-2974",
    phoneHref: "tel:+14378882974",
    email: "info@mearslaw.ca",
    emailHref: "mailto:info@mearslaw.ca",
  };

  // ---- CSS (injected once) ----
  useEffect(() => {
    const css = `
      /* Force Inter everywhere in this component */
      .updates-strip, .updates-strip * , .site-footer, .site-footer * {
        font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif !important;
      }

      /* ===== Updates strip (GLOBAL-ISH look, but scoped by class) ===== */
      .updates-strip{
        --navy:#0A1628;
        --purple:#1f1e3f;
        background:var(--purple);
        border-top:1px solid rgba(255,255,255,.1);
        border-bottom:1px solid rgba(255,255,255,.1);
      }
      .updates-strip .container{ width:min(1200px,92%); margin:0 auto; }
      .updates-strip .strip-inner{
        display:flex; align-items:center; justify-content:center; gap:16px;
        padding:10px 0; min-height:46px;
      }
      .updates-strip .strip-text{ font-weight:700; font-size:17px; color:#fff; text-align:center; letter-spacing:0.1px; }
      .updates-strip .strip-btn{
        display:inline-flex; align-items:center; gap:6px;
        padding:8px 14px; border-radius:4px;
        background:#fff; color:var(--navy);
        border:1px solid rgba(255,255,255,.2);
        font-weight:600; font-size:14px; line-height:1; text-decoration:none;
      }
      .updates-strip .strip-btn:hover{ transform:translateY(-1px); box-shadow:0 4px 10px rgba(0,0,0,.3); }
      .updates-strip .strip-btn .arrow{ display:inline-block; transform:translateX(1px); }

      /* ===== Footer ===== */
      .site-footer{
        --navy:#0f223b;
        --slate:#5c6e86;
        --ink:#eaf2ff;
        --ink-dim:#c7d5e9;
        --radius:12px;
        --cta-gray:#E5E7EB;
        --accent:#4B8071;

        position:relative; z-index:1;
        background:var(--navy);
        color:var(--ink);
        padding:0 0 54px;
      }
      .site-footer .container{ width:min(1200px,92%); margin:0 auto; }

      .site-footer .cta-section{ 
        text-align:center; 
        padding:56px 0; 
        background:var(--cta-gray);
        margin-bottom:48px;
      }
      .site-footer .cta-title{
        font-weight:800; letter-spacing:-0.2px;
        font-size:clamp(26px, 4vw, 40px);
        margin:0 0 10px; color:#0A1628;
      }
      .site-footer .cta-sub{ margin:0 0 18px; color:#4B5563; }
      .site-footer .cta-btn,
      .site-footer .cta-btn:visited,
      .site-footer .cta-btn:link,
      .site-footer .cta-btn:active{
        display:inline-flex; align-items:center; gap:10px;
        padding:12px 20px;
        border-radius:4px;
        background:#fff; color:var(--navy);
        border:1px solid rgba(0,0,0,.08);
        font-weight:700; text-decoration:none;
        box-shadow:0 6px 16px rgba(0,0,0,.15);
        transition:all .3s ease;
        position:relative;
        overflow:hidden;
      }
      .site-footer .cta-btn::before{
        content:'';
        position:absolute;
        top:0; left:0; right:0; bottom:0;
        background:var(--accent);
        transform:translateX(-100%);
        transition:transform .3s ease;
        z-index:-1;
      }
      .site-footer .cta-btn:hover{ 
        transform:translateY(-2px); 
        box-shadow:0 8px 20px rgba(0,0,0,.18);
        color:#fff;
      }
      .site-footer .cta-btn:hover::before{
        transform:translateX(0);
      }
      .site-footer .arrow{ 
        display:inline-block; 
        transform:translateX(2px);
        transition:transform .3s ease;
      }
      .site-footer .cta-btn:hover .arrow{
        transform:translateX(6px);
      }

      .site-footer .footer-grid{
        display:grid; grid-template-columns:2fr 1fr 1fr; gap:24px;
        border-top:1px solid rgba(255,255,255,.15);
        padding-top:28px;
      }

      .site-footer .brand{ display:flex; align-items:center; gap:0; margin-bottom:12px; color:#fff; text-decoration:none; }
      .site-footer .brand-mark-img{
        width:clamp(44px, 5vw, 76px);
        height:clamp(44px, 5vw, 76px);
        border-radius:10px; object-fit:cover;
        filter: drop-shadow(0 4px 10px rgba(0,0,0,.35));
      }
      .site-footer .mini{ color:var(--ink-dim); }

      .site-footer .divider{ border:0; border-top:1px solid rgba(255,255,255,.15); margin:18px 0; }
      .site-footer .copyright{ font-size:14px; color:var(--ink-dim); }
      .site-footer .privacy-link{ color:var(--ink-dim); text-decoration:underline; margin-top:8px; display:inline-block; transition:color .2s ease; }
      .site-footer .privacy-link:hover{ color:var(--ink); }

      .site-footer .heading{
        font-weight:800; letter-spacing:0.1px;
        font-size:18px; margin:0 0 10px; color:#fff;
      }

      .site-footer .contact-list{ display:grid; gap:12px; }
      .site-footer .contact-item{
        display:flex; align-items:center; gap:10px;
        color:#fff; text-decoration:none; transition:opacity .2s ease;
        font-weight:600;
      }
      .site-footer .contact-item:hover{ opacity:.85; }
      .site-footer .contact-item:focus-visible{ outline:2px solid #fff; outline-offset:3px; border-radius:10px; }
      .site-footer .icon{
        width:36px; height:36px; border-radius:10px; display:grid; place-items:center;
        background:rgba(255,255,255,.08); color:#fff; border:1px solid rgba(255,255,255,.12);
      }
      .site-footer .addr{ font-style:normal; color:#fff; }

      .site-footer .socials{ display:flex; gap:14px; }
      .site-footer .socials a{
        display:inline-flex; width:56px; height:56px; border-radius:14px;
        align-items:center; justify-content:center;
        background:var(--navy); color:#fff; border:1px solid rgba(255,255,255,.12);
        transition:transform .2s ease; text-decoration:none;
      }
      .site-footer .socials a:hover{ transform:translateY(-2px); }
      .site-footer .socials svg{ width:24px; height:24px; }

      /* Instagram outline only */
      .site-footer .socials a.instagram svg { fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

      /* New: Offices link under socials */
      .site-footer .offices-link{
        display:inline-block;
        margin-top:12px;
        color:#EAF2FF;
        text-decoration:none;
        font-weight:700;
        letter-spacing:.2px;
      }
      .site-footer .offices-link:hover{ text-decoration:underline; }

      @media (max-width:900px){
        .updates-strip .strip-inner{ gap:10px; padding:8px 0; min-height:42px; }
        .updates-strip .strip-text{ font-size:16px; }
        .updates-strip .strip-btn{ padding:8px 12px; }
        .site-footer .footer-grid{ grid-template-columns:1fr; }
      }
    `;
    const tag = document.createElement("style");
    tag.setAttribute("data-footer-css", "true");
    tag.appendChild(document.createTextNode(css));
    document.head.appendChild(tag);
    return () => { try { document.head.removeChild(tag); } catch(_) {} };
  }, []);

  // ---- Short helpers ----
  const el = React.createElement;
  const svg = (attrs, children=[]) => el("svg", attrs, ...children);
  const path = (attrs) => el("path", attrs);
  const rect = (attrs) => el("rect", attrs);
  const circle = (attrs) => el("circle", attrs);

  // ===== Updates strip =====
  const UpdatesStrip =
    el("section", { className:"updates-strip", role:"region", "aria-label":"Email updates" },
      el("div", { className:"container strip-inner" },
        el("span", { className:"strip-text" }, "Want to receive updates from Mears?"),
        el("a", { className:"strip-btn", href:"#signup", "aria-label":"Sign up for updates" },
          "Sign up ",
          el("span", { className:"arrow" }, "›")
        )
      )
    );

  // ===== CTA section =====
  const Cta =
    el("div", { className:"cta-section" },
      el("div", { className:"container" },
        el("h2", { className:"cta-title" }, "Ready to Discuss Your Legal Matter?"),
        el("p", { className:"cta-sub" }, "Get expert legal guidance tailored to your specific needs. Schedule a confidential consultation to explore how we can help."),
        el("a", { className:"cta-btn", href:"#book", "aria-label":"Book Consultation" },
          "Book Consultation ",
          el("span", { className:"arrow" }, "→")
        )
      )
    );

  // ===== Brand + blurb =====
  const BrandBlock =
    el("div", null,
      el("div", { className:"brand" },
        el("img", { src:"/images/mears-logo.png", alt:"Mears Law logo", className:"brand-mark-img" })
      ),
      el("p", { className:"mini" },
        "Focused Expertise. Proven Results. Specialized legal counsel delivered with precision, discretion, and clear strategy."
      ),
      el("hr", { className:"divider" }),
      el("div", { className:"copyright" },
        `© ${YEAR} Mears Law. All rights reserved. | Client-Centered, Results-Driven.`,
        el("br"),
        el(Link, { className:"privacy-link", href:"/privacy" }, "Privacy Policy & Terms")
      )
    );

  // ===== Contact info (WITHOUT address) =====
  const ContactBlock =
    el("div", null,
      el("h4", { className:"heading" }, "Contact Info"),
      el("div", { className:"contact-list" },
        // Phone
        el("a", { className:"contact-item", href:CONTACT.phoneHref },
          el("span", { className:"icon", "aria-hidden":"true" },
            svg({ viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"1.8", strokeLinecap:"round" }, [
              path({ d:"M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3.1 18.6 18.6 0 0 1-5.7-5.7A19 19 0 0 1 2.7 4.8 2 2 0 0 1 4.7 2.6h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L9 10a16 16 0 0 0 5 5l1.9-1a2 2 0 0 1 2.1.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.4 1.7Z" })
            ])
          ),
          CONTACT.phone
        ),
        // Email
        el("a", { className:"contact-item", href:CONTACT.emailHref },
          el("span", { className:"icon", "aria-hidden":"true" },
            svg({ viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"1.8", strokeLinecap:"round" }, [
              path({ d:"M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" }),
              path({ d:"m22 8-10 6L2 8" })
            ])
          ),
          CONTACT.email
        ),
        // Offices link (replaces address)
        el("a", { className:"contact-item", href:"/offices" },
          el("span", { className:"icon", "aria-hidden":"true" },
            svg({ viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"1.8", strokeLinecap:"round", strokeLinejoin:"round" }, [
              path({ d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
              path({ d:"M9 22V12h6v10" })
            ])
          ),
          "Offices"
        )
      )
    );

  // ===== Follow + socials =====
  const SocialsBlock =
    el("div", null,
      el("h4", { className:"heading" }, "Follow"),
      el("div", { className:"socials", "aria-label":"Social Media" },
        // LinkedIn
        el("a", { href:"https://www.linkedin.com/company/mearslawprofessionalcorporation/?originalSubdomain=ca", "aria-label":"LinkedIn", title:"LinkedIn" },
          svg({ viewBox:"0 0 24 24", fill:"currentColor", "aria-hidden":"true" }, [
            path({ d:"M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.76-2.1 4.02 0 4.76 2.65 4.76 6.1V24h-3.96v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V24H8.5V8.5z" })
          ])
        ),
        // Instagram (outline camera)
        el("a", { className:"instagram", href:"https://www.instagram.com/mearslawjamaica/", "aria-label":"Instagram", title:"Instagram" },
          svg({ viewBox:"0 0 24 24", "aria-hidden":"true" }, [
            rect({ x:"3", y:"3", width:"18", height:"18", rx:"5", ry:"5" }),
            circle({ cx:"12", cy:"12", r:"4.2" }),
            circle({ cx:"17.5", cy:"6.5", r:"1.5" })
          ])
        ),
        // TikTok
        el("a", { href:"https://www.tiktok.com/@mearslaw", "aria-label":"TikTok", title:"TikTok" },
          svg({ viewBox:"0 0 24 24", fill:"currentColor", "aria-hidden":"true" }, [
            path({ d:"M21 8.5c-2.3 0-4.3-1.1-5.6-2.8V17a7 7 0 1 1-7-7c.6 0 1.2.1 1.7.3v3.2a3.7 3.7 0 1 0 2.6 3.5V2h3.2c.3 2.6 2.4 4.6 5.1 4.9V8.5z" })
          ])
        )
      )
    );

  const FooterGrid =
    el("div", { className:"container footer-grid" },
      BrandBlock,
      ContactBlock,
      SocialsBlock
    );

  const FooterRoot =
    el("footer", { className:"site-footer" }, Cta, FooterGrid);

  // ===== Final render tree =====
  return el(React.Fragment, null,
    // Updates strip
    el("section", { className:"updates-strip", role:"region", "aria-label":"Email updates" },
      el("div", { className:"container strip-inner" },
        el("span", { className:"strip-text" }, "Want to receive updates from Mears?"),
        el("a", { className:"strip-btn", href:"#signup", "aria-label":"Sign up for updates" },
          "Sign up ", el("span", { className:"arrow" }, "›")
        )
      )
    ),
    FooterRoot
  );
}
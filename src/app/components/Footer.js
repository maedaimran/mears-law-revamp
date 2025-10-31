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
        display:grid; grid-template-columns:1.5fr 1fr 1fr; gap:48px;
        border-top:1px solid rgba(255,255,255,.15);
        padding-top:32px;
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
        font-weight:400;
      }
      .site-footer .contact-item:hover{ opacity:.85; }
      .site-footer .contact-item:focus-visible{ outline:2px solid #fff; outline-offset:3px; border-radius:10px; }
      .site-footer .icon{
        width:36px; height:36px; border-radius:10px; display:grid; place-items:center;
        background:rgba(255,255,255,.08); color:#fff; border:1px solid rgba(255,255,255,.12);
      }
      .site-footer .addr{ font-style:normal; color:#fff; }

      .site-footer .socials{ display:flex; gap:12px; }
      .site-footer .socials a{
        display:inline-flex; width:48px; height:48px; border-radius:12px;
        align-items:center; justify-content:center;
        background:rgba(255,255,255,.06); color:#fff; border:1px solid rgba(255,255,255,.15);
        transition:all .25s ease; text-decoration:none;
      }
      .site-footer .socials a:hover{ 
        transform:translateY(-2px); 
        background:rgba(255,255,255,.1);
        border-color:rgba(255,255,255,.25);
        box-shadow:0 4px 12px rgba(0,0,0,.2);
      }
      .site-footer .socials svg{ width:22px; height:22px; }

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
            path({ d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
          ])
        ),
        // Instagram
        el("a", { href:"https://www.instagram.com/mearslawjamaica/", "aria-label":"Instagram", title:"Instagram" },
          svg({ viewBox:"0 0 24 24", fill:"currentColor", "aria-hidden":"true" }, [
            path({ d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" })
          ])
        ),
        // TikTok
        el("a", { href:"https://www.tiktok.com/@mearslaw", "aria-label":"TikTok", title:"TikTok" },
          svg({ viewBox:"0 0 24 24", fill:"currentColor", "aria-hidden":"true" }, [
            path({ d:"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" })
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
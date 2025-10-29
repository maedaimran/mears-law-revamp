"use client";
import Link from "next/link";
import { useState, useCallback } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="/" aria-label="Mears Law home">
            <img
              src="/images/mears-logo.png"
              alt="Mears Law logo"
              className="brand-mark-img"
            />
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="/services">Practice Areas</a>
            <a href="#careers">Careers</a>
            <a href="#insights">Insights</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="cta">
            <a className="btn btn-ghost" href="#contact" aria-label="Request a call back">
              Request a Call Back
            </a>
            <a className="btn btn-primary" href="#book" aria-label="Book consultation">
              Book Consultation
            </a>
            <button className="hamburger" aria-label="Open menu" onClick={toggleMenu}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <a className="brand" href="/" onClick={closeMenu} aria-label="Mears Law home">
            <img src="/images/mears-logo.png" alt="Mears Law logo" className="brand-mark-img small" />
          </a>
          <button className="close" aria-label="Close menu" onClick={closeMenu}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mobile-links">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="/services" onClick={closeMenu}>Practice Areas</a>
          <a href="#careers" onClick={closeMenu}>Careers</a>
          <a href="#insights" onClick={closeMenu}>Insights</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="mobile-cta">
          <a className="btn btn-ghost" href="#contact" onClick={closeMenu}>Request a Call Back</a>
          <a className="btn btn-primary" href="#book" onClick={closeMenu}>Book Consultation</a>
        </div>
      </div>

      <style jsx>{`
        .site-header{
          --navy:#0f223b;
          --ink:#EAF2FF;
          --ink-dim:#C7D5E9;
          --radius:12px;
        }

        .site-header{
          position:sticky; top:0; z-index:1000;
          background:var(--navy) !important;
          border-bottom:1px solid rgba(255,255,255,0.12);
          box-shadow:0 2px 6px rgba(0,0,0,0.06);
          color:var(--ink);
          overflow:visible; /* allow logo to hang outside */
        }

        .container{ width:min(1200px,92%); margin:0 auto; }

        /* SHORTER BAR: small padding; the logo won't shrink */
        .nav{
          display:flex; align-items:center; justify-content:space-between;
          padding:6px 0; /* much shorter bar */
        }

        .brand{ display:flex; align-items:center; text-decoration:none; color:var(--ink) !important; }
        .brand-mark-img{
          width:180px;          /* keep the same big logo size */
          height:auto;
          display:block;
          object-fit:contain;
          border-radius:4px;
          filter: drop-shadow(0 3px 10px rgba(0,0,0,.28));
          flex-shrink:0;

          /* Key trick: let the image extend outside the header box so the bar is shorter */
          margin-top:-36px;
          margin-bottom:-56px;
        }

        .nav-links{ display:flex; align-items:center; gap:28px; }
        .site-header .nav-links a,
        .site-header .nav-links a:visited{
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-weight:600; text-decoration:none;
          color:var(--ink-dim) !important;
          transition:color .2s ease, opacity .2s ease;
        }
        .site-header .nav-links a:hover{ color:var(--ink) !important; }
        .site-header .nav-links a:focus-visible{
          outline:2px solid rgba(234,242,255,.35); outline-offset:3px; border-radius:6px;
        }

        .cta{ display:flex; align-items:center; gap:10px; }
        .btn{
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          padding:10px 14px; /* match desktop sizing */
          border-radius:14px; font-weight:700;
          border:1px solid rgba(0,0,0,0.12); display:inline-flex; align-items:center; gap:10px;
          text-decoration:none; transition:transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
          background:#fff; color:var(--navy);
          box-shadow:0 2px 6px rgba(0,0,0,.08);
        }
        .btn:hover{ box-shadow:0 4px 10px rgba(0,0,0,.12); transform:translateY(-1px); }
        .site-header .btn-primary{ background:#fff !important; color:var(--navy) !important; }
        .site-header .btn-ghost{ background:#fff !important; color:var(--navy) !important; }

        .hamburger{ display:none; border:0; background:none; padding:6px; color:var(--ink); }

        @media (max-width:900px){
          .nav{ padding:6px 0; }
          .brand-mark-img{ width:150px; margin-top:-10px; margin-bottom:-10px; }
          .nav-links{ display:none; }
          .cta .btn-ghost{ display:none; }
          .cta .btn-primary{ display:none; } /* move Book Consultation to drawer on mobile */
          .hamburger{ display:block; }
        }

        /* Mobile drawer */
        .mobile-drawer{
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: 84vw; max-width: 360px;
          background: #0f223b; /* same as header */
          color: var(--ink);
          transform: translateX(100%);
          transition: transform .28s ease;
          box-shadow: -8px 0 24px rgba(0,0,0,.22);
          z-index: 1100;
          display: none; /* hidden on desktop */
        }
        .mobile-drawer.open{ transform: translateX(0); }

        .mobile-drawer .brand-mark-img.small{ width:140px; margin: 0; filter: drop-shadow(0 2px 8px rgba(0,0,0,.24)); }
        .drawer-header{ display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(255,255,255,0.1); }
        .mobile-drawer{ font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; }
        .mobile-links{ display:flex; flex-direction:column; padding:12px 14px; gap:14px; }
        .mobile-links a{ color:#fff !important; text-decoration:none; font-weight:600; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; }
        .mobile-links a:hover{ color:#fff !important; opacity:.9; }
        .mobile-cta{ display:flex; flex-direction:column; gap:10px; padding:8px 14px 16px; }
        .mobile-cta .btn{ background:#fff; color:var(--navy); border:1px solid rgba(0,0,0,0.12); box-shadow:0 2px 6px rgba(0,0,0,.08); }
        .close{ border:0; background:none; color:#fff; padding:6px; }

        @media (max-width:900px){
          .mobile-drawer{ display:block; }
        }
      `}</style>
    </>
  );
}

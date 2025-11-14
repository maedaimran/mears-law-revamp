// // // "use client";
// // // import React, { useState, useCallback, useEffect, createElement as h, Fragment } from "react";
// // // import Link from "next/link";

// // // /* ---------- inline CSS (copied from your JSX block, unchanged in look/feel) ---------- */
// // // const CSS = `
// // // /* Vars + base */
// // // .site-header{
// // //   --navy:#0f223b;
// // //   --ink:#EAF2FF;
// // //   --ink-dim:#C7D5E9;
// // //   --radius:12px;

// // //   position:sticky; top:0; z-index:1000;
// // //   background:var(--navy);
// // //   border-bottom:1px solid rgba(255,255,255,0.12);
// // //   box-shadow:0 2px 6px rgba(0,0,0,0.06);
// // //   color:var(--ink);
// // //   font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
// // // }

// // // .container{ width:min(1200px,92%); margin:0 auto; }

// // // /* ====== TALL HEADER BAR ====== */
// // // .site-header{ --bar-h:110px; }   /* larger */
// // // .nav{
// // //   height:var(--bar-h);
// // //   padding:0;
// // //   display:flex; align-items:center; justify-content:space-between;
// // //   overflow:visible;
// // // }

// // // /* Brand */
// // // .brand{ display:flex; align-items:center; text-decoration:none; color:var(--ink); }
// // // .brand-mark-img{
// // //   width:160px; height:auto; display:block; object-fit:contain;
// // //   filter: drop-shadow(0 3px 10px rgba(0,0,0,.28));
// // //   margin-top:12px;             /* positioned lower */
// // //   margin-bottom:-6px;
// // //   flex-shrink:0;
// // // }
// // // .brand-mark-img.small{ width:140px; margin:0; }

// // // /* Primary nav */
// // // .nav-links{ display:flex; align-items:center; gap:65px; }
// // // .site-header .nav-links a,
// // // .site-header .nav-links a:visited{
// // //   font-weight:600; text-decoration:none;
// // //   color:var(--ink-dim);
// // //   display:inline-flex; align-items:center;
// // //   line-height:1.2;
// // //   padding:12px px;
// // //   transition:color .2s ease, opacity .2s ease;
// // //   white-space:nowrap;
// // // }
// // // .site-header .nav-links a:hover{ color:var(--ink); }
// // // .site-header .nav-links a:focus-visible{
// // //   outline:2px solid rgba(234,242,255,.35); outline-offset:3px; border-radius:6px;
// // // }

// // // /* CTA */
// // // .cta{ display:flex; align-items:center; gap:10px; }
// // // .btn{
// // //   display:inline-flex; align-items:center; justify-content:center;
// // //   padding:6px 12px;
// // //   line-height:1.1;
// // //   border-radius:14px; font-weight:700;
// // //   border:1px solid rgba(0,0,0,0.12);
// // //   text-decoration:none;
// // //   transition:transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
// // //   background:#fff; color:var(--navy);
// // //   box-shadow:0 2px 6px rgba(0,0,0,.08);
// // //   white-space:nowrap;
// // // }
// // // .btn:hover{ box-shadow:0 4px 10px rgba(0,0,0,.12); transform:translateY(-1px); }
// // // .site-header .btn-primary{ background:#fff; color:var(--navy); }

// // // /* Only square the DESKTOP header CTA */
// // // .site-header .cta .btn { border-radius: 4px; }

// // // .hamburger{ display:none; border:0; background:none; padding:6px; color:var(--ink); }

// // // /* Mobile */
// // // @media (max-width:900px){
// // //   .site-header{ --bar-h:88px; }
// // //   .brand{ align-items:flex-start; padding-top:8px; }
// // //   .brand-mark-img{ width:140px; margin-top:0px; margin-bottom:0px; }
// // //   .nav-links{ display:none; }
// // //   .hamburger{ display:block; }
// // // }

// // // /* Mobile drawer */
// // // .mobile-drawer{
// // //   position: fixed;
// // //   top: 0; right: 0; bottom: 0;
// // //   width: 84vw; max-width: 360px;
// // //   background: #0f223b;
// // //   color: var(--ink);
// // //   transform: translateX(100%);
// // //   transition: transform .28s ease;
// // //   box-shadow: -8px 0 24px rgba(0,0,0,.22);
// // //   z-index: 1100;
// // //   display: none;
// // //   font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
// // // }
// // // .mobile-drawer.open{ transform: translateX(0); }
// // // @media (max-width:900px){ .mobile-drawer{ display:block; } }

// // // .drawer-header{ display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(255,255,255,0.1); }
// // // .mobile-links{ display:flex; flex-direction:column; padding:12px 14px; gap:14px; }
// // // .mobile-links a{ color:#fff; text-decoration:none; font-weight:600; line-height:1.25; }
// // // .mobile-links a:hover{ opacity:.9; }
// // // .mobile-cta{ display:flex; flex-direction:column; gap:10px; padding:8px 14px 16px; }
// // // .mobile-cta .btn{ background:#fff; color:var(--navy); }
// // // .close{ border:0; background:none; color:#fff; padding:6px; }
// // // `;

// // // /* ---------- inject CSS once ---------- */
// // // function useInlineStyles(id, cssText) {
// // //   useEffect(() => {
// // //     if (typeof document === "undefined") return;
// // //     let el = document.getElementById(id);
// // //     if (!el) {
// // //       el = document.createElement("style");
// // //       el.id = id;
// // //       el.type = "text/css";
// // //       el.appendChild(document.createTextNode(cssText));
// // //       document.head.appendChild(el);
// // //     }
// // //   }, [id, cssText]);
// // // }

// // // /* ---------- icons (no JSX) ---------- */
// // // const IconHamburger = () =>
// // //   h(
// // //     "svg",
// // //     { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
// // //     h("path", { d: "M3 6h18M3 12h18M3 18h18" })
// // //   );

// // // const IconClose = () =>
// // //   h(
// // //     "svg",
// // //     { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
// // //     h("path", { d: "M18 6L6 18M6 6l12 12" })
// // //   );

// // // /* ---------- component (no JSX) ---------- */
// // // export default function Header() {
// // //   useInlineStyles("ml-header-inline-css", CSS);

// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);
// // //   const closeMenu = useCallback(() => setIsOpen(false), []);
 


// // //   /* brand */
// // //   const brandLink = h(
// // //     Link,
// // //     { className: "brand", href: "/", "aria-label": "Mears Law home" },
// // //     h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img" })
// // //   );

// // //   /* desktop primary nav */
// // //   const navLinks = h(
// // //     "nav",
// // //     { className: "nav-links", "aria-label": "Primary" },
// // //     h(Link, { href: "/" }, "Home"),
// // //     h(Link, { href: "/about" }, "About"),
// // //     h(Link, { href: "/services" }, "Services"),
// // //     // h(Link, { href: "/insights" }, "Insights"),
// // //     h(Link, { href: "/careers" }, "Careers"),
// // //     h(Link, { href: "/contact" }, "Contact")
// // //   );

// // //   /* desktop cta + hamburger */
// // //   const ctaBlock = h(
// // //     "div",
// // //     { className: "cta" },
// // //     h(
// // //       Link,
// // //       { className: "btn btn-primary", href: "https://forms.office.com/Pages/ResponsePage.aspx?id=kB-JP2eaikmLL06vvXL6rEEC8YFehKhHkPXO4BVvwlJUQU1aV0w3NVQ5TlFEWFJTVUdTTzVWSFRWMy4u", "aria-label": "Book consultation" },
// // //       "Book Consultation"
// // //     ),
// // //     h(
// // //       "button",
// // //       { className: "hamburger", "aria-label": "Open menu", onClick: toggleMenu },
// // //       h(IconHamburger)
// // //     )
// // //   );

// // //   const topBar = h(
// // //     "div",
// // //     { className: "container nav" },
// // //     brandLink,
// // //     navLinks,
// // //     ctaBlock
// // //   );

// // //   const headerEl = h("header", { className: "site-header" }, topBar);

// // //   /* mobile drawer */
// // //   const drawerHeader = h(
// // //     "div",
// // //     { className: "drawer-header" },
// // //     h(
// // //       Link,
// // //       { className: "brand", href: "/", onClick: closeMenu, "aria-label": "Mears Law home" },
// // //       h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img small" })
// // //     ),
// // //     h(
// // //       "button",
// // //       { className: "close", "aria-label": "Close menu", onClick: closeMenu },
// // //       h(IconClose)
// // //     )
// // //   );

// // //   const mobileLinks = h(
// // //     "nav",
// // //     { className: "mobile-links", "aria-label": "Mobile" },
// // //     h(Link, { href: "/", onClick: closeMenu }, "Home"),
// // //     h(Link, { href: "/about", onClick: closeMenu }, "About"),
// // //     h(Link, { href: "/services", onClick: closeMenu }, "Services"),
// // //     // h(Link, { href: "/insights", onClick: closeMenu }, "Insights"),
// // //     h(Link, { href: "/careers", onClick: closeMenu }, "Careers"),
// // //     h(Link, { href: "/contact", onClick: closeMenu }, "Contact")
// // //   );

// // //   const mobileCta = h(
// // //     "div",
// // //     { className: "mobile-cta" },
// // //     h(Link, { className: "btn", href: "https://forms.office.com/Pages/ResponsePage.aspx?id=kB-JP2eaikmLL06vvXL6rEEC8YFehKhHkPXO4BVvwlJUQU1aV0w3NVQ5TlFEWFJTVUdTTzVWSFRWMy4u", onClick: closeMenu }, "Book Consultation")
// // //   );

// // //   const drawer = h(
// // //     "div",
// // //     { className: `mobile-drawer${isOpen ? " open" : ""}` },
// // //     drawerHeader,
// // //     mobileLinks,
// // //     mobileCta
// // //   );

// // //   return h(Fragment, null, headerEl, drawer);
// // // }
// // "use client";
// // import React, { useState, useCallback, useEffect, createElement as h, Fragment } from "react";
// // import Link from "next/link";

// // /* ---------- inline CSS (copied from your JSX block, unchanged in look/feel) ---------- */
// // const CSS = `
// // /* Vars + base */
// // .site-header{
// //   --navy:#0f223b;
// //   --ink:#EAF2FF;
// //   --ink-dim:#C7D5E9;
// //   --radius:12px;

// //   position:sticky; top:0; z-index:1000;
// //   background:var(--navy);
// //   border-bottom:1px solid rgba(255,255,255,0.12);
// //   box-shadow:0 2px 6px rgba(0,0,0,0.06);
// //   color:var(--ink);
// //   font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
// // }

// // .container{ width:min(1200px,92%); margin:0 auto; }

// // /* ====== TALL HEADER BAR ====== */
// // .site-header{ --bar-h:110px; }   /* larger */
// // .nav{
// //   height:var(--bar-h);
// //   padding:0;
// //   display:flex; align-items:center; justify-content:space-between;
// //   overflow:visible;
// // }

// // /* Brand */
// // .brand{ display:flex; align-items:center; text-decoration:none; color:var(--ink); }
// // .brand-mark-img{
// //   width:160px; height:auto; display:block; object-fit:contain;
// //   filter: drop-shadow(0 3px 10px rgba(0,0,0,.28));
// //   margin-top:12px;             /* positioned lower */
// //   margin-bottom:-6px;
// //   flex-shrink:0;
// // }
// // .brand-mark-img.small{ width:140px; margin:0; }

// // /* Primary nav */
// // .nav-links{ display:flex; align-items:center; gap:65px; }
// // .site-header .nav-links a,
// // .site-header .nav-links a:visited{
// //   font-weight:600; text-decoration:none;
// //   color:var(--ink-dim);
// //   display:inline-flex; align-items:center;
// //   line-height:1.2;
// //   padding:12px px;
// //   transition:color .2s ease, opacity .2s ease;
// //   white-space:nowrap;
// // }
// // .site-header .nav-links a:hover{ color:var(--ink); }
// // .site-header .nav-links a:focus-visible{
// //   outline:2px solid rgba(234,242,255,.35); outline-offset:3px; border-radius:6px;
// // }

// // /* CTA */
// // .cta{ display:flex; align-items:center; gap:10px; }
// // .btn{
// //   display:inline-flex; align-items:center; justify-content:center;
// //   padding:6px 12px;
// //   line-height:1.1;
// //   border-radius:14px; font-weight:700;
// //   border:1px solid rgba(0,0,0,0.12);
// //   text-decoration:none;
// //   transition:transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
// //   background:#fff; color:var(--navy);
// //   box-shadow:0 2px 6px rgba(0,0,0,.08);
// //   white-space:nowrap;
// //   cursor: pointer;
// // }
// // .btn:hover{ box-shadow:0 4px 10px rgba(0,0,0,.12); transform:translateY(-1px); }
// // .site-header .btn-primary{ background:#fff; color:var(--navy); }

// // /* Only square the DESKTOP header CTA */
// // .site-header .cta .btn { border-radius: 4px; }

// // .hamburger{ display:none; border:0; background:none; padding:6px; color:var(--ink); }

// // /* Mobile */
// // @media (max-width:900px){
// //   .site-header{ --bar-h:88px; }
// //   .brand{ align-items:flex-start; padding-top:8px; }
// //   .brand-mark-img{ width:140px; margin-top:0px; margin-bottom:0px; }
// //   .nav-links{ display:none; }
// //   .hamburger{ display:block; }
// // }

// // /* Mobile drawer */
// // .mobile-drawer{
// //   position: fixed;
// //   top: 0; right: 0; bottom: 0;
// //   width: 84vw; max-width: 360px;
// //   background: #0f223b;
// //   color: var(--ink);
// //   transform: translateX(100%);
// //   transition: transform .28s ease;
// //   box-shadow: -8px 0 24px rgba(0,0,0,.22);
// //   z-index: 1100;
// //   display: none;
// //   font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
// // }
// // .mobile-drawer.open{ transform: translateX(0); }
// // @media (max-width:900px){ .mobile-drawer{ display:block; } }

// // .drawer-header{ display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(255,255,255,0.1); }
// // .mobile-links{ display:flex; flex-direction:column; padding:12px 14px; gap:14px; }
// // .mobile-links a{ color:#fff; text-decoration:none; font-weight:600; line-height:1.25; }
// // .mobile-links a:hover{ opacity:.9; }
// // .mobile-cta{ display:flex; flex-direction:column; gap:10px; padding:8px 14px 16px; }
// // .mobile-cta .btn{ background:#fff; color:var(--navy); }
// // .close{ border:0; background:none; color:#fff; padding:6px; }

// // /* Calendly Modal */
// // .calendly-overlay {
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   right: 0;
// //   bottom: 0;
// //   background: rgba(0, 0, 0, 0.7);
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   z-index: 2000;
// //   padding: 20px;
// //   opacity: 0;
// //   transition: opacity 0.3s ease;
// // }

// // .calendly-overlay.open {
// //   opacity: 1;
// // }

// // .calendly-modal {
// //   background: white;
// //   border-radius: 12px;
// //   width: 100%;
// //   max-width: 900px;
// //   height: 90vh;
// //   max-height: 700px;
// //   position: relative;
// //   box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
// //   overflow: hidden;
// //   transform: scale(0.95);
// //   transition: transform 0.3s ease;
// // }

// // .calendly-overlay.open .calendly-modal {
// //   transform: scale(1);
// // }

// // .calendly-close {
// //   position: absolute;
// //   top: 12px;
// //   right: 12px;
// //   background: rgba(0, 0, 0, 0.6);
// //   color: white;
// //   border: none;
// //   border-radius: 50%;
// //   width: 36px;
// //   height: 36px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   cursor: pointer;
// //   z-index: 10;
// //   transition: background 0.2s ease;
// // }

// // .calendly-close:hover {
// //   background: rgba(0, 0, 0, 0.8);
// // }

// // .calendly-iframe {
// //   width: 100%;
// //   height: 100%;
// //   border: none;
// // }
// // `;

// // /* ---------- inject CSS once ---------- */
// // function useInlineStyles(id, cssText) {
// //   useEffect(() => {
// //     if (typeof document === "undefined") return;
// //     let el = document.getElementById(id);
// //     if (!el) {
// //       el = document.createElement("style");
// //       el.id = id;
// //       el.type = "text/css";
// //       el.appendChild(document.createTextNode(cssText));
// //       document.head.appendChild(el);
// //     }
// //   }, [id, cssText]);
// // }

// // /* ---------- Load Calendly script ---------- */
// // function useCalendlyScript() {
// //   useEffect(() => {
// //     if (typeof window === "undefined") return;
    
// //     // Check if script already exists
// //     if (document.querySelector('script[src*="calendly"]')) return;
    
// //     const script = document.createElement("script");
// //     script.src = "https://assets.calendly.com/assets/external/widget.js";
// //     script.async = true;
// //     document.body.appendChild(script);
    
// //     return () => {
// //       // Cleanup if needed
// //     };
// //   }, []);
// // }

// // /* ---------- icons (no JSX) ---------- */
// // const IconHamburger = () =>
// //   h(
// //     "svg",
// //     { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
// //     h("path", { d: "M3 6h18M3 12h18M3 18h18" })
// //   );

// // const IconClose = () =>
// //   h(
// //     "svg",
// //     { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
// //     h("path", { d: "M18 6L6 18M6 6l12 12" })
// //   );

// // /* ---------- component (no JSX) ---------- */
// // export default function Header() {
// //   useInlineStyles("ml-header-inline-css", CSS);
// //   useCalendlyScript();

// //   const [isOpen, setIsOpen] = useState(false);
// //   const [showCalendly, setShowCalendly] = useState(false);
  
// //   const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);
// //   const closeMenu = useCallback(() => setIsOpen(false), []);
  
// //   const openCalendly = useCallback((e) => {
// //     e.preventDefault();
// //     setShowCalendly(true);
// //     closeMenu(); // Close mobile menu if open
// //   }, [closeMenu]);
  
// //   const closeCalendly = useCallback(() => {
// //     setShowCalendly(false);
// //   }, []);

// //   // Close on escape key
// //   useEffect(() => {
// //     const handleEscape = (e) => {
// //       if (e.key === "Escape" && showCalendly) {
// //         closeCalendly();
// //       }
// //     };
    
// //     if (showCalendly) {
// //       document.addEventListener("keydown", handleEscape);
// //       // Prevent body scroll when modal is open
// //       document.body.style.overflow = "hidden";
// //     }
    
// //     return () => {
// //       document.removeEventListener("keydown", handleEscape);
// //       document.body.style.overflow = "";
// //     };
// //   }, [showCalendly, closeCalendly]);

// //   /* brand */
// //   const brandLink = h(
// //     Link,
// //     { className: "brand", href: "/", "aria-label": "Mears Law home" },
// //     h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img" })
// //   );

// //   /* desktop primary nav */
// //   const navLinks = h(
// //     "nav",
// //     { className: "nav-links", "aria-label": "Primary" },
// //     h(Link, { href: "/" }, "Home"),
// //     h(Link, { href: "/about" }, "About"),
// //     h(Link, { href: "/services" }, "Services"),
// //     h(Link, { href: "/careers" }, "Careers"),
// //     h(Link, { href: "/contact" }, "Contact")
// //   );

// //   /* desktop cta + hamburger */
// //   const ctaBlock = h(
// //     "div",
// //     { className: "cta" },
// //     h(
// //       "button",
// //       { 
// //         className: "btn btn-primary", 
// //         onClick: openCalendly,
// //         "aria-label": "Book consultation" 
// //       },
// //       "Book Consultation"
// //     ),
// //     h(
// //       "button",
// //       { className: "hamburger", "aria-label": "Open menu", onClick: toggleMenu },
// //       h(IconHamburger)
// //     )
// //   );

// //   const topBar = h(
// //     "div",
// //     { className: "container nav" },
// //     brandLink,
// //     navLinks,
// //     ctaBlock
// //   );

// //   const headerEl = h("header", { className: "site-header" }, topBar);

// //   /* mobile drawer */
// //   const drawerHeader = h(
// //     "div",
// //     { className: "drawer-header" },
// //     h(
// //       Link,
// //       { className: "brand", href: "/", onClick: closeMenu, "aria-label": "Mears Law home" },
// //       h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img small" })
// //     ),
// //     h(
// //       "button",
// //       { className: "close", "aria-label": "Close menu", onClick: closeMenu },
// //       h(IconClose)
// //     )
// //   );

// //   const mobileLinks = h(
// //     "nav",
// //     { className: "mobile-links", "aria-label": "Mobile" },
// //     h(Link, { href: "/", onClick: closeMenu }, "Home"),
// //     h(Link, { href: "/about", onClick: closeMenu }, "About"),
// //     h(Link, { href: "/services", onClick: closeMenu }, "Services"),
// //     h(Link, { href: "/careers", onClick: closeMenu }, "Careers"),
// //     h(Link, { href: "/contact", onClick: closeMenu }, "Contact")
// //   );

// //   const mobileCta = h(
// //     "div",
// //     { className: "mobile-cta" },
// //     h(
// //       "button",
// //       { 
// //         className: "btn", 
// //         onClick: openCalendly
// //       },
// //       "Book Consultation"
// //     )
// //   );

// //   const drawer = h(
// //     "div",
// //     { className: `mobile-drawer${isOpen ? " open" : ""}` },
// //     drawerHeader,
// //     mobileLinks,
// //     mobileCta
// //   );

// //   /* Calendly modal */
// //   const calendlyModal = showCalendly ? h(
// //     "div",
// //     { 
// //       className: `calendly-overlay${showCalendly ? " open" : ""}`,
// //       onClick: closeCalendly
// //     },
// //     h(
// //       "div",
// //       { 
// //         className: "calendly-modal",
// //         onClick: (e) => e.stopPropagation()
// //       },
// //       h(
// //         "button",
// //         {
// //           className: "calendly-close",
// //           onClick: closeCalendly,
// //           "aria-label": "Close booking modal"
// //         },
// //         h(IconClose)
// //       ),
// //       h("iframe", {
// //         className: "calendly-iframe",
// //         src: "https://calendly.com/maedaimran/30min?embed_domain=localhost&embed_type=Inline",
// //         title: "Book a consultation"
// //       })
// //     )
// //   ) : null;

// //   return h(Fragment, null, headerEl, drawer, calendlyModal);
// // }
// "use client";
// import React, { useState, useCallback, useEffect, createElement as h, Fragment } from "react";
// import Link from "next/link";

// /* ---------- inline CSS (copied from your JSX block, unchanged in look/feel) ---------- */
// const CSS = `
// /* Vars + base */
// .site-header{
//   --navy:#0f223b;
//   --ink:#EAF2FF;
//   --ink-dim:#C7D5E9;
//   --radius:12px;

//   position:sticky; top:0; z-index:1000;
//   background:var(--navy);
//   border-bottom:1px solid rgba(255,255,255,0.12);
//   box-shadow:0 2px 6px rgba(0,0,0,0.06);
//   color:var(--ink);
//   font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
// }

// .container{ width:min(1200px,92%); margin:0 auto; }

// /* ====== TALL HEADER BAR ====== */
// .site-header{ --bar-h:110px; }   /* larger */
// .nav{
//   height:var(--bar-h);
//   padding:0;
//   display:flex; align-items:center; justify-content:space-between;
//   overflow:visible;
// }

// /* Brand */
// .brand{ display:flex; align-items:center; text-decoration:none; color:var(--ink); }
// .brand-mark-img{
//   width:160px; height:auto; display:block; object-fit:contain;
//   filter: drop-shadow(0 3px 10px rgba(0,0,0,.28));
//   margin-top:12px;             /* positioned lower */
//   margin-bottom:-6px;
//   flex-shrink:0;
// }
// .brand-mark-img.small{ width:140px; margin:0; }

// /* Primary nav */
// .nav-links{ display:flex; align-items:center; gap:65px; }
// .site-header .nav-links a,
// .site-header .nav-links a:visited{
//   font-weight:600; text-decoration:none;
//   color:var(--ink-dim);
//   display:inline-flex; align-items:center;
//   line-height:1.2;
//   padding:12px px;
//   transition:color .2s ease, opacity .2s ease;
//   white-space:nowrap;
// }
// .site-header .nav-links a:hover{ color:var(--ink); }
// .site-header .nav-links a:focus-visible{
//   outline:2px solid rgba(234,242,255,.35); outline-offset:3px; border-radius:6px;
// }

// /* CTA */
// .cta{ display:flex; align-items:center; gap:10px; }
// .btn{
//   display:inline-flex; align-items:center; justify-content:center;
//   padding:6px 12px;
//   line-height:1.1;
//   border-radius:14px; font-weight:700;
//   border:1px solid rgba(0,0,0,0.12);
//   text-decoration:none;
//   transition:transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
//   background:#fff; color:var(--navy);
//   box-shadow:0 2px 6px rgba(0,0,0,.08);
//   white-space:nowrap;
//   cursor: pointer;
// }
// .btn:hover{ box-shadow:0 4px 10px rgba(0,0,0,.12); transform:translateY(-1px); }
// .site-header .btn-primary{ background:#fff; color:var(--navy); }

// /* Only square the DESKTOP header CTA */
// .site-header .cta .btn { border-radius: 4px; }

// .hamburger{ display:none; border:0; background:none; padding:6px; color:var(--ink); }

// /* Mobile */
// @media (max-width:900px){
//   .site-header{ --bar-h:88px; }
//   .brand{ align-items:flex-start; padding-top:8px; }
//   .brand-mark-img{ width:140px; margin-top:0px; margin-bottom:0px; }
//   .nav-links{ display:none; }
//   .hamburger{ display:block; }
// }

// /* Mobile drawer */
// .mobile-drawer{
//   position: fixed;
//   top: 0; right: 0; bottom: 0;
//   width: 84vw; max-width: 360px;
//   background: #0f223b;
//   color: var(--ink);
//   transform: translateX(100%);
//   transition: transform .28s ease;
//   box-shadow: -8px 0 24px rgba(0,0,0,.22);
//   z-index: 1100;
//   display: none;
//   font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
// }
// .mobile-drawer.open{ transform: translateX(0); }
// @media (max-width:900px){ .mobile-drawer{ display:block; } }

// .drawer-header{ display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(255,255,255,0.1); }
// .mobile-links{ display:flex; flex-direction:column; padding:12px 14px; gap:14px; }
// .mobile-links a{ color:#fff; text-decoration:none; font-weight:600; line-height:1.25; }
// .mobile-links a:hover{ opacity:.9; }
// .mobile-cta{ display:flex; flex-direction:column; gap:10px; padding:8px 14px 16px; }
// .mobile-cta .btn{ background:#fff; color:var(--navy); }
// .close{ border:0; background:none; color:#fff; padding:6px; }

// /* Calendly Modal */
// .calendly-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.7);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 2000;
//   padding: 20px;
//   opacity: 0;
//   transition: opacity 0.3s ease;
// }

// .calendly-overlay.open {
//   opacity: 1;
// }

// .calendly-modal {
//   background: white;
//   border-radius: 12px;
//   width: 100%;
//   max-width: 900px;
//   height: 90vh;
//   max-height: 700px;
//   position: relative;
//   box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//   overflow: hidden;
//   transform: scale(0.95);
//   transition: transform 0.3s ease;
// }

// .calendly-overlay.open .calendly-modal {
//   transform: scale(1);
// }

// .calendly-close {
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   background: rgba(0, 0, 0, 0.6);
//   color: white;
//   border: none;
//   border-radius: 50%;
//   width: 36px;
//   height: 36px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 10;
//   transition: background 0.2s ease;
// }

// .calendly-close:hover {
//   background: rgba(0, 0, 0, 0.8);
// }

// .calendly-iframe {
//   width: 100%;
//   height: 100%;
//   border: none;
// }
// `;

// /* ---------- inject CSS once ---------- */
// function useInlineStyles(id, cssText) {
//   useEffect(() => {
//     if (typeof document === "undefined") return;
//     let el = document.getElementById(id);
//     if (!el) {
//       el = document.createElement("style");
//       el.id = id;
//       el.type = "text/css";
//       el.appendChild(document.createTextNode(cssText));
//       document.head.appendChild(el);
//     }
//   }, [id, cssText]);
// }

// /* ---------- Load Calendly script and CSS ---------- */
// function useCalendlyScript() {
//   useEffect(() => {
//     if (typeof window === "undefined") return;
    
//     // Load CSS
//     if (!document.querySelector('link[href*="calendly"]')) {
//       const link = document.createElement("link");
//       link.href = "https://assets.calendly.com/assets/external/widget.css";
//       link.rel = "stylesheet";
//       document.head.appendChild(link);
//     }
    
//     // Load script
//     if (!document.querySelector('script[src*="calendly"]')) {
//       const script = document.createElement("script");
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       script.onload = () => {
//         // Initialize Calendly badge widget
//         if (window.Calendly) {
//           window.Calendly.initBadgeWidget({
//             url: 'https://calendly.com/carissa-mears-mearslaw/30min',
//             text: 'Book a Consultation ',
//             color: '#0069ff',
//             textColor: '#ffffff',
//             branding: true
//           });
//         }
//       };
//       document.body.appendChild(script);
//     }
//   }, []);
// }

// /* ---------- icons (no JSX) ---------- */
// const IconHamburger = () =>
//   h(
//     "svg",
//     { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
//     h("path", { d: "M3 6h18M3 12h18M3 18h18" })
//   );

// const IconClose = () =>
//   h(
//     "svg",
//     { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
//     h("path", { d: "M18 6L6 18M6 6l12 12" })
//   );

// /* ---------- component (no JSX) ---------- */
// export default function Header() {
//   useInlineStyles("ml-header-inline-css", CSS);
//   useCalendlyScript();

//   const [isOpen, setIsOpen] = useState(false);
  
//   const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);
//   const closeMenu = useCallback(() => setIsOpen(false), []);
  
//   const openCalendly = useCallback((e) => {
//     e.preventDefault();
//     if (window.Calendly) {
//       window.Calendly.showPopupWidget('https://calendly.com/carissa-mears-mearslaw/30min');
//     }
//     closeMenu(); // Close mobile menu if open
//   }, [closeMenu]);

//   /* brand */
//   const brandLink = h(
//     Link,
//     { className: "brand", href: "/", "aria-label": "Mears Law home" },
//     h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img" })
//   );

//   /* desktop primary nav */
//   const navLinks = h(
//     "nav",
//     { className: "nav-links", "aria-label": "Primary" },
//     h(Link, { href: "/" }, "Home"),
//     h(Link, { href: "/about" }, "About"),
//     h(Link, { href: "/services" }, "Services"),
//     h(Link, { href: "/careers" }, "Careers"),
//     h(Link, { href: "/contact" }, "Contact")
//   );

//   /* desktop cta + hamburger */
//   const ctaBlock = h(
//     "div",
//     { className: "cta" },
//     h(
//       "button",
//       { 
//         className: "btn btn-primary", 
//         onClick: openCalendly,
//         "aria-label": "Book consultation" 
//       },
//       "Book Consultation"
//     ),
//     h(
//       "button",
//       { className: "hamburger", "aria-label": "Open menu", onClick: toggleMenu },
//       h(IconHamburger)
//     )
//   );

//   const topBar = h(
//     "div",
//     { className: "container nav" },
//     brandLink,
//     navLinks,
//     ctaBlock
//   );

//   const headerEl = h("header", { className: "site-header" }, topBar);

//   /* mobile drawer */
//   const drawerHeader = h(
//     "div",
//     { className: "drawer-header" },
//     h(
//       Link,
//       { className: "brand", href: "/", onClick: closeMenu, "aria-label": "Mears Law home" },
//       h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img small" })
//     ),
//     h(
//       "button",
//       { className: "close", "aria-label": "Close menu", onClick: closeMenu },
//       h(IconClose)
//     )
//   );

//   const mobileLinks = h(
//     "nav",
//     { className: "mobile-links", "aria-label": "Mobile" },
//     h(Link, { href: "/", onClick: closeMenu }, "Home"),
//     h(Link, { href: "/about", onClick: closeMenu }, "About"),
//     h(Link, { href: "/services", onClick: closeMenu }, "Services"),
//     h(Link, { href: "/careers", onClick: closeMenu }, "Careers"),
//     h(Link, { href: "/contact", onClick: closeMenu }, "Contact")
//   );

//   const mobileCta = h(
//     "div",
//     { className: "mobile-cta" },
//     h(
//       "button",
//       { 
//         className: "btn", 
//         onClick: openCalendly
//       },
//       "Book Consultation"
//     )
//   );

//   const drawer = h(
//     "div",
//     { className: `mobile-drawer${isOpen ? " open" : ""}` },
//     drawerHeader,
//     mobileLinks,
//     mobileCta
//   );

//   return h(Fragment, null, headerEl, drawer);
// }
"use client";
import React, { useState, useCallback, useEffect, createElement as h, Fragment } from "react";
import Link from "next/link";

/* ---------- inline CSS (copied from your JSX block, unchanged in look/feel) ---------- */
const CSS = `
/* Vars + base */
.site-header{
  --navy:#0f223b;
  --ink:#EAF2FF;
  --ink-dim:#C7D5E9;
  --radius:12px;

  position:sticky; top:0; z-index:1000;
  background:var(--navy);
  border-bottom:1px solid rgba(255,255,255,0.12);
  box-shadow:0 2px 6px rgba(0,0,0,0.06);
  color:var(--ink);
  font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}

.container{ width:min(1200px,92%); margin:0 auto; }

/* ====== TALL HEADER BAR ====== */
.site-header{ --bar-h:110px; }   /* larger */
.nav{
  height:var(--bar-h);
  padding:0;
  display:flex; align-items:center; justify-content:space-between;
  overflow:visible;
}

/* Brand */
.brand{ display:flex; align-items:center; text-decoration:none; color:var(--ink); }
.brand-mark-img{
  width:160px; height:auto; display:block; object-fit:contain;
  filter: drop-shadow(0 3px 10px rgba(0,0,0,.28));
  margin-top:12px;             /* positioned lower */
  margin-bottom:-6px;
  flex-shrink:0;
}
.brand-mark-img.small{ width:140px; margin:0; }

/* Primary nav */
.nav-links{ display:flex; align-items:center; gap:65px; }
.site-header .nav-links a,
.site-header .nav-links a:visited{
  font-weight:600; text-decoration:none;
  color:var(--ink-dim);
  display:inline-flex; align-items:center;
  line-height:1.2;
  padding:12px px;
  transition:color .2s ease, opacity .2s ease;
  white-space:nowrap;
}
.site-header .nav-links a:hover{ color:var(--ink); }
.site-header .nav-links a:focus-visible{
  outline:2px solid rgba(234,242,255,.35); outline-offset:3px; border-radius:6px;
}

/* CTA */
.cta{ display:flex; align-items:center; gap:10px; }
.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding:6px 12px;
  line-height:1.1;
  border-radius:14px; font-weight:700;
  border:1px solid rgba(0,0,0,0.12);
  text-decoration:none;
  transition:transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
  background:#fff; color:var(--navy);
  box-shadow:0 2px 6px rgba(0,0,0,.08);
  white-space:nowrap;
  cursor: pointer;
}
.btn:hover{ box-shadow:0 4px 10px rgba(0,0,0,.12); transform:translateY(-1px); }
.site-header .btn-primary{ background:#fff; color:var(--navy); }

/* Only square the DESKTOP header CTA */
.site-header .cta .btn { border-radius: 4px; }

.hamburger{ display:none; border:0; background:none; padding:6px; color:var(--ink); }

/* Mobile */
@media (max-width:900px){
  .site-header{ --bar-h:88px; }
  .brand{ align-items:flex-start; padding-top:8px; }
  .brand-mark-img{ width:140px; margin-top:0px; margin-bottom:0px; }
  .nav-links{ display:none; }
  .hamburger{ display:block; }
}

/* Mobile drawer */
.mobile-drawer{
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: 84vw; max-width: 360px;
  background: #0f223b;
  color: var(--ink);
  transform: translateX(100%);
  transition: transform .28s ease;
  box-shadow: -8px 0 24px rgba(0,0,0,.22);
  z-index: 1100;
  display: none;
  font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}
.mobile-drawer.open{ transform: translateX(0); }
@media (max-width:900px){ .mobile-drawer{ display:block; } }

.drawer-header{ display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(255,255,255,0.1); }
.mobile-links{ display:flex; flex-direction:column; padding:12px 14px; gap:14px; }
.mobile-links a{ color:#fff; text-decoration:none; font-weight:600; line-height:1.25; }
.mobile-links a:hover{ opacity:.9; }
.mobile-cta{ display:flex; flex-direction:column; gap:10px; padding:8px 14px 16px; }
.mobile-cta .btn{ background:#fff; color:var(--navy); }
.close{ border:0; background:none; color:#fff; padding:6px; }

/* Calendly Modal */
.calendly-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.calendly-overlay.open {
  display: flex;
  opacity: 1;
}

.calendly-modal {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 1000px;
  height: 90vh;
  max-height: 750px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.calendly-overlay.open .calendly-modal {
  transform: scale(1);
}

.calendly-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2001;
  transition: background 0.2s ease;
  font-size: 24px;
  line-height: 1;
}

.calendly-close:hover {
  background: rgba(0, 0, 0, 0.8);
}

.calendly-inline-widget {
  width: 100%;
  height: 100%;
  min-width: 320px;
}
`;

/* ---------- inject CSS once ---------- */
function useInlineStyles(id, cssText) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("style");
      el.id = id;
      el.type = "text/css";
      el.appendChild(document.createTextNode(cssText));
      document.head.appendChild(el);
    }
  }, [id, cssText]);
}

/* ---------- Load Calendly script ---------- */
function useCalendlyScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Load script
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
}

/* ---------- icons (no JSX) ---------- */
const IconHamburger = () =>
  h(
    "svg",
    { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
    h("path", { d: "M3 6h18M3 12h18M3 18h18" })
  );

const IconClose = () =>
  h(
    "svg",
    { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
    h("path", { d: "M18 6L6 18M6 6l12 12" })
  );

/* ---------- component (no JSX) ---------- */
export default function Header() {
  useInlineStyles("ml-header-inline-css", CSS);
  useCalendlyScript();

  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  
  const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  
  const openCalendly = useCallback((e) => {
    e.preventDefault();
    setIsCalendlyOpen(true);
    closeMenu(); // Close mobile menu if open
  }, [closeMenu]);

  const closeCalendly = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isCalendlyOpen) {
        closeCalendly();
      }
    };
    
    if (isCalendlyOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isCalendlyOpen, closeCalendly]);

  /* brand */
  const brandLink = h(
    Link,
    { className: "brand", href: "/", "aria-label": "Mears Law home" },
    h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img" })
  );

  /* desktop primary nav */
  const navLinks = h(
    "nav",
    { className: "nav-links", "aria-label": "Primary" },
    h(Link, { href: "/" }, "Home"),
    h(Link, { href: "/about" }, "About"),
    h(Link, { href: "/services" }, "Services"),
    h(Link, { href: "/careers" }, "Careers"),
    h(Link, { href: "/contact" }, "Contact")
  );

  /* desktop cta + hamburger */
  const ctaBlock = h(
    "div",
    { className: "cta" },
    h(
      "button",
      { 
        className: "btn btn-primary", 
        onClick: openCalendly,
        "aria-label": "Book consultation" 
      },
      "Book Consultation"
    ),
    h(
      "button",
      { className: "hamburger", "aria-label": "Open menu", onClick: toggleMenu },
      h(IconHamburger)
    )
  );

  const topBar = h(
    "div",
    { className: "container nav" },
    brandLink,
    navLinks,
    ctaBlock
  );

  const headerEl = h("header", { className: "site-header" }, topBar);

  /* mobile drawer */
  const drawerHeader = h(
    "div",
    { className: "drawer-header" },
    h(
      Link,
      { className: "brand", href: "/", onClick: closeMenu, "aria-label": "Mears Law home" },
      h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img small" })
    ),
    h(
      "button",
      { className: "close", "aria-label": "Close menu", onClick: closeMenu },
      h(IconClose)
    )
  );

  const mobileLinks = h(
    "nav",
    { className: "mobile-links", "aria-label": "Mobile" },
    h(Link, { href: "/", onClick: closeMenu }, "Home"),
    h(Link, { href: "/about", onClick: closeMenu }, "About"),
    h(Link, { href: "/services", onClick: closeMenu }, "Services"),
    h(Link, { href: "/careers", onClick: closeMenu }, "Careers"),
    h(Link, { href: "/contact", onClick: closeMenu }, "Contact")
  );

  const mobileCta = h(
    "div",
    { className: "mobile-cta" },
    h(
      "button",
      { 
        className: "btn", 
        onClick: openCalendly
      },
      "Book Consultation"
    )
  );

  const drawer = h(
    "div",
    { className: `mobile-drawer${isOpen ? " open" : ""}` },
    drawerHeader,
    mobileLinks,
    mobileCta
  );

  /* Calendly modal */
  const calendlyModal = h(
    "div",
    { 
      className: `calendly-overlay${isCalendlyOpen ? " open" : ""}`,
      onClick: closeCalendly
    },
    h(
      "div",
      { 
        className: "calendly-modal",
        onClick: (e) => e.stopPropagation()
      },
      h(
        "button",
        { 
          className: "calendly-close",
          onClick: closeCalendly,
          "aria-label": "Close calendar"
        },
        "×"
      ),
      h("div", {
        className: "calendly-inline-widget",
        "data-url": "https://calendly.com/carissa-mears-mearslaw/30min"
      })
    )
  );

  return h(Fragment, null, headerEl, drawer, calendlyModal);
}
"use client";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="/" aria-label="Mears Law home">
            <img src="images/mears-logo.png" alt="Mears Law logo" className="brand-mark-img" />
            <div className="brand-name">Mears Law</div>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#practice-areas">Practice Areas</a>
            <a href="#careers">Careers</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="cta">
            <a className="btn btn-ghost" href="#contact" aria-label="Request a call back">
              Request a Call Back
            </a>
            <a className="btn btn-primary" href="#book" aria-label="Book consultation">
              Book Consultation
            </a>
            <button className="hamburger" aria-label="Open menu">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Same tokens as Footer */
        .site-header{
          --navy:#0f223b;
          --ink:#EAF2FF;
          --ink-dim:#C7D5E9;
          --radius:12px;
          --shadow:0 8px 24px rgba(0,0,0,.16);
        }

        /* Header bar */
        .site-header{
          position:sticky; top:0; z-index:1000;
          background:var(--navy) !important;
          border-bottom:1px solid rgba(255,255,255,0.12);
          box-shadow:0 2px 6px rgba(0,0,0,0.06);
          color:var(--ink);
        }

        .container{ width:min(1200px,92%); margin:0 auto; }
        .nav{ display:flex; align-items:center; justify-content:space-between; padding:16px 0; }

        /* Brand (DM Serif like footer headings) */
        .brand{ display:flex; align-items:center; gap:12px; text-decoration:none; color:var(--ink) !important; }
        .brand-mark-img{ width:36px; height:36px; border-radius:10px; object-fit:cover; box-shadow:var(--shadow); }
        .brand-name{ font-family:"DM Serif Display", serif; font-size:22px; letter-spacing:.2px; color:var(--ink) !important; }

        /* Nav links (Inter + ink-dim) */
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

        /* Buttons match footer CTA style */
        .cta{ display:flex; align-items:center; gap:12px; }
        .btn{
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          padding:12px 16px; border-radius:var(--radius); font-weight:700;
          border:1px solid transparent; display:inline-flex; align-items:center; gap:10px;
          text-decoration:none; transition:transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
        }
        /* Primary = white on navy (same as footer Book Consultation) */
        .site-header .btn-primary{
          background:#fff !important; color:var(--navy) !important; border:1px solid rgba(0,0,0,0.06) !important;
        }
        .site-header .btn-primary:hover{ transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,0,0,.24); }
        .site-header .btn-primary:focus-visible{ outline:2px solid rgba(234,242,255,.35); outline-offset:3px; }

        /* Ghost = transparent with ink border/text (like footer contact chips) */
        .site-header .btn-ghost{
          background:transparent !important; color:var(--ink) !important; 
          border:1px solid rgba(234,242,255,.35) !important;
        }
        .site-header .btn-ghost:hover{ background:rgba(255,255,255,.06) !important; }
        .site-header .btn-ghost:focus-visible{ outline:2px solid rgba(234,242,255,.35); outline-offset:3px; }

        .hamburger{ display:none; border:0; background:none; padding:8px; color:var(--ink); }

        @media (max-width:900px){
          .nav-links{ display:none; }
          .cta .btn-ghost{ display:none; }
          .hamburger{ display:block; }
        }
      `}</style>
    </>
  );
}
"use client";
import Link from "next/link";

const AREAS = [
  {
    title: "Governments",
    blurb:
      "Advising public bodies on policy, compliance, modernization, and infrastructure delivery.",
    tags: [
      "AI Law & Regulation",
      "AI Adoption",
      "Privacy & Data Protection",
      "Government Advisory",
      "Infrastructure",
    ],
    cta: { label: "Read More", href: "/practice-areas/government" },
  },
  {
    title: "Corporations",
    blurb:
      "Practical, growth-minded counsel for compliance, transactions, and risk management.",
    tags: [
      "AI Law & Regulation",
      "AI Adoption",
      "Privacy & Data Protection",
      "Corporate Advisory",
      "Dispute Resolution",
    ],
    cta: { label: "Read More", href: "/practice-areas/corporate" },
  },
  {
    title: "Individuals",
    blurb:
      "Protecting your rights and helping you navigate high-stakes personal matters.",
    tags: ["Family Law", "Dispute Resolution", "Real Estate", "Immigration"],
    cta: { label: "Read More", href: "/practice-areas/individual" },
  },
];

const styles = {
  section: {
    background: '#fafbfc',
  },
  wrap: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: 'clamp(48px, 6vw, 96px) clamp(20px, 4vw, 32px)',
  },
  eyebrow: {
    fontSize: '12px',
    letterSpacing: '0.16em',
    fontWeight: 600,
    color: '#1e3a5f',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  title: {
    margin: '0 0 16px',
    fontSize: 'clamp(32px, 4.5vw, 48px)',
    lineHeight: 1.15,
    fontWeight: 700,
    color: '#0a1628',
    letterSpacing: '-0.02em',
  },
  lede: {
    margin: '0 0 clamp(40px, 4vw, 56px)',
    fontSize: 'clamp(17px, 1.8vw, 20px)',
    lineHeight: 1.65,
    color: '#374151',
    maxWidth: '68ch',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 'clamp(20px, 2.5vw, 32px)',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: 0,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 10px 24px rgba(0,0,0,0.06)',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
  },
  cardTopBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '4px',
    width: '0%',
    background: '#1e3a5f',
    transition: 'width 0.3s ease',
  },
  cardContent: {
    padding: 'clamp(24px, 3vw, 32px)',
    flex: 1,
  },
  cardTitle: {
    fontSize: 'clamp(22px, 2vw, 26px)',
    fontWeight: 700,
    color: '#0a1628',
    margin: '0 0 12px',
    letterSpacing: '-0.01em',
  },
  cardText: {
    color: '#374151',
    margin: '0 0 20px',
    lineHeight: 1.65,
    fontSize: '16px',
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#f3f4f6',
    border: '1px solid #e5e7eb',
    color: '#374151',
    borderRadius: '6px',
    padding: '6px 12px',
    fontSize: '13px',
    lineHeight: 1.4,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    transition: 'background .2s ease, border-color .2s ease',
  },
  ctaRow: {
    display: 'flex',
    padding: '20px clamp(24px, 3vw, 32px) clamp(24px, 3vw, 32px)',
    borderTop: '1px solid #e5e7eb',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#1e3a5f',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: 1,
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s ease, transform 0.1s ease',
  },
};

export default function PracticeAreas() {
  return (
    <>
      <style>{`
        @media (max-width: 1099px) {
          .practice-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 767px) {
          .practice-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .practice-cta-btn { width: 100% !important; }
        }
        .practice-card:hover {
          box-shadow: 0 4px 6px rgba(0,0,0,0.05), 0 16px 36px rgba(0,0,0,0.08) !important;
          transform: translateY(-4px);
          border-color: #d1d5db !important;
        }
        .practice-card:hover .practice-top-bar {
          width: 100% !important;
        }
        .practice-card:active .practice-top-bar {
          width: 100% !important;
          background: #152844 !important;
        }
        .practice-cta-btn:hover {
          background: #152844 !important;
          transform: translateY(-2px);
        }
        .practice-cta-btn:active {
          transform: translateY(1px) !important;
        }
        .practice-cta-btn:focus-visible {
          outline: 3px solid rgba(30, 58, 95, 0.4);
          outline-offset: 2px;
        }
        .practice-pill:hover {
          background: #e5e7eb !important;
          border-color: #d1d5db !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .practice-card, .practice-cta-btn, .practice-pill { transition: none !important; }
        }
      `}</style>
      <section style={styles.section} aria-labelledby="focus-areas-title">
        <div style={styles.wrap}>
          <p style={styles.eyebrow}>PRACTICE AREAS</p>
          <h2 id="focus-areas-title" style={styles.title}>What We Focus On</h2>
          <p style={styles.lede}>
            Clarity about what we do best. If your matter falls outside these areas, we'll help point you in the right direction.
          </p>

          <div style={styles.grid} className="practice-grid">
            {AREAS.map((area) => (
              <article key={area.title} style={styles.card} className="practice-card">
                <div style={styles.cardTopBar} className="practice-top-bar" />
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{area.title}</h3>
                  <p style={styles.cardText}>{area.blurb}</p>

                  <div style={styles.pills}>
                    {area.tags.map((t) => (
                      <span key={t} style={styles.pill} className="practice-pill">{t}</span>
                    ))}
                  </div>
                </div>

                <div style={styles.ctaRow}>
                  <Link href={area.cta.href} style={styles.ctaBtn} className="practice-cta-btn" role="button">
                    {area.cta.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
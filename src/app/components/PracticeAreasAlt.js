"use client";
import Image from "next/image";
import Link from "next/link";

const AREAS = [
  {
    title: "Government",
    img: "/images/law1.jpg",
    blurb:
      "Advising public bodies on policy, compliance, modernization, and infrastructure delivery.",
    tags: [
      "AI Law & Regulation",
      "AI Adoption",
      "Privacy & Data Protection",
      "Government Advisory",
      "Infrastructure",
    ],
    cta: { label: "More", href: "/practice-areas/government" },
  },
  {
    title: "Corporations",
    img: "/images/law2.jpg",
    blurb:
      "Practical, growth-minded counsel for compliance, transactions, and risk management.",
    tags: [
      "AI Law & Regulation",
      "AI Adoption",
      "Privacy & Data Protection",
      "Corporate Advisory",
      "Dispute Resolution",
    ],
    cta: { label: "More", href: "/practice-areas/corporate" },
  },
  {
    title: "Individuals",
    img: "/images/law3.jpg",
    blurb:
      "Protecting your rights and helping you navigate high-stakes personal matters.",
    tags: ["Family Law", "Dispute Resolution", "Real Estate", "Immigration"],
    cta: { label: "More", href: "/practice-areas/individual" },
  },
];

const styles = {
  section: {
    background: '#f5efd8',
  },
  wrap: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: 'clamp(48px, 6vw, 96px) clamp(20px, 4vw, 32px)',
  },
  eyebrow: {
    fontSize: '12px',
    letterSpacing: '.16em',
    fontWeight: 600,
    color: '#b91c1c',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  title: {
    margin: '0 0 16px',
    fontSize: 'clamp(32px, 4.5vw, 48px)',
    lineHeight: 1.15,
    fontWeight: 700,
    color: '#0a1628',
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
    gap: 'clamp(24px, 3vw, 40px)',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  imgWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '4 / 3',
    maxHeight: '260px',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '18px',
  },
  img: {
    objectFit: 'cover',
    objectPosition: 'center',
  },
  colTitle: {
    fontSize: 'clamp(20px, 2vw, 22px)',
    fontWeight: 700,
    color: '#0a1628',
    margin: '0 0 10px',
  },
  colText: {
    color: '#374151',
    margin: '0 0 16px',
    lineHeight: 1.65,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    margin: '0 0 18px',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 12px',
    background: '#fff',
    border: '1px solid #e5e7eb',
    color: '#1f2937',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: 700,
    lineHeight: 1,
    boxShadow: '0 1px 2px rgba(0,0,0,.05)',
  },
  ctaRow: {
    marginTop: 'auto',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#1E3A5F',
    color: '#fff',
    textDecoration: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '15px',
    transition: 'background .2s ease, transform .1s ease',
    boxShadow: '0 2px 4px rgba(30, 58, 95, 0.2)',
    border: 'none',
  },
};

export default function PracticeAreas() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .practice-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .practice-cta-btn { width: 100%; }
        }
        .practice-cta-btn:hover {
          background: #152a45 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(30, 58, 95, 0.3) !important;
        }
        .practice-cta-btn:active {
          transform: translateY(0) !important;
          box-shadow: 0 1px 2px rgba(30, 58, 95, 0.2) !important;
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
              <div key={area.title} style={styles.col}>
                <div style={styles.imgWrap}>
                  <Image
                    src={area.img}
                    alt={area.title}
                    fill
                    style={styles.img}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority
                  />
                </div>

                <h3 style={styles.colTitle}>{area.title}</h3>
                <p style={styles.colText}>{area.blurb}</p>

                <div style={styles.tags}>
                  {area.tags.map((t) => (
                    <span key={t} style={styles.pill}>{t}</span>
                  ))}
                </div>

                <div style={styles.ctaRow}>
                  <Link href={area.cta.href} style={styles.ctaBtn} className="practice-cta-btn">
                    {area.cta.label} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
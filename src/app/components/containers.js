
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

export default function PracticeAreas() {
  return (
    <section className="section" aria-labelledby="focus-areas-title">
      <div className="wrap">
        <p className="eyebrow">PRACTICE AREAS</p>
        <h2 id="focus-areas-title" className="title">What We Focus On</h2>
        <p className="lede">
          Clarity about what we do best. If your matter falls outside these areas, we'll help point you in the right direction.
        </p>

        <div className="grid">
          {AREAS.map((area) => (
            <article key={area.title} className="card">
              <div className="cardContent">
                <h3 className="cardTitle">{area.title}</h3>
                <p className="cardText">{area.blurb}</p>

                <div className="pills">
                  {area.tags.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </div>

              <div className="ctaRow">
                {/* Use legacyBehavior so the class applies to <a> in ALL Next versions */}
                <Link href={area.cta.href} legacyBehavior>
                  <a className="ctaBtn">{area.cta.label}</a>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Professional palette */
        .section {
          --ink: #0a1628;        /* headings */
          --body: #374151;       /* body text */
          --muted: #6b7280;      /* secondary text */
          --line: #e5e7eb;       /* card divider/border */
          --card: #ffffff;       /* card background */
          --pill: #f3f4f6;       /* pill background */
          --pill-text: #374151;  /* pill text */
          --pill-border: #e5e7eb;
          --brand: #1e3a5f;      /* button/navy */
          --brand-hover: #152844;
          --shadow: 0 1px 3px rgba(0,0,0,0.05), 0 10px 24px rgba(0,0,0,0.06);
          --shadow-hover: 0 4px 6px rgba(0,0,0,0.05), 0 16px 36px rgba(0,0,0,0.08);
          background: #fafbfc;
        }

        .wrap {
          max-width: 1240px;
          margin: 0 auto;
          padding: clamp(48px, 6vw, 96px) clamp(20px, 4vw, 32px);
        }

        .eyebrow {
          font-size: 12px;
          letter-spacing: 0.16em;
          font-weight: 600;
          color: var(--brand);
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .title {
          margin: 0 0 16px;
          font-size: clamp(32px, 4.5vw, 48px);
          line-height: 1.15;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.02em;
        }
        .lede {
          margin: 0 0 clamp(40px, 4vw, 56px);
          font-size: clamp(17px, 1.8vw, 20px);
          line-height: 1.65;
          color: var(--body);
          max-width: 68ch;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 2.5vw, 32px);
        }
        @media (min-width: 768px) { .grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1100px) { .grid { grid-template-columns: repeat(3, 1fr); } }

        .card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 0;
          box-shadow: var(--shadow);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        @media (hover: hover) and (pointer: fine) {
          .card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); border-color: #d1d5db; }
        }

        .cardContent { padding: clamp(24px, 3vw, 32px); flex: 1; }

        .cardTitle { font-size: clamp(22px, 2vw, 26px); font-weight: 700; color: var(--ink); margin: 0 0 12px; letter-spacing: -0.01em; }
        .cardText  { color: var(--body); margin: 0 0 20px; line-height: 1.65; font-size: 16px; }

        .pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .pill  {
          display: inline-flex; align-items: center;
          background: var(--pill);
          border: 1px solid var(--pill-border);
          color: var(--pill-text);
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 500;
          white-space: nowrap;
          transition: background .2s ease, border-color .2s ease;
        }
        @media (hover: hover) { .pill:hover { background: #e5e7eb; border-color: #d1d5db; } }

        .ctaRow {
          display: flex;
          padding: 20px clamp(24px, 3vw, 32px) clamp(24px, 3vw, 32px);
          border-top: 1px solid var(--line);
        }

        /* The actual BUTTON (styled anchor) */
        .ctaBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 220px;
          background: var(--brand);
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
          padding: 14px 18px;
          border-radius: 10px;
          border: 1px solid transparent;
          box-shadow: 0 4px 10px rgba(30,58,95,0.18);
          transition: background .15s ease, box-shadow .15s ease, transform .05s ease;
          outline: none;
        }
        .ctaBtn:hover        { background: var(--brand-hover); box-shadow: 0 6px 14px rgba(30,58,95,0.24); }
        .ctaBtn:active       { transform: translateY(1px); }
        .ctaBtn:focus-visible{ box-shadow: 0 0 0 3px rgba(30,58,95,0.32), 0 6px 14px rgba(30,58,95,0.24); }

        /* Mobile: make the button full width so it's obvious */
        @media (max-width: 480px) { .ctaBtn { max-width: none; width: 100%; } }

        @media (prefers-reduced-motion: reduce) {
          .card, .ctaBtn, .pill { transition: none; }
        }
      `}</style>
    </section>
  );
}

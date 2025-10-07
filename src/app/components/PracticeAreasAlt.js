"use client";
import Image from "next/image";
import Link from "next/link";

const AREAS = [
  {
    title: "Government",
    img: "/images/law1.jpg", // <-- .jpg
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
    img: "/images/law2.jpg", // <-- .jpg
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
    img: "/images/law3.jpg", // <-- .jpg
    blurb:
      "Protecting your rights and helping you navigate high-stakes personal matters.",
    tags: ["Family Law", "Dispute Resolution", "Real Estate", "Immigration"],
    cta: { label: "More", href: "/practice-areas/individual" },
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
            <div key={area.title} className="col">
              {/* Consistent image size */}
              <div className="imgWrap">
                <Image
                  src={area.img}
                  alt={area.title}
                  fill
                  className="img"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority
                />
              </div>

              <h3 className="colTitle">{area.title}</h3>
              <p className="colText">{area.blurb}</p>

              <div className="tags">
                {area.tags.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>

              <div className="ctaRow">
                <Link href={area.cta.href} className="ctaBtn">
                  {area.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          --ink: #0a1628;
          --body: #374151;
          --pill-bg: #fff;
          --pill-brd: #e5e7eb;
          --pill-txt: #1f2937;
          --red: #b91c1c;
          --red-hover: #991b1b;
          background: #f5efd8;
        }
        .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(48px, 6vw, 96px) clamp(20px, 4vw, 32px); }
        .eyebrow { font-size: 12px; letter-spacing: .16em; font-weight: 600; color: var(--red); text-transform: uppercase; margin-bottom: 16px; }
        .title { margin: 0 0 16px; font-size: clamp(32px, 4.5vw, 48px); line-height: 1.15; font-weight: 700; color: var(--ink); }
        .lede { margin: 0 0 clamp(40px, 4vw, 56px); font-size: clamp(17px, 1.8vw, 20px); line-height: 1.65; color: var(--body); max-width: 68ch; }

        .grid { display: grid; grid-template-columns: 1fr; gap: clamp(24px, 3vw, 40px); }
        @media (min-width: 768px) { .grid { grid-template-columns: repeat(3, 1fr); } }

        .col { display: flex; flex-direction: column; min-width: 0; }

        /* Image: equal size, contained */
        .imgWrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;  /* consistent ratio across all */
          max-height: 260px;    /* prevents giant images */
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 18px;
        }
        .img { object-fit: cover; object-position: center; }

        .colTitle { font-size: clamp(20px, 2vw, 22px); font-weight: 700; color: var(--ink); margin: 0 0 10px; }
        .colText { color: var(--body); margin: 0 0 16px; line-height: 1.65; }

        .tags { display: flex; flex-wrap: wrap; gap: 10px; margin: 0 0 18px; }
        .pill {
          display: inline-flex; align-items: center; padding: 8px 12px;
          background: var(--pill-bg); border: 1px solid var(--pill-brd); color: var(--pill-txt);
          border-radius: 999px; font-size: 13px; font-weight: 700; line-height: 1;
          box-shadow: 0 1px 2px rgba(0,0,0,.05);
        }

        .ctaRow { margin-top: auto; }
        .ctaBtn {
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--red); color: #fff; text-decoration: none;
          padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 15px;
          transition: background .2s ease, transform .1s ease;
        }
        .ctaBtn:hover { background: var(--red-hover); transform: translateY(-1px); }
        .ctaBtn:active { transform: translateY(0); }

        @media (max-width: 480px) { .ctaBtn { width: 100%; } }
      `}</style>
    </section>
  );
}

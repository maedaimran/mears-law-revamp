
"use client";
import Link from "next/link";
import styles from "./containers.module.css";

const AREAS = [
  { title: "Artifcial Intelligence" , href: "/legal#ai-regulation" },
  { title: "Corporate", href: "/legal#corporate-law" },
  { title: "Immigration", href: "/legal#immigration-law" },
  { title: "Privacy and Data Protection", href: "/legal#privacy-data-protection" },
  { title: "Real Estate", href: "/legal#real-estate-law" },
  { title: "AI Governance", href: "/consulting#ai-governance" },
  { title: "Privacy Compliance", href: "/consulting#privacy-compliance" },
];

export default function PracticeAreas() {
  return (
    <section className={styles.practiceSection} aria-labelledby="practice-areas-heading">
      <div className={styles.practiceContainer}>
        <header className={styles.practiceHeader}>
          <span className={styles.practiceEyebrow}>PRACTICE AREAS</span>
          <h2 id="practice-areas-heading" className={styles.practiceTitle}>
            Our Services
          </h2>
        </header>
        
        <div className={styles.practiceDivider} aria-hidden="true" />
        
        <ul className={styles.practiceList} role="list">
          {AREAS.map((area) => (
            <li key={area.title} className={styles.practiceItem}>
              <Link href={area.href} className={styles.practiceLink}>
                <span className={styles.practiceText}>{area.title}</span>
                <div className={styles.practiceArrowContainer}>
                  <span className={styles.practiceArrow} aria-hidden="true">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
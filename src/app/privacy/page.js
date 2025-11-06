'use client';

import React from 'react';
import './PrivacyTerms.css';

export default function PrivacyTermsPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activateLink = (e, id) => {
    // allow Enter/Space to trigger navigation for accessibility
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <main className="privacy-terms-page">
      <div className="privacy-container">
        <header className="page-header">
          <h1 className="page-title">Privacy Policy & Terms</h1>
          <p className="page-subtitle">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </header>

        {/* Table of Contents */}
        <div className="toc-wrapper">
          <h2 className="section-title toc-title">Table of Contents</h2>
          <nav className="table-of-contents" aria-label="Table of contents">
            <ol className="toc-list">
              <li>
                <button
                  type="button"
                  className="toc-link"
                  role="link"
                  onClick={(e) => activateLink(e, 'legal-disclaimer')}
                  onKeyDown={(e) => activateLink(e, 'legal-disclaimer')}
                >
                  Legal Disclaimer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="toc-link"
                  role="link"
                  onClick={(e) => activateLink(e, 'acceptance-terms')}
                  onKeyDown={(e) => activateLink(e, 'acceptance-terms')}
                >
                  Acceptance of Terms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="toc-link"
                  role="link"
                  onClick={(e) => activateLink(e, 'privacy-policy')}
                  onKeyDown={(e) => activateLink(e, 'privacy-policy')}
                >
                  Privacy Policy
                </button>
                <ol className="toc-sublist">
                  <li>
                    <button
                      type="button"
                      className="toc-sublink"
                      role="link"
                      onClick={(e) => activateLink(e, 'info-collect')}
                      onKeyDown={(e) => activateLink(e, 'info-collect')}
                    >
                      Information We Collect
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="toc-sublink"
                      role="link"
                      onClick={(e) => activateLink(e, 'info-use')}
                      onKeyDown={(e) => activateLink(e, 'info-use')}
                    >
                      How We Use Your Information
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="toc-sublink"
                      role="link"
                      onClick={(e) => activateLink(e, 'cookies')}
                      onKeyDown={(e) => activateLink(e, 'cookies')}
                    >
                      Cookies
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="toc-sublink"
                      role="link"
                      onClick={(e) => activateLink(e, 'data-security')}
                      onKeyDown={(e) => activateLink(e, 'data-security')}
                    >
                      Data Security
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="toc-sublink"
                      role="link"
                      onClick={(e) => activateLink(e, 'your-rights')}
                      onKeyDown={(e) => activateLink(e, 'your-rights')}
                    >
                      Your Rights
                    </button>
                  </li>
                </ol>
              </li>
              <li>
                <button
                  type="button"
                  className="toc-link"
                  role="link"
                  onClick={(e) => activateLink(e, 'contact-info')}
                  onKeyDown={(e) => activateLink(e, 'contact-info')}
                >
                  Contact Information
                </button>
              </li>
            </ol>
          </nav>
        </div>

        <section className="content-section" id="legal-disclaimer">
          <h2 className="section-title">Legal Disclaimer</h2>
          <div className="section-content">
            <p>
              The transmission and receipt of information contained on this website, in whole or in part,
              or communication with Mears Law via the Internet or e-mail through this website does not
              constitute or create a lawyer-client relationship between us and any recipient.
            </p>
            <p>
              You should not send us any confidential information in response to this webpage. Such responses
              will not create a lawyer-client relationship, and whatever you disclose to us will not be
              privileged or confidential unless we have agreed to act as your legal counsel and you have
              received a formal engagement agreement from Mears Law.
            </p>
            <p>
              The material on this website may not reflect the most current legal developments. The content
              and interpretation of the law addressed herein is subject to revision. We disclaim all liability
              in respect to actions taken or not taken based on any or all the contents of this website to
              the fullest extent permitted by law.
            </p>
            <p className="emphasis">
              Do not act or refrain from acting upon this information without first seeking professional
              legal counsel.
            </p>
          </div>
        </section>

        <section className="content-section" id="acceptance-terms">
          <h2 className="section-title">Acceptance of Terms</h2>
          <div className="section-content">
            <p>
              By accessing or using this website, you agree to be bound by these Terms and Conditions.
              The information provided on this site is for general informational purposes only and does
              not constitute legal advice or create a lawyer–client relationship.
            </p>
            <p>
              Your use of this website constitutes your acknowledgment and acceptance of these terms.
              If you do not agree with these terms, please discontinue use of this website immediately.
            </p>
          </div>
        </section>

        <section className="content-section" id="privacy-policy">
          <h2 className="section-title">Privacy Policy</h2>
          <div className="section-content">
            <h3 className="subsection-title" id="info-collect">Information We Collect</h3>
            <p>
              When you contact us through our website, we may collect personal information including
              but not limited to your name, email address, phone number, company name, and any
              information you provide in your message.
            </p>

            <h3 className="subsection-title" id="info-use">How We Use Your Information</h3>
            <p>
              We use the information you provide to respond to your inquiries, provide legal services
              as requested, and communicate with you about matters relevant to your legal needs. We do
              not sell, trade, or otherwise transfer your personal information to third parties without
              your consent, except as required by law.
            </p>

            <h3 className="subsection-title" id="cookies">Cookies</h3>
            <p>
              This website uses cookies to enhance user experience and analyze website traffic. By using
              this website, you consent to our use of cookies in accordance with this Privacy Policy. You
              may disable cookies in your browser settings, though this may affect website functionality.
            </p>

            <h3 className="subsection-title" id="data-security">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information. However, no method of transmission over the Internet is completely secure,
              and we cannot guarantee absolute security.
            </p>

            <h3 className="subsection-title" id="your-rights">Your Rights</h3>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise
              these rights or for any privacy-related questions, please contact us at{' '}
              <a href="mailto:info@mearslaw.ca" className="privacy-link">info@mearslaw.ca</a>.
            </p>
          </div>
        </section>

        <section className="content-section" id="contact-info">
          <h2 className="section-title">Contact Information</h2>
          <div className="section-content">
            <p>
              If you have any questions about these Terms and Conditions or our Privacy Policy,
              please contact us:
            </p>
            <div className="contact-details">
              <p><strong>Mears Law Professional Corporation</strong></p>
              <p>Suite 2500, 120 Adelaide Street West</p>
              <p>Toronto, Ontario, M5H 1T1</p>
              <p>Phone: <a href="tel:+14378882974" className="privacy-link">(437) 888-2974</a></p>
              <p>Email: <a href="mailto:info@mearslaw.ca" className="privacy-link">info@mearslaw.ca</a></p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        /* === Minimal purple theme + animated underline (centered) === */
        .privacy-terms-page {
          background: linear-gradient(180deg, #fbfbff 0%, #f6f7fb 100%);
        }

        .page-title {
          position: relative;
          padding-bottom: 14px; /* space for underline */
        }
        .page-title::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          height: 5px;
          width: 0;                 /* start collapsed */
          border-radius: 3px;
          background: linear-gradient(90deg, #8b5cf6, #a78bfa, #c4b5fd);
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.35);
          animation: expandUnderline 1200ms ease-out forwards;
        }

        @keyframes expandUnderline {
          0%   { width: 0;   opacity: 0; }
          35%  { width: 80px; opacity: 1; }
          100% { width: 140px; opacity: 1; }
        }

        /* Reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .page-title::after {
            animation: none;
            width: 140px;
          }
        }

        .page-subtitle {
          color: #6b7280;
        }

        /* Table of Contents */
        .toc-wrapper {
          margin-bottom: 48px;
        }

        .toc-title {
          margin: 0 0 12px;
        }

        .table-of-contents {
          background: #ffffff; /* white card to pop on grey page bg */
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px 28px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* subtle, matches contact box feel */
        }

        .toc-list {
          list-style: none;
          counter-reset: toc-counter;
          margin: 0;
          padding: 0;
        }

        .toc-list > li {
          counter-increment: toc-counter;
          margin-bottom: 12px;
        }

        .toc-list > li::before {
          content: counter(toc-counter) ". ";
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-weight: 600;
          color: #374151;
        }

        .toc-link {
          background: none;
          border: none;
          color: #374151;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
          padding: 0;
          text-decoration: none;
          transition: opacity 0.2s ease, text-decoration-color 0.2s ease;
        }

        .toc-link:hover,
        .toc-link:focus {
          opacity: 0.85;
          text-decoration: underline;
          outline: none;
          text-decoration-color: #8b5cf6; /* subtle purple cue */
        }

        .toc-sublist {
          list-style: none;
          counter-reset: toc-subcounter;
          margin: 8px 0 0 24px;
          padding: 0;
        }

        .toc-sublist > li {
          counter-increment: toc-subcounter;
          margin-bottom: 6px;
        }

        .toc-sublist > li::before {
          content: counter(toc-counter) "." counter(toc-subcounter) " ";
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-weight: 500;
          color: #6b7280;
        }

        .toc-sublink {
          background: none;
          border: none;
          color: #4b5563;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          cursor: pointer;
          text-align: left;
          padding: 0;
          text-decoration: none;
          transition: opacity 0.2s ease, text-decoration-color 0.2s ease;
        }

        .toc-sublink:hover,
        .toc-sublink:focus {
          opacity: 0.9;
          text-decoration: underline;
          outline: none;
          text-decoration-color: #a78bfa;
        }

        .content-section {
          scroll-margin-top: 100px;
        }
        .subsection-title {
          scroll-margin-top: 100px;
        }

        .privacy-link { color: #8b5cf6; }
        .privacy-link:hover { text-decoration: underline; }

        @media (max-width: 768px) {
          .table-of-contents { padding: 20px; }
          .content-section { scroll-margin-top: 80px; }
          .subsection-title { scroll-margin-top: 80px; }
        }
      `}</style>
    </main>
  );
}

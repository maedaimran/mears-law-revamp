'use client';

import React from 'react';
import './PrivacyTerms.css';

export default function PrivacyTermsPage() {
  return (
    <main className="privacy-terms-page">
      <div className="privacy-container">
        <header className="page-header">
          <h1 className="page-title">Privacy Policy & Terms</h1>
          <p className="page-subtitle">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </header>

        <section className="content-section">
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

        <section className="content-section">
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

        <section className="content-section">
          <h2 className="section-title">Privacy Policy</h2>
          <div className="section-content">
            <h3 className="subsection-title">Information We Collect</h3>
            <p>
              When you contact us through our website, we may collect personal information including 
              but not limited to your name, email address, phone number, company name, and any 
              information you provide in your message.
            </p>

            <h3 className="subsection-title">How We Use Your Information</h3>
            <p>
              We use the information you provide to respond to your inquiries, provide legal services 
              as requested, and communicate with you about matters relevant to your legal needs. We do 
              not sell, trade, or otherwise transfer your personal information to third parties without 
              your consent, except as required by law.
            </p>

            <h3 className="subsection-title">Cookies</h3>
            <p>
              This website uses cookies to enhance user experience and analyze website traffic. By using 
              this website, you consent to our use of cookies in accordance with this Privacy Policy. You 
              may disable cookies in your browser settings, though this may affect website functionality.
            </p>

            <h3 className="subsection-title">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information. However, no method of transmission over the Internet is completely secure, 
              and we cannot guarantee absolute security.
            </p>

            <h3 className="subsection-title">Your Rights</h3>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise 
              these rights or for any privacy-related questions, please contact us at{' '}
              <a href="mailto:info@mearslaw.ca" className="privacy-link">info@mearslaw.ca</a>.
            </p>
          </div>
        </section>

        <section className="content-section">
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
    </main>
  );
}
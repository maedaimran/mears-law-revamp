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
                  Privacy Policy (Updated)
                </button>
                <ol className="toc-sublist">
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'introduction')} onKeyDown={(e) => activateLink(e, 'introduction')}>
                      Introduction
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'personal-information')} onKeyDown={(e) => activateLink(e, 'personal-information')}>
                      Personal Information (definition)
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'accountability-governance')} onKeyDown={(e) => activateLink(e, 'accountability-governance')}>
                      Accountability & Governance
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'means-of-collection')} onKeyDown={(e) => activateLink(e, 'means-of-collection')}>
                      Means of Collection of Personal Information
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'what-we-collect-and-use')} onKeyDown={(e) => activateLink(e, 'what-we-collect-and-use')}>
                      What Personal Information We Collect & Use
                    </button>
                    <ol className="toc-sublist">
                      <li>
                        <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'newsletters-publications')} onKeyDown={(e) => activateLink(e, 'newsletters-publications')}>
                          Newsletters & Publications
                        </button>
                      </li>
                      <li>
                        <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'events')} onKeyDown={(e) => activateLink(e, 'events')}>
                          Events
                        </button>
                      </li>
                      <li>
                        <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'job-applicants')} onKeyDown={(e) => activateLink(e, 'job-applicants')}>
                          Job Applicants & Student Placements
                        </button>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'consent')} onKeyDown={(e) => activateLink(e, 'consent')}>
                      Consent
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'sharing')} onKeyDown={(e) => activateLink(e, 'sharing')}>
                      Sharing of Personal Information
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'transfer')} onKeyDown={(e) => activateLink(e, 'transfer')}>
                      Transfer of Personal Information
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'websites-info')} onKeyDown={(e) => activateLink(e, 'websites-info')}>
                      Information About Our Websites
                    </button>
                    <ol className="toc-sublist">
                      <li>
                        <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'visiting-website')} onKeyDown={(e) => activateLink(e, 'visiting-website')}>
                          Visiting our Website
                        </button>
                      </li>
                      <li>
                        <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'cookies')} onKeyDown={(e) => activateLink(e, 'cookies')}>
                          Cookies
                        </button>
                      </li>
                      <li>
                        <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'analytics')} onKeyDown={(e) => activateLink(e, 'analytics')}>
                          Analytics
                        </button>
                      </li>
                      <li>
                        <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'interest-based-ads')} onKeyDown={(e) => activateLink(e, 'interest-based-ads')}>
                          Interest-Based Advertising & Opt-out
                        </button>
                      </li>
                      <li>
                        <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'third-party-links')} onKeyDown={(e) => activateLink(e, 'third-party-links')}>
                          Third Party Links
                        </button>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'safeguards')} onKeyDown={(e) => activateLink(e, 'safeguards')}>
                      Safeguards
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'your-choices')} onKeyDown={(e) => activateLink(e, 'your-choices')}>
                      Your Choices
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'your-rights')} onKeyDown={(e) => activateLink(e, 'your-rights')}>
                      Your Rights
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'updates')} onKeyDown={(e) => activateLink(e, 'updates')}>
                      Updates to the Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button type="button" className="toc-sublink" role="link" onClick={(e) => activateLink(e, 'contact-us')} onKeyDown={(e) => activateLink(e, 'contact-us')}>
                      Contact Us (Privacy Officer)
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
                  Contact Information (General)
                </button>
              </li>
            </ol>
          </nav>
        </div>

        {/* Terms Sections (kept) */}
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

        {/* UPDATED PRIVACY POLICY BEGINS HERE */}
        <section className="content-section" id="privacy-policy">
          <h2 className="section-title">Privacy Policy (Updated)</h2>
          <div className="section-content">
            <h3 className="subsection-title" id="introduction">Introduction</h3>
            <p>
              Mears Law Professional Corporation ("Mears Law") is committed to protecting the personal information that we collect,
              use and disclose in the course of providing legal services and operating our law firm, in accordance with all applicable
              regulatory requirements, including applicable privacy legislation, and consistent with our professional obligations.
              As practicing lawyers we have professional and ethical obligations to maintain information we have received within our client
              relationships in confidence.
            </p>
            <p>
              This Privacy Policy sets out how we collect, use, and disclose the personal information of our clients, other individuals and our
              website visitors ("you").
            </p>

            <h3 className="subsection-title" id="personal-information">Personal Information</h3>
            <p>
              Personal information means information about an identifiable individual. In general, personal information does not include business
              contact information that we use to contact you in your business capacity, including your name, title or position, business, telephone
              or facsimile number.
            </p>

            <h3 className="subsection-title" id="accountability-governance">Accountability and Privacy Governance Policies and Procedures</h3>
            <p>
              Mears Law is responsible under applicable privacy legislation for the personal information in our possession or control. We have appointed a Privacy Officer
              to oversee privacy matters for our firm. Our Privacy Officer can be reached as set out below in the Contact Us section.
            </p>
            <p>
              We are committed to protecting personal information and have established policies and procedures that govern our treatment of personal information. These policies and
              procedures include, among other things, the following:
            </p>
            <ul>
              <li>We have implemented policies and procedures to protect personal information in our custody and control from unauthorized access, use or disclosure.</li>
              <li>We have implemented processes to respond to data subject requests and complaints in a timely and effective manner.</li>
              <li>We have implemented a privacy framework that defines the roles and responsibilities for our employees with respect to the treatment of personal information.</li>
            </ul>

            <h3 className="subsection-title" id="means-of-collection">Means of Collection of Personal Information</h3>
            <p>
              In most cases, we collect personal information directly from individuals. However, we may also receive information indirectly such as background screenings for job applicants.
              We also collect personal information through automatic means through our Websites as described below.
            </p>

            <h3 className="subsection-title" id="what-we-collect-and-use">What Personal Information Do We Collect and Use?</h3>
            <p>
              <strong>Provision of Legal Services:</strong> Mears Law collects, uses and discloses personal information for the primary purpose of providing our clients with professional legal services and representation,
              including for the following purposes:
            </p>
            <ul>
              <li>To establish and manage client relationships, provide legal advice, perform legal services, fulfil legal duties (including Know Your Client obligations), and avoid legal conflicts of interest;</li>
              <li>To share personal information with third parties for the purpose of providing legal services in the context of legal proceedings, including conducting litigation, arbitrations, mediations or other proceedings. Such third parties may include opposing parties, parties in interest, opposing, foreign and other counsel and advisors, witnesses, courts, adjudicators, arbitrators, other decision-makers and experts;</li>
              <li>To represent clients in the context of business transactions involving the exchange or disclosure of personal information, including by purchase, sale, lease, merger, amalgamation, arrangement or any other type of acquisition, disposition, public offering, securitization, investment, financing or other transaction;</li>
              <li>To establish and maintain commercial relationships with clients, suppliers and other third parties, including to issue invoices, administer accounts, collect and process payments, evaluate credit standing, and to fulfil contractual obligations;</li>
              <li>To contact and communicate with clients and other individuals for the purpose of conducting market research, and evaluating client service and satisfaction;</li>
              <li>To maintain, develop and manage our information systems, such as file transfer, e-discovery, document management, knowledge-management, and precedent systems and databases;</li>
              <li>To detect and protect against error, negligence, breach of contract, fraud, theft and other illegal activity, and where necessary to meet our insurance requirements;</li>
              <li>To develop and manage our business and operations; and</li>
              <li>As permitted by, and to comply with, applicable legal or regulatory requirements or provisions.</li>
            </ul>
            <p>
              We keep records of the work performed and services provided by us in accordance with applicable regulatory requirements and professional standards. These records may include personal information. Our records are stored with safeguards against inappropriate or unauthorized access (see Safeguards).
            </p>
            <p>
              We may ask you to update your personal information, contact information or preferences from time to time. Clients are encouraged to contact the lead lawyer on their file to update the personal information we maintain in our client files.
            </p>

            <h4 className="subsection-title" id="newsletters-publications">Newsletters, Publications, Seminars</h4>
            <p>
              If you sign up to receive our newsletters or other information from Mears Law, we collect your first and last name, email address, preferred language, job title, company, city, province/state, and country in order to send you newsletters and event information. You can unsubscribe at any time by clicking the “unsubscribe” link included at the bottom of each email. Alternatively, you can opt out of receiving email marketing communications by contacting us using the contact information provided in the “Contact Us” section below or emailing <a href="mailto:info@mearslaw.ca" className="privacy-link">info@mearslaw.ca</a>. To opt-out of receiving our print publications, please contact us using the contact information provided in the “Contact Us” section below.
            </p>
            <p>Please note that you may continue to receive legal services-related or account-related communications from us.</p>

            <h4 className="subsection-title" id="events">Events</h4>
            <p>
              If you attend one of our events (or visit a booth at an event), we may collect business contact information such as your first and last name, company name, work email address, phone number, dietary restrictions, and accessibility requirements. We collect this information so that we can service you appropriately at our events and contact you about future events, promotions, offers and information about our services. We may contact you by email after an event with a survey for the purpose of evaluating your satisfaction with an event.
            </p>

            <h4 className="subsection-title" id="job-applicants">Job Applicants</h4>
            <p>
              If you apply for a job with us, we collect personal information you provide in connection with a job application or related inquiry, such as information contained in a resume, cover letter, or similar employment-related materials. We use this information for the purpose of processing and responding to your application for current and future career opportunities, conducting interviews and facilitating the on-boarding process in the event you accept a position at the firm. With your consent, we may also obtain personal information from third party job references or former employers, or conduct background checks.
            </p>
            <p>
              If you apply for a student placement at Mears Law we collect personal information such as your name, address, email address, phone number, school name, school transcripts, resume, cover letter, reference letter, course selections, and any additional information or content required for the application or that you otherwise provide. We use this information to assess your suitability for a position at the firm, to conduct interviews and to facilitate the on-boarding process in the event you accept a position at the firm.
            </p>

            <h3 className="subsection-title" id="consent">Consent</h3>
            <p>
              We will obtain a client’s consent to the collection, use and disclosure of personal information about the client, and the consent of other individuals where required by applicable privacy legislation. We assume that an individual has consented to our reasonable collection and use of personal information consistent with the purposes for which the information was given, when the individual initiates contact with us or voluntarily provides personal information to us.
            </p>
            <p>
              We also assume that clients who retain us, or individuals involved in proceedings or matters opposite or adverse to our clients, consent to the reasonable collection, use and disclosure of their personal information by our professionals and agents for purposes of our representation or provision of legal advice to our clients and the conduct of the transactions or proceedings involving our clients. If you provide us with personal information about a third party, we rely on you to obtain all necessary consents to permit us to collect, use and disclose the personal information for the purposes for which the information was collected and as set out in this Privacy Policy.
            </p>
            <p>
              We do not collect, use or disclose personal information without consent unless authorized or required by law to do so, such as in the following circumstances:
            </p>
            <ul>
              <li>If a client provides personal information about third parties to us for purposes of our legal representation or advice to the client;</li>
              <li>Where a court order or subpoena is issued, or under applicable rules of production, a regulatory or other body with jurisdiction to compel production so requires;</li>
              <li>WHen the information is publicly available within the meaning of applicable privacy legislation, such as in professional or other directories, in public registries, publicly-filed court records or information appearing in published form;</li>
              <li>If we are investigating the breach of an agreement, a legal duty or contravention of a law and obtaining consent would compromise the investigation or the accuracy of the information;</li>
              <li>If we are required to disclose personal information to a lawful authority; or as otherwise authorized by law.</li>
            </ul>

            <h3 className="subsection-title" id="sharing">Sharing of Personal Information</h3>
            <p>
              <strong>Legal services:</strong> We may share personal information with third parties for the purpose of providing legal services such as in the context of legal proceedings, including conducting litigation, arbitrations, mediations or other proceedings. Such third parties may include opposing parties, parties in interest, opposing, foreign and other counsel and advisors, witnesses, courts, adjudicators, arbitrators, other decision-makers and experts.
            </p>
            <p>
              <strong>Service Providers:</strong> We rely on affiliated and unaffiliated companies, agents and contractors to assist us with the provision of our services, including: hosting our data; providing billing support; document storage; software support; delivering webinars; sending our communications; conducting background checks; managing job applicants; and facilitating secure file transfers.
            </p>
            <p>
              We provide our service providers with access to your personal information as necessary for them to provide services to us. We require our service providers to protect the confidentiality and security of personal information and our service providers are not authorized to use personal information for other purposes.
            </p>
            <p>
              <strong>Legal Requirements:</strong> We or our third-party service providers may disclose personal information in response to a search warrant or other legally valid inquiry or order, to other organizations in the case of investigating a breach of an agreement or contravention of law or detecting, suppressing or preventing fraud, or as otherwise required or permitted by applicable Canadian, US or other law (which may include lawful access by Canadian, US or other foreign governmental authorities, regulators, courts or law enforcement agencies in the jurisdictions in which we or our service providers operate).
            </p>
            <p>
              <strong>Business Transactions:</strong> Personal information may be disclosed where necessary in connection with a prospective or completed sale of assets, merger or other corporate restructuring.
            </p>

            <h3 className="subsection-title" id="transfer">Transfer of Personal Information</h3>
            <p>
              Your data is stored and processed in Canada; however, we and our service providers (including affiliates) may otherwise access, store and otherwise process personal information outside of Canada (including, for Quebec individuals, outside of the province of Quebec), including in the United States, the United Kingdom, the European Union, and other foreign jurisdictions.
            </p>

            <h3 className="subsection-title" id="websites-info">Information about our Websites</h3>
            <h4 className="subsection-title" id="visiting-website">Visiting our Website</h4>
            <p>
              In general, you can visit our Website without telling us who you are or submitting any personal information. However, we collect the IP (Internet protocol) addresses of all visitors to our Website and other related information such as page requests, browser type, operating system and average time spent on our Website. We use this information to help us understand our Website activity and to monitor and improve our Website.
            </p>

            <h4 className="subsection-title" id="cookies">Cookies</h4>
            <p>
              Our Website uses a technology called “cookies”. A cookie is a tiny element of data that our Website sends to a user’s browser, which may then be stored on the user’s hard drive so that we can recognize the user’s computer or device when they return. Other similar files such as clear GIFs, web beacons and pixel tags work in the same way and we use the word ‘cookie’ in this policy to refer to all files that collect information in this way. You may set your browser to notify you when you receive a cookie or to not accept certain cookies. However, if you decide not to accept cookies from our Website, you may not be able to take advantage of all of the Website features. For more information about the use of cookies and your choices, please click on the cookie icon located on the bottom left-hand corner of the web page, located here: <a href="https://www.mearslaw.ca" className="privacy-link" target="_blank" rel="noopener noreferrer">https://www.mearslaw.ca</a>
            </p>

            <h4 className="subsection-title" id="analytics">Analytics</h4>
            <p>
              We may use a third party such as Google Analytics to help us gather and analyze information about the areas visited on the Website (such as the pages most read, time spent, search terms and other engagement data) in order to evaluate and improve the user experience and the Website. These third parties may use cookies and other tracking technologies. For more information about Google Analytics or to prevent the storage and processing of this data (including your IP address) by Google, you can download and install the browser plug-in available at the following link: <a className="privacy-link" href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=en</a>. You can also obtain additional information on Google Analytics’ data privacy and security at the following links: <a className="privacy-link" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/partner-sites</a> and <a className="privacy-link" href="https://support.google.com/analytics/topic/2919631" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/topic/2919631</a>.
            </p>

            <h4 className="subsection-title" id="interest-based-ads">Interest-Based Advertising & Opting-out</h4>
            <p>
              We work with third-parties such as ad networks and other advertising companies that use their own tracking technologies (including cookies and pixel tags) on our Website in order to provide you with tailored advertisements across the Internet. These companies may collect information about your activity on our Website and third-party websites (such as web pages you visit and your interaction with our advertising and other communications) and use this information to analyze your behaviours to make predictions about your interest and preferences, develop personalized content and deliver ads that are more relevant to you on third party websites. This process is known as “behavioural advertising” or “interest-based advertising”. This information may also be used to evaluate the effectiveness of our online advertising campaigns.
            </p>
            <p>
              <strong>Opting-out of Interest-Based Advertising:</strong> To opt-out of receiving online interest-based advertising from third party advertising companies who collect data on our Website, please click on the cookie icon located on the bottom left-hand corner of the web page, located here: <a className="privacy-link" href="https://www.mearslaw.ca" target="_blank" rel="noopener noreferrer">https://www.mearslaw.ca</a>.
            </p>
            <p>
              For more information about interest-based advertising and to understand your options, including how you can opt-out of receiving behavioural ads from third-party advertising companies participating in the Digital Advertising Alliance of Canada, please visit the Digital Advertising Alliance of Canada website at <a className="privacy-link" href="http://youradchoices.ca/choices" target="_blank" rel="noopener noreferrer">http://youradchoices.ca/choices</a>.
            </p>
            <p>
              Please note that even if you opt-out of interest-based advertising by a third party, these tracking technologies may still collect data for other purposes including analytics and you will still see ads from us, but the ads may be less relevant to you and your interests.
            </p>
            <p>
              To successfully opt out, you must have cookies enabled in your web browser (see your browser’s instructions for information on cookies and how to enable them). Your opt-out only applies to the web browser you use so you must opt-out of each web browser on each computer you use. Once you opt out, if you delete your browser’s saved cookies, you will need to opt-out again.
            </p>

            <h4 className="subsection-title" id="third-party-links">Third Party Links</h4>
            <p>
              Our Website may contain links to other websites that Mears Law does not own or operate. We provide links to third party websites as a convenience to the user. These links are not intended as an endorsement of or referral to the linked websites. The linked websites have separate and independent privacy policies, notices and terms of use. We do not have any control over such websites, and therefore we have no responsibility or liability for the manner in which the organizations that operate such linked websites may collect, use or disclose, secure and otherwise treat personal information. We encourage you to read the privacy policy of every website you visit.
            </p>

            <h3 className="subsection-title" id="safeguards">Safeguards</h3>
            <p>
              We have implemented reasonable administrative, technical and physical measures in an effort to safeguard the personal information in our custody and control against theft, loss and unauthorized access, use, modification and disclosure.
            </p>

            <h3 className="subsection-title" id="your-choices">Your Choices</h3>
            <p>
              As indicated above, if you have signed up to receive our email communications, you can unsubscribe any time by clicking the “unsubscribe” link included at the bottom of the email. Alternatively, you can opt out of receiving our marketing communications by contacting us at the contact information under the Contact Us section below.
            </p>
            <p>To opt out of interest-based advertising, see the “Opting-out of Interest-Based Advertising” section above.</p>
            <p>You can also withdraw your consent at any time by contacting us as set out below.</p>

            <h3 className="subsection-title" id="your-rights">Your Rights</h3>
            <p>
              You may have the right to access, update, rectify and correct inaccuracies in your personal information. You may also have the right to withdraw your consent to our collection, use and disclosure of personal information (subject to legal and contractual restrictions). You may also request that we cease dissemination of your personal information or de-index your personal information where we are required to do so by applicable law.
            </p>
            <p>
              To exercise these rights, please send a written request to our Privacy Officer using the contact information as set out in the Contact Us section below.
            </p>
            <p>
              Such requests will be processed subject to exceptions under applicable privacy legislation. Examples of such exceptions include information protected by solicitor-client privilege; information generated in the course of a formal dispute resolution process; information about another individual where disclosure would reveal confidential commercial information; or information disclosed to the police or other lawful authorities where we are required to withhold disclosure.
            </p>

            <h3 className="subsection-title" id="updates">Updates to the Privacy Policy</h3>
            <p>
              We may update our Privacy Policy periodically to reflect changes to our privacy practices. We encourage you to periodically review this page to ensure you are familiar with those changes. We will indicate at the top of this privacy policy when it was most recently updated.
            </p>

            <h3 className="subsection-title" id="contact-us">Contact Us</h3>
            <p>
              If you have any questions, complaints or comments about this privacy policy or the manner in which we or our service providers treat your personal information, or to request access to our collection of your personal information, please contact us at:
            </p>
            <address>
              <strong>Privacy Officer</strong><br />
              Mears Law<br />
              Suite 2500<br />
              120 Adelaide Street West<br />
              Toronto<br />
              Ontario<br />
              M5H 1T1<br />
              or <a href="mailto:info@mearslaw.ca" className="privacy-link">info@mearslaw.ca</a>
            </address>
          </div>
        </section>
        {/* UPDATED PRIVACY POLICY ENDS HERE */}

        {/* General Contact section (kept for convenience) */}
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

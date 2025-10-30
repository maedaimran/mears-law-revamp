'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './CookieNotice.css';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-notice-wrapper">
      <div className="cookie-notice">
        <div className="cookie-content">
          <div className="cookie-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="1" fill="currentColor"/>
              <circle cx="8" cy="8" r="1" fill="currentColor"/>
              <circle cx="16" cy="9" r="1" fill="currentColor"/>
              <circle cx="9" cy="15" r="1" fill="currentColor"/>
              <circle cx="15" cy="15" r="1" fill="currentColor"/>
            </svg>
          </div>
          <div className="cookie-text">
            <p className="cookie-message">
              We use cookies to enhance your experience and analyze site traffic. By continuing to use this site, you consent to our use of cookies.{' '}
              <Link href="/privacy" className="cookie-link">
                Learn more
              </Link>
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button onClick={handleDecline} className="cookie-btn cookie-btn-decline">
            Decline
          </button>
          <button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
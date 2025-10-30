'use client';

import React from 'react';
import Link from 'next/link';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">Talk to a lawyer</h2>
        <p className="cta-description">
          We are ready to assist you with all your legal needs, we're here to 
          make scheduling an appointment as simple and seamless as possible. 
          Reach out today, and let's take that first step together toward 
          resolving your legal concerns.
        </p>
        <Link href="#book" className="cta-button">
          Book an Appointment Today
        </Link>
      </div>
    </section>
  );
}
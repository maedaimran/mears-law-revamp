'use client';

import { useState, useEffect } from 'react';
import AISearchResults from './AISearchResults';
import './hero.css';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');

  // Typing animation for rotating words
  const words = ["Clarity", "Integrity", "Insight"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeoutId;
    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 120);
      } else {
        timeoutId = setTimeout(() => setIsDeleting(true), 1100);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 60);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, wordIndex]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentQuery(searchQuery.trim());
      setShowResults(true);
    }
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setCurrentQuery('');
  };

  return (
    <>
      <div className="hero-container">
        {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/Night-City.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay */}
        <div className="video-overlay"></div>
      </div>
      </div>
      {/* Below-video Content (outside of hero container so it sits under the video) */}
      <div className="below-hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Navigating Complexity with{' '}
            <span className="typing-word" aria-live="polite">{displayText}</span>
          </h1>
        </div>

        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-wrapper">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="How can we help you?"
                className="search-input"
              />
              <button type="submit" className="search-button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* AI Search Results Modal */}
      {showResults && (
        <>
          <div className="modal-backdrop" onClick={handleCloseResults}></div>
          <AISearchResults 
            query={currentQuery} 
            onClose={handleCloseResults} 
          />
        </>
      )}
    </>
  );
}

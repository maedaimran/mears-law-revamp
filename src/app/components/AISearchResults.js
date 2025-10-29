'use client';

import { useState, useEffect } from 'react';

export default function AISearchResults({ query, onClose }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query && query.trim()) {
      searchAI(query);
    }
  }, [query]);

  const searchAI = async (searchQuery) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/ai-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.error || 'Failed to get AI response');
        setResult(data.data); // Still show the fallback response
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'high': return '#10B981'; // green
      case 'medium': return '#F59E0B'; // yellow
      case 'low': return '#EF4444'; // red
      default: return '#6B7280'; // gray
    }
  };

  const getConfidenceText = (confidence) => {
    switch (confidence) {
      case 'high': return 'High Confidence';
      case 'medium': return 'Medium Confidence';
      case 'low': return 'Low Confidence';
      default: return 'Unknown';
    }
  };

  if (loading) {
    return (
      <div className="search-results">
        <div className="search-results-header">
          <h3>AI Assistant</h3>
          <button onClick={onClose} className="close-btn" aria-label="Close results">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Thinking...</p>
        </div>
        <style jsx>{`
          .search-results {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            z-index: 1000;
          }
          
          .search-results-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            border-bottom: 1px solid #E5E7EB;
          }
          
          .search-results-header h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: #111827;
          }
          
          .close-btn {
            background: none;
            border: none;
            padding: 8px;
            border-radius: 8px;
            cursor: pointer;
            color: #6B7280;
            transition: all 0.2s ease;
          }
          
          .close-btn:hover {
            background: #F3F4F6;
            color: #374151;
          }
          
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 24px;
            text-align: center;
          }
          
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #E5E7EB;
            border-top: 3px solid #3B82F6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 16px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .loading-container p {
            margin: 0;
            color: #6B7280;
            font-size: 14px;
          }
        `}</style>
      </div>
    );
  }

  if (error && !result) {
    return (
      <div className="search-results">
        <div className="search-results-header">
          <h3>AI Assistant</h3>
          <button onClick={onClose} className="close-btn" aria-label="Close results">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h4>Something went wrong</h4>
          <p>{error}</p>
          <button onClick={() => searchAI(query)} className="retry-btn">
            Try Again
          </button>
        </div>
        <style jsx>{`
          .search-results {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            z-index: 1000;
          }
          
          .search-results-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            border-bottom: 1px solid #E5E7EB;
          }
          
          .search-results-header h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: #111827;
          }
          
          .close-btn {
            background: none;
            border: none;
            padding: 8px;
            border-radius: 8px;
            cursor: pointer;
            color: #6B7280;
            transition: all 0.2s ease;
          }
          
          .close-btn:hover {
            background: #F3F4F6;
            color: #374151;
          }
          
          .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 24px;
            text-align: center;
          }
          
          .error-icon {
            font-size: 48px;
            margin-bottom: 16px;
          }
          
          .error-container h4 {
            margin: 0 0 8px 0;
            color: #111827;
            font-size: 18px;
          }
          
          .error-container p {
            margin: 0 0 24px 0;
            color: #6B7280;
            font-size: 14px;
          }
          
          .retry-btn {
            background: #3B82F6;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s ease;
          }
          
          .retry-btn:hover {
            background: #2563EB;
          }
        `}</style>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="search-results">
      <div className="search-results-header">
        <h3>AI Assistant</h3>
        <button onClick={onClose} className="close-btn" aria-label="Close results">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="search-results-content">
        <div className="query-section">
          <div className="query-label">Your Question:</div>
          <div className="query-text">"{result.query}"</div>
        </div>
        
        <div className="answer-section">
          <div className="answer-label">Answer:</div>
          <div className="answer-text">{result.answer}</div>
        </div>
        
        <div className="metadata-section">
          <div className="confidence-badge" style={{ backgroundColor: getConfidenceColor(result.confidence) }}>
            {getConfidenceText(result.confidence)}
          </div>
          <div className="source-info">
            Source: {result.source === 'training_data' ? 'Knowledge Base' : 
                   result.source === 'azure_ai' ? 'AI Generated' : 
                   result.source === 'fallback' ? 'General Response' : 'Unknown'}
          </div>
        </div>
        
        <div className="action-buttons">
          <a href="https://mearslaw.ca" target="_blank" rel="noopener noreferrer" className="action-btn primary">
            Visit Website
          </a>
          <a href="#book" className="action-btn secondary">
            Book Consultation
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .search-results {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          z-index: 1000;
        }
        
        .search-results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #E5E7EB;
        }
        
        .search-results-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }
        
        .close-btn {
          background: none;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          color: #6B7280;
          transition: all 0.2s ease;
        }
        
        .close-btn:hover {
          background: #F3F4F6;
          color: #374151;
        }
        
        .search-results-content {
          padding: 24px;
        }
        
        .query-section, .answer-section {
          margin-bottom: 20px;
        }
        
        .query-label, .answer-label {
          font-size: 12px;
          font-weight: 600;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        
        .query-text {
          background: #F9FAFB;
          padding: 12px 16px;
          border-radius: 8px;
          border-left: 4px solid #3B82F6;
          font-style: italic;
          color: #374151;
        }
        
        .answer-text {
          line-height: 1.6;
          color: #111827;
          font-size: 15px;
        }
        
        .metadata-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-top: 16px;
          border-top: 1px solid #E5E7EB;
        }
        
        .confidence-badge {
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .source-info {
          font-size: 12px;
          color: #6B7280;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        
        .action-btn {
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          text-align: center;
          min-width: 140px;
        }
        
        .action-btn.primary {
          background: #3B82F6;
          color: white;
        }
        
        .action-btn.primary:hover {
          background: #2563EB;
          transform: translateY(-1px);
        }
        
        .action-btn.secondary {
          background: #F3F4F6;
          color: #374151;
          border: 1px solid #D1D5DB;
        }
        
        .action-btn.secondary:hover {
          background: #E5E7EB;
          transform: translateY(-1px);
        }
        
        @media (max-width: 640px) {
          .search-results {
            width: 95%;
            max-height: 90vh;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .action-btn {
            min-width: auto;
          }
        }
      `}</style>
    </div>
  );
}

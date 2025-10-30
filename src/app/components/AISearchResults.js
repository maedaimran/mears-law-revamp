'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function AISearchResults({ query, onClose }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputQuery, setInputQuery] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasInitialized = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = useCallback(async (searchQuery) => {
    if (!searchQuery.trim()) return;

    const userMessage = {
      type: 'user',
      content: searchQuery.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputQuery('');
    setLoading(true);
    setError(null);

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
        const aiMessage = {
          type: 'ai',
          content: data.data.answer,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        setError(data.error || 'Failed to get AI response');
        const errorMessage = {
          type: 'ai',
          content: data.data?.answer || 'I apologize, but I encountered an error. Please try again.',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Network error. Please try again.');
      const errorMessage = {
        type: 'ai',
        content: 'I apologize, but I encountered a network error. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (query && query.trim() && !hasInitialized.current) {
      hasInitialized.current = true;
      handleSearch(query);
    }
  }, [query, handleSearch]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputQuery);
  };

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
      
      <div className="chat-container">
        <div className="messages-container">
          {messages.length === 0 && (
            <div className="welcome-message">
              <p>Hi! I'm here to help with questions about Mears Law. Ask me anything!</p>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div className="message-content">
                {message.content.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < message.content.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="message ai loading">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="chat-input-form">
          <input
            ref={inputRef}
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Type your question here..."
            disabled={loading}
            className="chat-input"
          />
          <button type="submit" disabled={loading || !inputQuery.trim()} className="send-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
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
          height: 80vh;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
        }
        
        .search-results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #E5E7EB;
          flex-shrink: 0;
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
        
        .chat-container {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }
        
        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .welcome-message {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          text-align: center;
        }
        
        .welcome-message p {
          color: #6B7280;
          font-size: 15px;
          line-height: 1.6;
        }
        
        .message {
          display: flex;
          max-width: 80%;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .message.user {
          align-self: flex-end;
          margin-left: auto;
        }
        
        .message.ai {
          align-self: flex-start;
          margin-right: auto;
        }
        
        .message-content {
          padding: 12px 16px;
          border-radius: 12px;
          line-height: 1.6;
          font-size: 15px;
        }
        
        .message.user .message-content {
          background: #3B82F6;
          color: white;
          border-bottom-right-radius: 4px;
        }
        
        .message.ai .message-content {
          background: #F3F4F6;
          color: #111827;
          border-bottom-left-radius: 4px;
        }
        
        .typing-indicator {
          display: flex;
          gap: 6px;
          padding: 8px 0;
        }
        
        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #9CA3AF;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }
        
        .typing-indicator span:nth-child(1) {
          animation-delay: 0s;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
        
        .chat-input-form {
          display: flex;
          gap: 8px;
          padding: 16px 20px;
          border-top: 1px solid #E5E7EB;
          background: white;
          flex-shrink: 0;
        }
        
        .chat-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #D1D5DB;
          border-radius: 12px;
          font-size: 15px;
          outline: none;
          transition: all 0.2s ease;
        }
        
        .chat-input:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .chat-input:disabled {
          background: #F9FAFB;
          cursor: not-allowed;
        }
        
        .send-btn {
          background: #3B82F6;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .send-btn:hover:not(:disabled) {
          background: #2563EB;
          transform: translateY(-1px);
        }
        
        .send-btn:disabled {
          background: #D1D5DB;
          cursor: not-allowed;
          transform: none;
        }
        
        @media (max-width: 640px) {
          .search-results {
            width: 95%;
            height: 90vh;
          }
          
          .message {
            max-width: 85%;
          }
        }
      `}</style>
    </div>
  );
}

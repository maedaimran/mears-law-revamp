// Simple test script to verify AI API endpoint
// Run with: node test-ai-api.js

const testQuery = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/ai-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: 'How do I book a consultation?' }),
    });

    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

// Test the API
testQuery();

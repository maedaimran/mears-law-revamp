import { NextResponse } from 'next/server';
import { azureAIService } from '../../lib/azureAIService.js';

export async function POST(request) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'Query is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    // Process the query with Azure AI service
    const result = await azureAIService.processQuery(query.trim());

    return NextResponse.json({
      success: true,
      data: {
        query: query.trim(),
        answer: result.answer,
        confidence: result.confidence,
        source: result.source,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('AI Search API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your question. Please try again or contact us directly.',
        data: {
          query: '',
          answer: "I'm experiencing technical difficulties. Please contact us directly at mearslaw.ca for immediate assistance.",
          confidence: 'low',
          source: 'error',
          timestamp: new Date().toISOString()
        }
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'AI Search API is running',
    status: 'healthy',
    azureConfigured: azureAIService.isConfigured()
  });
}

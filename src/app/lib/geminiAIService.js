import { GoogleGenerativeAI } from '@google/generative-ai';
import { mearsLawTrainingData, findBestAnswer } from './trainingData.js';

class GeminiAIService {
  constructor() {
    this.client = null;
    this.apiKey = process.env.GEMINI_API_KEY;
    this.model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
    
    if (this.apiKey) {
      this.client = new GoogleGenerativeAI(this.apiKey);
    }
  }

  // Check if Gemini AI is properly configured
  isConfigured() {
    return !!(this.client && this.apiKey);
  }

  // Process user query with Gemini AI
  async processQuery(userQuery) {
    try {
      // First, try to find a direct match in our training data
      const bestMatch = findBestAnswer(userQuery);
      
      if (bestMatch.score > 0) {
        // If we have a good match, use it as context for AI enhancement
        const enhancedResponse = await this.enhanceResponse(userQuery, bestMatch);
        return {
          answer: enhancedResponse,
          confidence: 'high',
          source: 'training_data',
          originalMatch: bestMatch
        };
      }

      // If no good match, use Gemini AI to generate a response
      if (this.isConfigured()) {
        return await this.generateAIResponse(userQuery);
      } else {
        // Fallback to basic response if Gemini AI is not configured
        return {
          answer: "I'm sorry, I don't have specific information about that. Please contact us directly at mearslaw.ca or book a consultation to speak with one of our lawyers.",
          confidence: 'low',
          source: 'fallback'
        };
      }
    } catch (error) {
      console.error('Error processing query:', error);
      return {
        answer: "I'm experiencing technical difficulties. Please contact us directly at mearslaw.ca for immediate assistance.",
        confidence: 'low',
        source: 'error'
      };
    }
  }

  // Enhance a training data response with AI
  async enhanceResponse(userQuery, trainingMatch) {
    if (!this.isConfigured()) {
      return trainingMatch.answer;
    }

    try {
      const model = this.client.getGenerativeModel({ model: this.model });
      
      const prompt = `${mearsLawTrainingData.systemPrompt}\n\nUser asked: "${userQuery}"\n\nBased on this training data: "${trainingMatch.answer}"\n\nPlease provide a helpful, professional response that directly answers their question while maintaining the accuracy of the training data. 

FORMATTING INSTRUCTIONS: Use line breaks to create readable paragraphs. Separate different ideas with blank lines. Do not use markdown formatting such as **bold**, *italics*, # headers, or - bullet points. Use plain text with natural line breaks only.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return text;
    } catch (error) {
      console.error('Error enhancing response:', error);
      return trainingMatch.answer; // Fallback to original answer
    }
  }

  // Generate AI response for queries not in training data
  async generateAIResponse(userQuery) {
    try {
      const model = this.client.getGenerativeModel({ model: this.model });
      
      const prompt = `${mearsLawTrainingData.systemPrompt}\n\nUser question: ${userQuery}

FORMATTING INSTRUCTIONS: Use line breaks to create readable paragraphs. Separate different ideas with blank lines. Do not use markdown formatting such as **bold**, *italics*, # headers, or - bullet points. Use plain text with natural line breaks only.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return {
        answer: text,
        confidence: 'medium',
        source: 'gemini_ai'
      };
    } catch (error) {
      console.error('Error generating AI response:', error);
      throw error;
    }
  }

  // Get all available Q&A pairs for reference
  getTrainingData() {
    return mearsLawTrainingData.qaData;
  }

  // Search through training data for similar questions
  searchTrainingData(query, limit = 5) {
    const results = mearsLawTrainingData.qaData
      .map(item => ({
        ...item,
        score: this.calculateSimilarity(query, item.question + ' ' + item.keywords.join(' '))
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return results;
  }

  // Simple similarity calculation
  calculateSimilarity(query, text) {
    const queryWords = query.toLowerCase().split(' ');
    const textWords = text.toLowerCase().split(' ');
    
    let matches = 0;
    queryWords.forEach(qWord => {
      if (textWords.some(tWord => tWord.includes(qWord) || qWord.includes(tWord))) {
        matches++;
      }
    });
    
    return matches / queryWords.length;
  }
}

// Export singleton instance
export const geminiAIService = new GeminiAIService();
export default geminiAIService;

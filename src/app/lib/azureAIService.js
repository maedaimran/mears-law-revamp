import { OpenAIClient } from '@azure/openai';
import { mearsLawTrainingData, findBestAnswer } from './trainingData.js';

class AzureAIService {
  constructor() {
    this.client = null;
    this.endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    this.apiKey = process.env.AZURE_OPENAI_API_KEY;
    this.deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;
    this.model = process.env.AZURE_OPENAI_MODEL || 'gpt-4';
    
    if (this.endpoint && this.apiKey && this.deploymentName) {
      this.client = new OpenAIClient(this.endpoint, this.apiKey);
    }
  }

  // Check if Azure AI is properly configured
  isConfigured() {
    return !!(this.client && this.endpoint && this.apiKey && this.deploymentName);
  }

  // Process user query with Azure AI
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

      // If no good match, use Azure AI to generate a response
      if (this.isConfigured()) {
        return await this.generateAIResponse(userQuery);
      } else {
        // Fallback to basic response if Azure AI is not configured
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
      const messages = [
        {
          role: 'system',
          content: mearsLawTrainingData.systemPrompt
        },
        {
          role: 'user',
          content: `User asked: "${userQuery}"\n\nBased on this training data: "${trainingMatch.answer}"\n\nPlease provide a helpful, professional response that directly answers their question while maintaining the accuracy of the training data.`
        }
      ];

      const response = await this.client.getChatCompletions(this.deploymentName, messages, {
        maxTokens: 500,
        temperature: 0.7
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error enhancing response:', error);
      return trainingMatch.answer; // Fallback to original answer
    }
  }

  // Generate AI response for queries not in training data
  async generateAIResponse(userQuery) {
    try {
      const messages = [
        {
          role: 'system',
          content: mearsLawTrainingData.systemPrompt
        },
        {
          role: 'user',
          content: userQuery
        }
      ];

      const response = await this.client.getChatCompletions(this.deploymentName, messages, {
        maxTokens: 500,
        temperature: 0.7
      });

      return {
        answer: response.choices[0].message.content,
        confidence: 'medium',
        source: 'azure_ai'
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
export const azureAIService = new AzureAIService();
export default azureAIService;

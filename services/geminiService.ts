import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize client only when needed to access environment variable safely
const getClient = () => {
  if (!aiClient && process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  const client = getClient();
  
  if (!client) {
    return "I'm currently offline (API Key missing). Please check out the static content!";
  }

  try {
    // We recreate the chat session for each message in this stateless demo wrapper,
    // but in a real app, you'd persist the Chat object.
    // For this implementation, we will use generateContent with the history as context 
    // to simulate a chat since we might not want to manage long-lived chat objects in this simple service structure.
    // However, the best practice is to use ai.chats.create if we want state. 
    // Let's use a simplified approach: pass recent history + prompt.

    const historyText = history.map(h => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.text}`).join('\n');
    const prompt = `${historyText}\nUser: ${message}\nAssistant:`;

    const response: GenerateContentResponse = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error processing your request.";
  }
};

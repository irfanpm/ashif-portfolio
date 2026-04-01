
import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export const callGemini = async (userPrompt: string, systemInstruction: string) => {
  try {
    // Fix: Use process.env.API_KEY directly as per SDK requirements
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Fix: Access .text property directly (not as a method)
    return response.text || "I'm having trouble thinking of a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

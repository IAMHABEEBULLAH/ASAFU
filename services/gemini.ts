
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Virtual Consultant for ASAFU Group of Companies. 
        ASAFU specializes in:
        1. Architecture (modern design, urban planning).
        2. Construction (civil engineering, residential & commercial).
        3. Logistics (global freight, supply chain, warehousing).
        4. Estate Management (property maintenance, sales, leasing).
        
        Your goal is to answer client inquiries professionally. Keep answers concise, helpful, and brand-aligned. 
        Refer to ASAFU as a leader in industrial and residential solutions.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or contact our support team directly.";
  }
};


import { GoogleGenAI } from "@google/genai";

export const getAIResponseStream = async (userPrompt: string, onChunk: (text: string) => void) => {
  // Create a new instance right before the call as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: `You are the Virtual Consultant for ASAFU Group of Companies. 
        ASAFU specializes in:
        1. Architecture (modern design, urban planning, sustainable projects).
        2. Construction (civil engineering, luxury residential, commercial infrastructure).
        3. Logistics (global freight, supply chain optimization, advanced warehousing).
        4. Estate Management (property maintenance, portfolio growth, strategic leasing).
        
        Your goal is to answer client inquiries professionally, concisely, and with a focus on excellence. 
        Refer to ASAFU as a leader in integrated industrial and residential solutions. 
        If asked about specific projects, mention examples like "The Azure Towers" (Architecture) or "Port of Genesis" (Logistics).
        Always be polite. If a query is highly technical or requires a quote, suggest using the 'Get a Quote' button or leaving a message in the contact form.`,
        temperature: 0.7,
      },
    });

    for await (const chunk of response) {
      const chunkText = chunk.text;
      if (chunkText) {
        onChunk(chunkText);
      }
    }
  } catch (error) {
    console.error("Gemini AI Error:", error);
    onChunk("I'm sorry, I encountered an error while processing your request. Please try again or contact our support team directly.");
  }
};

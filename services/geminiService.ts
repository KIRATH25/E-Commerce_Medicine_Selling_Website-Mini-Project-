import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[] = []) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat history formatted for the SDK if needed, 
    // generally for simple stateless calls we can just use generateContent with system instructions
    // or use the chat session. Here we will use a chat session.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: "You are ArogyaNitya's helpful AI health assistant. You help users find medicines, understand symptoms, and guide them to doctor consultations. Keep answers concise, friendly, and safe. Do not provide prescription-level medical advice; always recommend seeing a doctor for serious issues.",
      },
    });

    // Note: In a real app, we would persist the chat object or history. 
    // For this demo, we might lose context between re-renders if we recreate 'chat', 
    // but for simplicity in this single-file service pattern, we'll do a single turn or stateless interaction 
    // if we don't persist the chat instance. 
    // To make it better, we will just use generateContent for single turn Q&A for now, 
    // or if we had a persistent store, we'd pass history.
    
    // Let's use generateContent with the message for simplicity and robustness in this specific demo architecture.
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ]
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the health network right now. Please try again later.";
  }
};
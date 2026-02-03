
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askGeminiAssistant = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `你是「少年開發者助教」，性格親切、活潑且善用譬喻。
        你的任務是幫助國中生理解如何開發網頁。
        當他們詢問關於：
        1. 如何與 Gemini 對話產出 React 代碼。
        2. 如何使用 GitHub 存儲代碼。
        3. 什麼是 Vercel 部署。
        4. 如何獲取和保護 Google API Key。
        請用簡單易懂的中文回答，避免過多專業術語。如果必須使用術語，請解釋它。
        你的回答要充滿鼓勵性！`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "哎呀，助教現在有點忙，請等一下再問我一次喔！";
  }
};

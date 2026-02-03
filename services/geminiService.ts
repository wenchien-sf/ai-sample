
import { GoogleGenAI } from "@google/genai";

export const askGeminiAssistant = async (prompt: string) => {
  const apiKey = process.env.API_KEY;

  // 防呆機制：如果還沒設定 API Key，不執行初始化，避免網頁崩潰
  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    return "💡 偵測到尚未設定 Google API Key 喔！請參考教學步驟第 4 步，在 Vercel 的 Environment Variables 中設定 API_KEY，我才能為你服務！";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
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
    return "哎呀，助教現在連不上線，可能是 API Key 設定有誤或是網路問題，請檢查一下喔！";
  }
};

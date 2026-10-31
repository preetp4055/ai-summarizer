import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export const summarizeText = async (text: string) => {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3",
      prompt: `Summarize the following text in a concise way:\n\n${text}`,
      stream: false,
    }),
  });

  const data = await response.json();

  return data.response;
};
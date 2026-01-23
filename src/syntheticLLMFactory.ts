import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const HF_API_URL = "https://api-inference.huggingface.co/models/gpt2";
const HF_API_KEY = process.env.HF_API_KEY;

export async function makeLLMUser(): Promise<any> {
  const prompt = `
Generate a fake user profile as JSON with fields:
firstName, lastName, email, bio, interests (array of strings),
`;

  const res = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  const data: any = await res.json();
  const text = data[0]?.generated_text || "";

  try {
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    const jsonString = text.slice(jsonStart, jsonEnd + 1);
    return JSON.parse(jsonString);
  } catch {
    return { error: "Could not parse JSON" };
  }
}

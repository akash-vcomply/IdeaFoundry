// OpenAI integration logic (stub)
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

export async function summarizeIdea(idea: string) {
  // Example call to OpenAI (stub)
  return 'GPT summary of idea';
}

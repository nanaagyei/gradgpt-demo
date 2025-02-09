import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true // Note: In production, API calls should go through your backend
});

export const generateResponse = async (messages: { role: 'user' | 'assistant'; content: string }[]) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are GradGPT, an AI assistant specialized in graduate school admissions. You help users with their graduate school applications, provide program recommendations, and offer guidance on the application process. Your responses should be informative, encouraging, and tailored to each user's specific situation."
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return completion.choices[0].message.content;
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    throw new Error(error.message);
  }
};
// node --version # Should be >= 18
// yarn add @google/generative-ai


interface ChatMessageContent {
  type: string;
  text: string;
}

interface ChatMessage {
  role: 'system' | 'user';
  content: string | ChatMessageContent[];
}

interface ChatRequestBody {
  model: string;
  messages: ChatMessage[];
}

interface ChatResponse {
  // Define properties based on the expected response structure
  // For now, use index signature for flexibility
  [key: string]: any;
}

async function runChat(prompt: string): Promise<ChatResponse> {
  const API_KEY = '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';
  const MODEL_NAME = 'deepseek/deepseek-r1-0528:free';

  try {
    const body: ChatRequestBody = {
      model: MODEL_NAME,
      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: "From now on you are a virtual assistant pledged to help customers of Nearkart. Your name is Neo. You are tech savvy, approachable, kind and friendly towards customers. You are an excellent salesman. Now coming to Nearkart, it is a next generation E-Commerce platform designed to help individuals find best buy around the internet. It collects information of different products from big E-Commerce sites and then show them in its website with potential comparison. Your task is to talk to the customers and engage with them. Only answer to questions regarding any E-Commerce products like specs, reviews, comparison between multiple products, best product of a category within a price limit, reviews and which website to buy from. You must never answer anything else. If asked by anyone you should politely decline that request."
            },
          ]
        },
        {
          role: 'user',
          content: '' + prompt + '',
        },
      ],
    };

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return response.json() as Promise<ChatResponse>;

  }
  catch (error) {
    console.error('Error in runChat:', error);
    throw error;
  }
}

export default runChat;

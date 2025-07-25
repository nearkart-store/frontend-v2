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
  // const API_KEY = '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';
  // const API_KEY = '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';
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  ;
  const MODEL_NAME: string = process.env.NEXT_PUBLIC_MODEL_NAME ?? " ";

  // console.log('API_KEY:', API_KEY);
  // console.log('MODEL_NAME:', MODEL_NAME);

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

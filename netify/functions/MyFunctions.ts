// File: netlify/functions/myFunction.ts
import type { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions'

const handler: Handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  try {
    // Parse input (optional for GET, required for POST)
    const body = event.body ? JSON.parse(event.body) : null;

    // Your logic here
    const result = {
      message: 'Function executed successfully 🎉',
      method: event.httpMethod,
      input: body,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong', details: (error as Error).message }),
    };
  }
};

export { handler };
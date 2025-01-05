// api/runFlow/route.js
import { NextResponse } from 'next/server';

class LangflowClient {
    constructor(baseURL, applicationToken) {
        this.baseURL = baseURL;
        this.applicationToken = applicationToken;
    }

    async post(endpoint, body, headers = {}) {
        const finalHeaders = {
            "Authorization": `Bearer ${this.applicationToken}`,
            "Content-Type": "application/json",
            ...headers
        };

        const url = `${this.baseURL}${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: finalHeaders,
                body: JSON.stringify(body),
            });

            const responseMessage = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
            }
            return responseMessage;
        } catch (error) {
            console.error('Request Error:', error);
            throw error;
        }
    }

    async runFlow(flowId, langflowId, inputValue, inputType = 'chat', outputType = 'chat', tweaks = {}, stream = false) {
        const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
        return this.post(endpoint, {
            input_value: inputValue,
            input_type: inputType,
            output_type: outputType,
            tweaks
        });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { inputValue } = body;

        if (!inputValue) {
            return NextResponse.json(
                { success: false, error: 'Input value is required' },
                { status: 400 }
            );
        }

        const flowId = '934f29b9-3ccb-47ac-bc90-a4002449283b';
        const langflowId = '24f2154b-6059-41b3-b225-bf5d9bedc3e0';
        const applicationToken = 'AstraCS:ZAJmiAlZnRtgEAZKrHFpIrWA:3cb8cb16b749d319b6c2f22a1fb0827ce36a808a9bc1f607c3229b0df4ce992c';

        const client = new LangflowClient('https://api.langflow.astra.datastax.com', applicationToken);

        const tweaks = {
            "Agent-xCzTb": {
                "add_current_date_tool": true,
                "agent_description": "A helpful assistant with access to the following tools:",
                "system_prompt": "You are a helpful assistant that can use tools to answer questions and perform tasks.\nUse markdown to format your answer, properly embedding images and urls.",
                "temperature": 0.1,
            },
            "ChatInput-yUBQ5": {
                // Removed input_value from here since it's passed in the main request
                "sender": "User",
                "sender_name": "User",
                "should_store_message": true,
            },
            "ChatOutput-s0CNd": {
                "sender": "Machine",
                "sender_name": "AI",
                "should_store_message": true,
            }
        };

        const response = await client.runFlow(flowId, langflowId, inputValue, 'chat', 'chat', tweaks, false);

        // Extract the actual output from the Langflow response
        const output = response?.result?.output?.answer || response?.result?.output || 'No output received';
        console.log(output, 'this is output')
        console.log(response, 'this is response')
        return NextResponse.json({
            success: true,
            output,
            rawResponse: response  // Including raw response for debugging
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'An unexpected error occurred',
                details: error.toString()
            },
            { status: 500 }
        );
    }
}
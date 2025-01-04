from flask import Flask, request, jsonify
import json
from flask_cors import CORS 
import requests

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"], methods=["GET", "POST"])

# Langflow settings
BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "24f2154b-6059-41b3-b225-bf5d9bedc3e0"
FLOW_ID = "934f29b9-3ccb-47ac-bc90-a4002449283b"
APPLICATION_TOKEN = "AstraCS:tbbvDYMzOtDsZErRyLYpGCWZ:099edb1a151f2f243f38ee9b23aa53cdc72a8c4f8be7b20c6074fe3cc3a8423c"  # Replace with your token

# Default tweaks dictionary (can be modified)
TWEAKS = {
    "Agent-xCzTb": {},
    "ChatInput-yUBQ5": {},
    "ChatOutput-s0CNd": {},
    "Prompt-LAINo": {},
    "ParseData-GUCC8": {},
    "AstraDBToolComponent-nKeWt": {}
}

def run_flow(message: str, endpoint: str, output_type: str = "chat", input_type: str = "chat", tweaks: dict = None, application_token: str = APPLICATION_TOKEN) -> dict:
    """
    Run a flow with a given message and optional tweaks.

    :param message: The message to send to the flow
    :param endpoint: The ID or the endpoint name of the flow
    :param tweaks: Optional tweaks to customize the flow
    :return: The JSON response from the flow
    """
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{endpoint}"

    payload = {
        "input_value": message,
        "output_type": output_type,
        "input_type": input_type,
    }
    if tweaks:
        payload["tweaks"] = tweaks
    
    headers = {
        "Authorization": f"Bearer {application_token}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()

@app.route('/query-langflow', methods=['POST'])
def query_langflow():
    data = request.get_json()  # Get the JSON data from the frontend
    user_input = data.get('input')  # Extract the input query

    if not user_input:
        return jsonify({"error": "No input provided"}), 400
    
    print(user_input)

    # Optionally, add model_name tweak or modify TWEAKS as needed
    tweaks = {
        "Agent-xCzTb": {"model_name": "gpt-4o-mini"}  # Customize the model name as required
    }

    # Run the Langflow API with the user's input and the specified tweaks
    try:
        response = run_flow(user_input, endpoint=FLOW_ID, tweaks=tweaks, application_token=APPLICATION_TOKEN)
        print("response successful")
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    # Return the response from Langflow back to the frontend
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)

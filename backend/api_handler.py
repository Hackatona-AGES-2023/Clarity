import uuid
import requests
import json
import openai


class ApiHandler:
    def soffos(self, msg):
        generated_uuid = uuid.uuid4()
        uuid_str = str(generated_uuid)
        data = {
            "messages": [
                {
                    "source": "user",
                    "text": f"Rewrite the following sentence, removing their ambiguity, if exists, in portuguese: {msg} return just the sentence."
                }
            ],
            "mode": "open",
            "session_id": uuid_str,
            "user": "gataba.santos@gmail.com",
            "user_id": 437
        }

        url = 'https://api.soffos.ai/service/chat/'

        headers = {
            'x-api-key': 'Token 8b8de695-81ed-4614-96a8-9f69419600e3',
            'Content-Type': 'application/json'
        }

        response = requests.post(url, headers=headers, json=data)

        return json.dumps(response.json())
    def chatGPT(self, msg):
        api_key = "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"

        url = "https://api.openai.com/v1/chat/completions"

        data = {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": f"Rewrite the following sentence, removing their ambiguity, if exists, in portuguese: {msg} return just the sentence."}],
            "temperature": 0.7
        }
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }

        response = requests.post(url, headers=headers, json=data)

        return json.dumps(response.json())


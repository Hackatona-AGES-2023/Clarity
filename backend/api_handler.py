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
                    "text": f"Rewrite the following sentence, removing their ambiguity and explain it, if exists, in Portuguese: {msg}"
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
            "messages": [{"role": "user", "content": f"Rewrite the following sentence, removing their ambiguity and explain it, if exists, in Portuguese: {msg}"}],
            "temperature": 0.7
        }
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }

        response = requests.post(url, headers=headers, json=data)

        return json.dumps(response.json())


import uuid
import requests
import json


class ApiHandler:
    def soffos(self, msg):
<<<<<<< Updated upstream
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        }

        body = {
            'model': 'gpt-3.5-turbo',
            'messages': [{
                'role': 'user',
                'message': msg
            }]
        }

        response = requests.post('https://api.soffos.ai/v1/chat', headers=headers, json=body)
        print(response.json())
=======
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
>>>>>>> Stashed changes

        return json.dumps(response.json())
    def chatGPT(self, msg):
        print("gpt")

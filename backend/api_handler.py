import requests

class ApiHandler:
    def soffos(self, msg):
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

    def chatGPT(self, msg):
        print("gpt")

# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
from api_handler import ApiHandler
import time
import json
from flask import Flask, jsonify, request
from flask_cors import CORS


hostName = "localhost"
serverPort = 8080

app = Flask(__name__)
CORS(app)

@app.route('/exec', methods=['POST'])
def exec_route():
    if request.method == 'POST':
        data = request.get_json()
        if 'message' not in data or 'isGPT' not in data:
            return jsonify({'error': 'Missing mandatory attributes.'}), 400

        msg = data['message']
        is_gpt = data['isGPT']

        api_handler = ApiHandler()

        if is_gpt:
            response = api_handler.chatGPT(msg)
        else:
            response = api_handler.soffos(msg)

        response_data = {
            'message': 'Request received successfully!', 
            'data': json.loads(response)
        }

        return jsonify(response_data), 200


if __name__ == '__main__':
    app.run(host='localhost', port=8080)
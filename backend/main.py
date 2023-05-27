# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
from api_handler import ApiHandler
import time
import json

hostName = "localhost"
serverPort = 3333 

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        match self.path:
            case "/":
                self.send_response(200)
                self.send_header("Content-type", "text/html")
                self.end_headers()
                self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
                self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
                self.wfile.write(bytes("<p>This is an example web server.</p>", "utf-8"))
                self.wfile.write(bytes("<body>", "utf-8"))
                self.wfile.write(bytes("</body></html>", "utf-8"))
            case _:
                print("la ele")
    def do_POST(self):
        match self.path:
            case "/exec":
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data.decode('utf-8'))

                if 'message' not in data or 'isGPT' not in data:
                    self.send_response(400)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(b'Missing mandatory attributes.')
                    return

                msg = data['message']
                is_gpt = data['isGPT']

                api_handler = ApiHandler()

                response = None 

                if is_gpt:
                    response = api_handler.chatGPT(msg)
                else:
                    response = api_handler.soffos(msg)

                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()

                # Process the request body
                request_data = json.loads(response)

                # Prepare the response JSON
                response_data = {'message': 'Request received successfully!', 'data': request_data}

                response_json = json.dumps(response_data)

                # Send the response
                self.wfile.write(response_json.encode())
            case _:
                print("nothing")

if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")

import express from 'express';
import bodyParser from 'body-parser';
import ApiHandler from './api_handler'; // Assuming you have an API handler module

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<html><head><title>https://nodejs.org</title></head>'
    + '<p>Request: ' + req.path + '</p>'
    + '<p>This is an example web server.</p>'
    + '</body></html>');
});

app.post('/exec', (req, res) => {
  const { message, isGPT } = req.body;

  if (!message || !isGPT) {
    res.status(400).json('Missing mandatory attributes.');
    return;
  }

  const apiHandler = new ApiHandler();

  let response;
  if (isGPT) {
    response = apiHandler.chatGPT(message);
  } else {
    response = apiHandler.soffos(message);
  }

  const responseJson = {
    message: 'Request received successfully!',
    data: JSON.parse(response),
  };

  res.json(responseJson);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


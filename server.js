const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle the question and generate code response
app.post('/api/answer', (req, res) => {
  const { question } = req.body;

  // TODO: Process the question and generate the appropriate code response
  // You can use your code generation model or templates here

  const generatedCode = 'const answer = 42;';
  res.json({ generatedCode });
});

// Serve index.html as the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

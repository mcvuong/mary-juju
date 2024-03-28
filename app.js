const express = require('express');
const path = require('path');
const app = express();

// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  next();
});

// Serve HTML files from the root directory
app.get('/', (req, res) => {
  // Render the 'index.html' file located in the root directory
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Example route to render another HTML file
app.get('/rsvp', (req, res) => {
  // Render the 'example.html' file located in the root directory
  res.sendFile(path.join(__dirname, 'rsvp.html'));
});

// Your other routes and middleware can go here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

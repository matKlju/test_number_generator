// server.js (test_number_generator)
const express = require('express');
const app = express();

app.get('/number', (req, res) => {
  const num = Math.floor(Math.random() * 100000);
  res.send(num.toString());
});

app.listen(5000, () => console.log('Number generator running on http://localhost:5000'));

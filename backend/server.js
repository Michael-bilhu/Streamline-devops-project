const express = require('express');

const app = express();

app.get('/api/message', (req, res) => {
  res.json({
    message: 'Backend API is running successfully!'
  });
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});

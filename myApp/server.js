const express = require('express');

const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
  res.send('Hi, this is your simple Node.js server!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


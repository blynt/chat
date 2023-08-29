const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send(
    {
      message: 'Successful response at ' + 
        new Date().toISOString()
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

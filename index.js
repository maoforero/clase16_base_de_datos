const express = require('express');
const app = express();
const { config } = require('./config');
const PORT = config.port;

app.listen(PORT, () => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`);
})
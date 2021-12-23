const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('./config');

//** Routes
const routerPro = require('./routes/routerPro');

//** Config Puerto
const PORT = config.port;


const db_obj = require('./config/db');

//** Conexion Knex
const db = db_obj.client; 

//** Middleware
app.use(cors(config.cors));
app.use("/productos", require('./routes/routerPro'))

//routes home

app.get("/", (req, res) => {
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`);
})
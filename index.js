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


(async () => {
    try{
        let data = [
            {
                title: "Iphone 13",
                price: "900",
                img:"https://pngimg.com/uploads/iphone_13/iphone_13_PNG29.png"
            }
        ]

        //create
        await db.schema.createTable("productos", table => {
            table.increments("id").primary(),
            table.string("title"),
            table.int("price"),
            table.string("img")
        })
    }catch(error){
        console.log(error)
    }
})

//routes home

app.get("/", (req, res) => {
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`);
})
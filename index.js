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
            },
            {
                title: "Bicicleta BMX",
                price: "120",
                img:"https://png.pngtree.com/element_pic/00/16/07/31579d6d88edb58.jpg"
            },
            {
                title: "Mouse ROG",
                price: "30",
                img:"https://www.pngfind.com/pngs/m/247-2473217_gaming-mouse-png-asus-rog-puggio-transparent-png.png"
            },
            {
                title: "Camera Sony",
                price: "450",
                img:"https://image.similarpng.com/thumbnail/2020/04/DSLR-camera-PNG.png"
            },
            {
                title: "Acustic Guitar",
                price: "300",
                img:"https://i.pinimg.com/originals/f2/15/d7/f215d757f570e68df70d0431682c8679.png"
            },
            {
                title: "Standar Hammer",
                price: "15",
                img:"https://toppng.com/uploads/preview/hammer-png-11553953573o0tthjhkjb.png"
            }
        ];

        let response = await db.from("productos").insert(data);
        console.log(response);

        //create
        // await db.schema.createTable("productos", table => {
        //     table.increments("id").primary(),
        //     table.string("title"),
        //     table.int("price"),
        //     table.string("img")
        // })
    }catch(error){
        console.log(error)
    }
})ñ

//routes home

app.get("/", (req, res) => {
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`);
})
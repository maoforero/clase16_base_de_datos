const express = require('express');
const { Router } = express;
let routerProd = new Router;

routerProd.get("/productos", (req, res, next) => {
    res.send("Productos");
})

routerProd.get("/productosRandom", (req, res, next) => {
    res.send("Productos Random");
})

module.exports = routerProd;

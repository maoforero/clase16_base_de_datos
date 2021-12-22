require("dotenv").config

const config = {
    dev: process.env.NOD_ENV !== 'production',
    port: process.env.PORT
}

const db = {
    dbHost:process.env.DB_HOST,
    dbUser:process.env.DB_USER,
    dbPass:process.env.DB_PASSWORD,
    dbName:process.env.DB_NAME
}


module.exports = {config, db}
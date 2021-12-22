require("dotenv").config

const config = {
    dev: process.env.NOD_ENV !== 'production',
    port: process.env.PORT,
    cors: `${process.env.CORS}`
}

const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    name: process.env.DB_NAME
}

module.exports = {config, db}
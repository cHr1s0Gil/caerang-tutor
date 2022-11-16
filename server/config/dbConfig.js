const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE
};

module.exports = mysql.createPool(dbConfig);



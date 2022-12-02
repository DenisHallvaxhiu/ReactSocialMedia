const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.usernameDb,
    password: process.env.password,
    port: process.env.portDb,
    database: process.env.database,
  });

module.exports = connection
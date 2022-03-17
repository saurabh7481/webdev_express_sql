const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Zeus@007",
    database: "node_intro"
})

module.exports = pool.promise()
// dependencies
const mysql = require("mysql2");

// connects database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SQLPw9259a!@1",
    database: "cms_db"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
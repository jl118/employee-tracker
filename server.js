// dependencies 
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SQLPw9259a!@1",
    database: "cms_db"
});

connection.connect(function(err) {
    if (err) throw err;
});

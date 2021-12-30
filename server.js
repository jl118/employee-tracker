// dependencies 
const inquirer = require("inquirer");
const cTable = require("console.table");

const db = require("./config/connect");


// TODO: view all departments function
function viewAllDepts() {

};

// TODO: view all roles function
function viewAllRoles() {

};

// TODO: view all employees function
function viewAllEmps() {

};

// TODO: add department function
function addDepartment() {

};

// TODO: add role function
function addRole() {

};

// TODO: add employee function
function addEmployee() {

};

// TODO: update employee function
function updateEmployee() {

};

// TODO: add inquirer prompts to perform different actions
function init() {
    inquirer
        .prompt(
            [{
                type: "list",
                message: "What would you like to do?",
                name: "actions",
                choices: [
                    "View all Departments",
                    "View all Roles",
                    "View all Employees",
                    "Add a Department",
                    "Add a Role",
                    "Add an Employee",
                    "Update an Employee's Role",
                    "Exit"
                ]
            }]
        )
        .then((response) => {
            switch (response.actions){
                case "View all Departments": viewAllDepts();
                    break;
                case "View all Roles": viewAllRoles();
                    break;
                case "View all Employees": viewAllEmps();
                    break;
                case "Add a Department": addDepartment();
                    break;
                case "Add a Role": addRole();
                    break;
                case "Add an Employee": addEmployee();
                    break;
                case "Update an Employee's Role": updateEmployee();
                    break;
                case "Exit": process.exit(1);
            }
        })
}

// TODO: initialize the application
// dependencies 
const inquirer = require("inquirer");
const cTable = require("console.table");

const db = require("./config/connect");


// TODO: view all departments function
function viewAllDepts() {
    db.query('select * from departments', function (err, results) {
        console.table(results);
    });
};

// TODO: view all roles function
function viewAllRoles() {
    db.query('select roles.id, roles.title, roles.salary, departments.name FROM roles JOIN departments ON departments.id = roles.dept_id;', function (err, results) {
        console.table(results);
    });
};

// TODO: view all employees function
function viewAllEmps() {
    db.query('select e.id, concat(e.first_name, " ", e.last_name) as "Name", roles.title, departments.name, roles.salary, concat(m.first_name, " ", m.last_name) as "Manager Name" from employees e left join employees m on e.manager_id = m.id join roles on e.roles_id = roles.id join departments on departments.id = roles.dept_id order by e.id asc;', function (err, results) {
        console.table(results);
    });
};

// TODO: add department function
function addDepartment() {
    inquirer
        .prompt(
            [{
                
            }]
        )
};

// TODO: add role function
function addRole() {
    inquirer
        .prompt(
            [{
                
            }]
        )
};

// TODO: add employee function
function addEmployee() {
    inquirer
        .prompt(
            [{
                
            }]
        )
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
};

// TODO: initialize the application
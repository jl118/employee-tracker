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
                type: "input",
                name: "dept",
                message: "What is the name of the Department?",
                validate: async (input) => {
                    if(!input){
                        return "Please enter a name for the department you wish to add.";
                    }
                    return true;
                }
            }]
        )
        .then((response) => {
            db.query(`insert into departments (name) value ("${response.dept}")`);
            console.log(`${response.dept} Department added to table.`);
        })
};

// TODO: add role function
function addRole() {
    inquirer
        .prompt(
            [{
                type: "input",
                name: "title",
                message: "What is the name of the Role you would like to add.",
                validate: async (input) => {
                    if(!input){
                        return "Please enter a name for the role you would like to add.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the id for the Role?",
                validate: async (input) => {
                    if(!input){
                        return "Please enter an id.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for the role?",
                validate: async (input) => {
                    if(!input) {
                        return "Please enter a salary for the new role.";
                    }
                    return true;
                }
            },
            {
                type: "list",
                name: "dept_id",
                message: "Which id corresponds to the department this role is in?",
                choices: depts
            }]
        )
        .then((response) => {
            db.query(`insert into roles ( id, title, salary, dept_id ) value ( ${response.id}, "${response.title}", ${response.salary}, ${response.dept_id})`);
            console.log(`${response.title} role added to table.`)
        })
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
// dependencies 
const inquirer = require("inquirer");
const cTable = require("console.table");

const db = require("./config/connect");

// title
console.log("Welcome to the Employee Tracker");

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
    db.query('select e.id, concat(e.first_name, " ", e.last_name) as "Name", roles.title, departments.name, roles.salary, concat(m.first_name, " ", m.last_name) as "Manager Name" from employees e left join employees m on e.manager_id = m.id join roles on e.role_id = roles.id join departments on departments.id = roles.dept_id order by e.id asc;', function (err, results) {
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
    let role_name = [];
    // creates the array for the manager question
    let manager_names = [ {name: "none", value: null} ];
    //gathers all roles
    db.query('select roles.id, roles.title from roles;' , function (err, results) {
        results.forEach(element => {
            role_name.push({name: `${element.title}`, value: `${element.id}`},);
        });
        // gathers all managers that are in the database
        db.query('select concat(employees.first_name, " ", employees.last_name) as "name", employees.id, employees.manager_id from employees;', function (err,results) {
            results.forEach(element => {
                if (!element.manager_id){
                    manager_names.push({name: `${element.name}`, value: `${element.id}`},);
                }
            })
            inquirer
                .prompt(
                    [{
                        type: "input",
                        name: "first_name",
                        message: "What is the employee's first name?"
                    },
                    {
                        type: "input",
                        name: "last_name",
                        message: "What is the employee's last name?"
                    },
                    {
                        type: "list",
                        name: "role",
                        message: "What role does this employee have?",
                        choices: role_name
                    },
                    {   
                        type: "list",
                        name: "manager",
                        message: "Who is the manager for this employee?",
                        choices: manager_names
                    }]
                )
            .then ((response) => {
                let name = response.first_name + " " + response.last_name;
                db.query(`insert into employees (first_name, last_name, role_id, manager_id) value ("${response.first_name}", "${response.last_name}", ${response.role}, ${response.manager})`);
                console.log(`Employee ${name} added to table.`);
            })
        })
    })
};

// TODO: update employee function
async function updateEmployee(){
    let employeeArray = [];
    let rolesArray = [];
    //gathers all employees curently in the database
    db.query('select concat(employees.first_name, " ", employees.last_name) as "name", employees.id from employees;', function (err,results) {
        results.forEach(element => {
                employeeArray.push({name: `${element.name}`, value: `${element.id}`},);
        })
        //gathers all roles curently in the database
        db.query('select roles.id, roles.title from roles;', function (err,results) {
            results.forEach(element => {
                    rolesArray.push({name: `${element.title}`, value: `${element.id}`},);
            })
            inquirer
                .prompt(
                    [{
                        type: "list",
                        message: "Which employee would you like to update?",
                        name: "id",
                        choices: employeeArray
                    },
                    {
                        type: "list",
                        message: "What is the employee's new role?",
                        name: "role_id",
                        choices: rolesArray
                    }]
                )
                .then((response) => {
                    db.query(`update employees set role_id = ${response.role_id} where id = ${response.id}`);
                    console.log("Employee role updated.")
                    
                })
        })
    })
}

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
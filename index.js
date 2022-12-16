const { prompt } = require("inquirer");
const db = require("./db");

require("console.table");

function initialize() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "Add employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update employee role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "View all roles",
          value: "VIEW_ALL_ROLES",
        },
        {
          name: "Add role",
          value: "ADD_ROLE",
        },
        {
          name: "Add department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Finished",
          value: "FINISHED",
        },
      ],
    },
  ]).then((res) => {
    switch (choice) {
      case "VIEW_DEPARTMENTS":
        viewDepartments();
      case "ADD_DEPARTMENT":
        addDepartment();
      case "VIEW_EMPLOYEES":
        viewEmployees();
      case "ADD_EMPLOYEE":
        addEmployee();
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
      case "VIEW_ALL_ROLES":
        viewAllRoles();
      case "ADD_ROLE":
        addRole();
        break;
      default:
        finished();
    }
  });
}

function viewDepartments() {
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => initialize());
}

function addDepartment() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department?",
    },
  ]).then((res) => {
    let name = res;
    db.createDepartment(name)
      .then(() => console.log(`Added ${name.name} to the database`))
      .then(() => initialize());
  });
}

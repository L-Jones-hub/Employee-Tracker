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
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      default:
        finished();
    }
  });
}

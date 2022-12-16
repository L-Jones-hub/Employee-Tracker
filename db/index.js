const mysql2 = require("mysql2");
const init = require("../index.js");

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees_db",
});

function viewAllDepartments() {
  db.promise()
    .query("SELECT * FROM department;")
    .then((results) => console.table(results[0]))
    .then(() => init.initialize());
}

function createDepartment(response) {
  db.promise()
    .query(
      "INSERT INTO department SET ?",
      response.newDepartmentName,
      (error, result) => {
        if (error) {
          console.log(error);
        } else console.log("Success!");
      }
    )
    .then(() => {
      init.initialize();
    });
}

function viewAllEmployees() {
  db.promise()
    .query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary"
    )
    .then((results) => console.table(results[0]))
    .then(() => init.initialize());
}

function createEmployee() {
  db.promise()
    .query("INSERT INTO employee SET ?")
    .then(() => init.initialize());
}

function viewAllRoles() {
  db.promise()
    .query(
      "SELECT role.id, department.name AS department, role.salary FROM role"
    )
    .then((results) => console.table(results[0]))
    .then(() => init.initialize());
}

function updateEmployeeRole() {
  db.promise()
    .query("UPDATE employee SET role_id = ? WHERE id = ?")
    .then((results) => console.table(results[0]))
    .then(() => init.initialize());
}

function createRole() {
  db.promise()
    .query("INSERT INTO role SET ?")
    .then((results) => console.table(results[0]))
    .then(() => init.initialize());
}

module.exports = {
  viewAllDepartments,
  createDepartment,
  viewAllEmployees,
  createEmployee,
  viewAllRoles,
  updateEmployeeRole,
  createRole,
};

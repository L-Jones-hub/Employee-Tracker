const connection = require("./connection");
const table = require("console.table");
const mysql2 = require("mysql2");

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees_db",
});

  function viewAllDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id FROM department;");
  };

  function createDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  };

  function viewAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary"
      );
  };

  function createEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  };

  function viewAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, department.name AS department, role.salary FROM role"
      )
      .then((results) => console.table(`/n`, results[0], "/n"));
  };

  function updateEmployeeRole(employeeId, roleId) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        employeeId,
        roleId,
      ]);
  };

  function createRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  };


module.exports = new DB(connection);

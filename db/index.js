const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name, FROM department;");
  }

  createDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary"
      );
  }

  createEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }
  
  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, department.name AS department, role.salary FROM role"
      );
  }
}

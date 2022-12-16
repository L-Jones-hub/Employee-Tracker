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
}



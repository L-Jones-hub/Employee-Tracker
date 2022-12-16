const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees_db",
});

connection.connect(function (error) {
  if (error) throw error;
});

module.exports = connection;

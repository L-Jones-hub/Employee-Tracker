const express = require("express");
const db = require("./db");
const path = require("path");
const mysql2 = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));

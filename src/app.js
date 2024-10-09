const express = require("express");
const db = require("./db");

const { addStudent } = require("./controllers/student");

const app = express();

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.post('/students', addStudent);


module.exports = app;
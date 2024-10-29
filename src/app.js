const express = require("express");
const cors = require("cors");
const { addStudent, getAllEmails } = require("./controllers/student");

const app = express();

app.use(express.json()); // For parsing application/json
app.use(cors());
//app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.get('/students/emails', getAllEmails);
app.post('/students', addStudent);

module.exports = app;
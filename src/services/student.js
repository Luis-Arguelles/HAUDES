const db = require("../db");

const getAllEmailsService = async () => {
    return await db.query("SELECT CUENTA_GOOGLE FROM alumnos");
};

const getAllControlNumbersService = async () => {
    return await db.query("SELECT NO_CONTROL FROM alumnos");
};

const getAllClassesService = async () => {
    return await db.query("SELECT GRUPO_ACTUAL FROM alumnos");
};

const getAllFullNamesService = async () => {
    return await db.query("SELECT NOMBRE, PATERNO, MATERNO FROM alumnos");
};

const addStudentService = ({student_name, student_class, parent_name, parent_email}) => {
    return db.query("INSERT INTO students (student_name, student_class, parent_name, parent_email) VALUES (?, ?, ?, ?)",
        [student_name, student_class, parent_name, parent_email]);
}

module.exports = { addStudentService, getAllEmailsService, getAllControlNumbersService, getAllClassesService, getAllFullNamesService };
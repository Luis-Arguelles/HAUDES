const db = require("../db");

const addStudentService = ({student_name, student_class, parent_name, parent_email}) => {
    return db.query("INSERT INTO students (student_name, student_class, parent_name, parent_email) VALUES (?, ?, ?, ?)",
        [student_name, student_class, parent_name, parent_email]);
}

const getAllEmailsService = async () => {
    return await db.query("SELECT CUENTA_GOOGLE FROM alumnos");
}

module.exports = { addStudentService, getAllEmailsService };
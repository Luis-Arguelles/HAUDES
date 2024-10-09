const { addStudentService } = require("../services/student");

const addStudent = (req, res) => {
    try{
        const { student_name, student_class, parent_name, parent_email } = req.body;
        const student = addStudentService({ student_name, student_class, parent_name, parent_email });
        res.status(201).json({message: `El nuevo estudiante ha sido agregado`});
    } catch (error) {
        res.status(500).json(console.error(error));
    }
}


module.exports = { addStudent };
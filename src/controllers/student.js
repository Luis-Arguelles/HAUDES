const { addStudentService, getAllEmailsService } = require("../services/student");

const addStudent = async (req, res) => {
    try{
        const { student_name, student_class, parent_name, parent_email } = req.body;
        const student = await addStudentService({ student_name, student_class, parent_name, parent_email });
        res.status(201).json({message: `El nuevo estudiante ha sido agregado`});
    } catch (error) {
        res.status(500).json(console.error(error));
    }
};

const getAllEmails = async (req, res) => {
    try{
        const emails = await getAllEmailsService();
        res.status(200).json(emails[0]);
    } catch (error) {
        res.status(500).json(console.error(error));
    }
};


module.exports = { addStudent, getAllEmails };
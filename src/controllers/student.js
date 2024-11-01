const { addStudentService, getAllEmailsService, getAllControlNumbersService, getAllClassesService, getAllFullNamesService } = require("../services/student");

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
        const response = await getAllEmailsService();
        res.status(200).json(response[0]);
    } catch (error) {
        res.status(500).json(console.error(error));
    }
};

const getStudentsInfo = async (req, res) =>{
    try{
        const controlNumberResponse = await getAllControlNumbersService();
        const classResponse = await getAllClassesService();
        const fullNameResponse = await getAllFullNamesService();
        let fullNames = [];
        let fullNameString  = "";

        fullNameResponse[0].map(fields => {
            for(let field in fields){
                if (field !== "MATERNO") fullNameString += fields[field] + " ";
                else fullNameString += fields[field];
            }
            fullNames.push(fullNameString);
            fullNameString = "";
        }
        )

        const info = {
            controlNumbers: controlNumberResponse[0],
            classes: classResponse[0],
            fullNames
        }

        res.status(200).json(info);
    } catch (error) {
        res.status(500).json(console.error(error));
    }
}

module.exports = { addStudent, getAllEmails, getStudentsInfo };
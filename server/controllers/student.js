export const getStudents = async (req, res) => {
    try {
        const allStudents = await students.find();

        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json( {messages: error.message} );
    }
}

export const createStudent = async (req, res) => {
    const student = req.body;

    const newStudent = new student(student);
    try {
        await  newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json( {messages: error.message} );
    }
}

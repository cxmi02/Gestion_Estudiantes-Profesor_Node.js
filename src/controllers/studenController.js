const Student = require('../model/studentModel');

const studentController = {

    // crear nuevo estudiante
    createStudent: async (req, res) => {
        const studenData = req.body;
        try {
            const newStudent = new Student(studenData);
            const savedStudent = await newStudent.save();
            res.status(201).json(savedStudent);

        } catch (error) {
            console.error('Error when creating the Student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener todos los estudiantes
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.find();
            res.json(students);

        } catch (error) {
            console.error('Error bringing all students:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener un estudiante especifico
    getStudenById: async (req, res) => {
        const { id } = req.params;
        try {
            const studentId = await Student.findOne({ id: id });
            res.json(studentId);

        } catch (error) {
            console.error('Error bringing student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar un estudiante existente
    updateStudent: async (req, res) => {
        try {
            // cambiarlo directamente desde aqui
            const { id } = req.params;
            const studenUpdate = await Student.findOneAndUpdate({ id: id }, { $set: { name: 'Carlos' } });
            res.json(studenUpdate);

        } catch (error) {
            console.error('error updating student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar un estudiante existente
    deleteStudent: async (req, res) => {
        try {
            const { id } = req.params;
            const studenDelete = await Student.findOne({ id: id });
            res.json(studenDelete);

        } catch (error) {
            console.error('error deleting student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = studentController;
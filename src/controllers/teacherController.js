const Teacher = require('../model/teacherModel');

const teacherController = {

    // crear un nuevo profesor
    createTeacher: async (req, res) => {
        const teacherData = req.body;
        try {
            const newTeacher = new Teacher(teacherData);
            const savedTeacher = await newTeacher.save();
            res.status(201).json(savedTeacher);

        } catch (error) {
            console.error('Error when creating the Teacher:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // obtener todos los profesores
    getAllTeachers: async (req, res) => {
        try {
            const teacher = await Teacher.find();
            res.json(teacher);

        } catch (error) {
            console.error('Error bringing all Teacher:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // obtener un profesor por id
    getTeacherById: async (req, res) => {
        const { id } = req.params;
        try {
            const teacherId = await Teacher.findOne({ id: id });
            res.json(teacherId);

        } catch (error) {
            console.error('Error bringing Teacher:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar un profesor existente
    updateTeacher: async (req, res) => {
        try {
            // cambiarlo desde el postman
            const { id } = req.params;
            const { name, specialty, email } = req.body
            const teacherUpdate = await Teacher.findOneAndUpdate({ id: id }, { $set: { name: name, specialty: specialty, email: email } });
            res.json(teacherUpdate);

        } catch (error) {
            console.error('error updating Teacher:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar un estudiante existente
    deleteTeacher: async (req, res) => {
        try {
            const { id } = req.params;
            const teacherDelete = await Teacher.findOneAndDelete({ id: id });
            res.json(teacherDelete);
        } catch (error) {
            console.error('error deleting Teacher:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = teacherController;
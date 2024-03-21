const mongoose = require('mongoose');
let Student;
let Teacher;

const connectDatabase = async (req, res) => {
    try {
        if (!Student || !Teacher) {
            Student = mongoose.model('Student', require('../model/studentModel').schema);
            Teacher = mongoose.model('Teacher', require('../model/teacherModel').schema);
        }

        await mongoose.connect('mongodb+srv://sepulvedagiraldocamila:IAw9xmtt7wXcTtIL@db-1.idpnodb.mongodb.net/')
            .then(() => console.log('MongoDB Connected'))
            .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);

    }
};

const initializeData = async () => {
    try {
        await Student.deleteMany();
        await Teacher.deleteMany();

        const students = [
            {
                id: 1,
                name: 'Mariana',
                age: 24,
                email: 'mariana@gmail.com',
                teacherId: 2
            },
            {
                id: 2,
                name: 'Johan',
                age: 22,
                email: 'johan@gmail.com',
                teacherId: 1
            },
            {
                id: 3,
                name: 'Joel',
                age: 22,
                email: 'joel@gmail.com',
                teacherId: 2
            },
        ];

        const Teachers = [
            {
                id: 1,
                name: 'Robinson',
                specialty: 'Programacion',
                email: 'robinson@gmail.com',
            },
            {
                id: 2,
                name: 'Otilia',
                specialty: 'Fisica',
                email: 'otilia@gmail.com',
            }
        ];

        await Student.insertMany(students);
        await Teacher.insertMany(Teachers);
        console.log('Data successfully initialized');

    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);

    }
};

module.exports = connectDatabase;
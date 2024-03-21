const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    email: String,
    teacherId: Number
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    id: Number,
    name: String,
    specialty: String,
    email: String
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
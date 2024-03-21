const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studenController');
const teacherController = require('../controllers/teacherController');

// Studenst
router.post('/api/new/student', studentController.createStudent);
router.get('/api/all/student', studentController.getAllStudents);
router.get('/api/student/id/:id', studentController.getStudenById);
router.patch('/api/student/update/:id', studentController.updateStudent);
router.delete('/api/student/delete/:id', studentController.deleteStudent);

// Teachers
router.post('/api/new/teacher', teacherController.createTeacher);
router.get('/api/all/teacher', teacherController.getAllTeachers);
router.get('/api/teacher/id/:id', teacherController.getTeacherById);
router.patch('/api/teacher/update/id/:id', teacherController.updateTeacher);
router.delete('/api/teacher/delete/id/:id', teacherController.deleteTeacher);

module.exports = router;


const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');


router.post('/api/new/teacher', teacherController.createTeacher);
router.get('/api/all/teacher', teacherController.getAllTeachers);
router.get('/api/teacher/id/:id', teacherController.getTeacherById);
router.patch('/api/teacher/update/id/:id', teacherController.updateTeacher);
router.delete('/api/teacher/delete/id/:id', teacherController.deleteTeacher);

module.exports = router;
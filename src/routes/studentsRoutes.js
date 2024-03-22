const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studenController');

// Studenst
router.post('/api/new/student', studentController.createStudent);
router.get('/api/all/student', studentController.getAllStudents);
router.get('/api/student/id/:id', studentController.getStudenById);
router.patch('/api/student/update/:id', studentController.updateStudent);
router.delete('/api/student/delete/:id', studentController.deleteStudent);

module.exports = router;


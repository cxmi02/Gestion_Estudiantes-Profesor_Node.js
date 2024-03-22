const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const studentRoutes = require('./routes/studentsRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

const app = express();
const port = 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', studentRoutes);
app.use('/', teacherRoutes);
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
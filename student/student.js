const express=require('express');
const { studentController } = require('../admin/controller/controller');
const student=express.Router();

student.get('/show',studentController)
module.exports={student:student}



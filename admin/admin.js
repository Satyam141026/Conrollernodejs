const express=require('express');
const { adminController } = require('./controller/controlleradmin');
const admin=express.Router();

admin.get('/getapi',adminController)
module.exports=admin;
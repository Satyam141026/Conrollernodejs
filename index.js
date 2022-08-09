const express=require('express')
const app=express();
const env=require('dotenv')
const {student}=require('./student/student')
const admin=require('./admin/admin')
env.config()
app.use('/data',student)
app.use('/data1',admin)



app.listen(process.env.PORT,(()=>{
    console.log('connected the db')
}))





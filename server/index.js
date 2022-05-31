const express=require('express');
const config =require('./config');
const Port=process.env.Port||8800
const app=express();
app.use(express.json());
app.listen(Port, console.log("Server is running on port: " + Port));
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const uploadController = require("./controller/personController");

const app=express();
const upload=multer();
let url = "mongodb://localhost:27017/Person";

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});

app.post('/api/upload',upload.single('file'),(req,res)=>uploadController(req,res));

mongoose.connect(url, { useNewUrlParser: true }).then(()=>{
    app.listen(3000,()=>{
        console.log('server started...');
    })
}).catch((err)=>console.log(error));
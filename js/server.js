let express = require('express');
let http=require('http');
let app= express();
let mongoose=require('mongoose');
let nodemailer = require('nodemailer');
require('dotenv').config();
let bodyParser = require('body-parser');
let bp=bodyParser.json();
//Cros 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// Starting the server at port
app.listen("3000",()=>{
    console.log("Server started at port 3000 ! ");
});
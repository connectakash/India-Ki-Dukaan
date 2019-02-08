let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let http = require('http');
let app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// mongoose.connect('mongodb:admin:admin123@ds129541.mlab.com:29541/india-ki-dukaan');

app.listen(3000,()=>{
console.log("Server Started listening at port 3000 !");
});



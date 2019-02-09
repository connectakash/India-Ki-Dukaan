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
// Connect to the Mlab database
mongoose.connect('mongodb://admin:admin123@ds129541.mlab.com:29541/india-ki-dukaan');
//Product Scheme
let ProductSchema = new mongoose.Schema({
    
    "ProductName":String,
    "ProductCategory":String,
    "AboutProduct":String,
    "Description":String,
    "Specification":String,
    "Price":Number,
    "Quantity":Number,
    "ImageUrl":String,
    "SellerId":Number
    
});
// Creating Product Database
let ProductModel = new mongoose.model("Product",ProductSchema);
app.post("/add",bp,function(req,res){
     console.log(req.body);
    ProductModel(req.body).save(function(err,data){
        console.log(err);
        console.log(data);
    });
});
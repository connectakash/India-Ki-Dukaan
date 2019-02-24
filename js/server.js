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
//Seller SignUp Schema
let SellerSignupSchema = new mongoose.Schema({
    "UserName":String,
    "Email":String,
    "Password":String,
    "DOB":Date,
    "PhoneNo":Number,
    "State":String,
    "Address":String

});
//User SignUp Schema
let UserSignupSchema = new mongoose.Schema({
    "UserName":String,
    "Email":String,
    "Password":String,
    "PhoneNo":Number,
    "Address":String

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
//Creating SellerSignUp Database
let SellerSignUpModel = new mongoose.model("SellerSignUp",SellerSignupSchema);
app.post("/sellersignup",bp,function(req,res){
    console.log(req.body);
    SellerSignUpModel(req.body).save(function(err,data){
       console.log(err);
       console.log(data);
   });
});
//Creating UserSignUp Database
let UserSignUpModel = new mongoose.model("UserSignUp",UserSignupSchema);
app.post("/usersignup",bp,function(req,res){
    console.log(req.body);
    UserSignUpModel(req.body).save(function(err,data){
       console.log(err);
       console.log(data);
   });
});
// app.get("/product",function(req,res){
//     ProductModel.find({},function(err,data){
//         res.json(data);
//     });
// });
app.get("/handloom",function(req,res){
    ProductModel.find({"ProductCategory":"Handloom"},function(err,data){
        res.json(data);
    });
});
app.get("/electronic",function(req,res){
    ProductModel.find({"ProductCategory":"Electronic"},function(err,data){
        res.json(data);
    });
});
app.get("/handicraft",function(req,res){
    ProductModel.find({"ProductCategory":"Handicraft"},function(err,data){
        res.json(data);
    });
});
app.get("/antique",function(req,res){
    ProductModel.find({"ProductCategory":"Antique"},function(err,data){
        res.json(data);
    });
});
app.get("/furnitures",function(req,res){
    ProductModel.find({"ProductCategory":"Furniture"},function(err,data){
        res.json(data);
    });
});
app.get("/ayurveda",function(req,res){
    ProductModel.find({"ProductCategory":"Ayurveda"},function(err,data){
        res.json(data);
    });
});
app.get("/productdesc",function(req,res){
    ProductModel.find({},function(err,data){
        res.json(data);
    });
});
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
let transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
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
    "SellerEmail":String
    
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
//Shipping Details
let ShippingDetailsSchema = new mongoose.Schema({
    "Name":String,
    "Email":String,
    "PhoneNo":Number,
    "PinCode":Number,
    "HouseNo":String,
    "Loaclity":String,
    "Landmark":String,
    "City":String,
    "State":String,
    "ProductName":String
});




// Creating Product Database
let ProductModel = new mongoose.model("Product",ProductSchema);
app.post("/add",bp,function(req,res){
    ProductModel(req.body).save(function(err,data){
        if(err)
        {
            console.log(err);
        }
            if(data)
            {
                let mailOptions = {
                    from:"info@indiakidukaan.in",
                    to:req.body.SellerEmail,
                    subject:"Product Added",
                    text:"Your Product has been Successfully Added to our Database. Thank You"
                };
                transporter.sendMail(mailOptions,function(error,info){
                    if(error)
                    {
                        console.log(error);
                    }
                    else{
                        console.log('Email Sent'+info.response);
                    }
                });
                console.log(data);
            }
    });
});
//Creating SellerSignUp Database
let SellerSignUpModel = new mongoose.model("SellerSignUp",SellerSignupSchema);
app.post("/sellersignup",bp,function(req,res){
    console.log(req.body);
    SellerSignUpModel(req.body).save(function(err,data){
        if(err)
        {
            console.log(err);
        }
            if(data)
            {
                let mailOptions = {
                    from:"info@indiakidukaan.in",
                    to:req.body.Email,
                    subject:"Welcome",
                    text:"Thank You for registering on India ki Dukaan, Now your allowed to add your Products on our Website and Sell them to customers. For any queries contant indiakidukaan@gmail.com"
                };
                transporter.sendMail(mailOptions,function(error,info){
                    if(error)
                    {
                        console.log(error);
                    }
                    else{
                        console.log('Email Sent'+info.response);
                    }
                });
                console.log(data);
            }
   });
});
//Creating UserSignUp Database
let UserSignUpModel = new mongoose.model("UserSignUp",UserSignupSchema);
app.post("/usersignup",bp,function(req,res){
    console.log(req.body);
    UserSignUpModel(req.body).save(function(err,data){
        if(err)
        {
            console.log(err);
        }
            if(data)
            {
                let mailOptions = {
                    from:"info@indiakidukaan.in",
                    to:req.body.Email,
                    subject:"Welcome",
                    text:"Thank You for registering on India ki Dukaan, Now enjoy shopping indian products"
                };
                transporter.sendMail(mailOptions,function(error,info){
                    if(error)
                    {
                        console.log(error);
                    }
                    else{
                        console.log('Email Sent'+info.response);
                    }
                });
                console.log(data);
            }
   });
});

let ShippingDetailsModel = new mongoose.model("ShippingDetails",ShippingDetailsSchema);
app.post("/shipdetails",bp,function(req,res){
    console.log(req.body);
    ShippingDetailsModel(req.body).save(function(err,data){
        if(err)
        {
            console.log(err);
        }
            if(data)
            {
                let mailOptions = {
                    from:"info@indiakidukaan.in",
                    to:req.body.Email,
                    subject:"Order Confirmed",
                    text:"Your Product order is Successful. The product is expected to be Delivered within 2-3 Working days. Thank Your for Shopping with us."
                };
                transporter.sendMail(mailOptions,function(error,info){
                    if(error)
                    {
                        console.log(error);
                    }
                    else{
                        console.log('Email Sent'+info.response);
                    }
                });
                console.log(data);
            }
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
app.get("/prod/:name",function(req,res){
    var text = req.params.name;
    console.log(text);
    ProductModel.find({"ProductName":text},function(err,data){
        res.json(data);
    });
});
app.get("/productdesc",function(req,res){
    ProductModel.find({},function(err,data){
        res.json(data);
    });
});

//retriving userlogin data from database
app.post("/userlogin",bp,function(req,res){
    UserSignUpModel.find({"Email":req.body.Email,"Password":req.body.Password},function(err,data){
        if(data.length == 0)
        {
            console.log("invalid");
            let data = {
                "msg":"invalid"
            };
            res.json(data);
        }
        else
        {
            let data = {
                "msg":"success"

            };
            res.json(data);
        }
    });
});
// app.get("/prod.ejs/:word",function(req,res)
// {
//     var text = req.params.word;
//     console.log(text);
// });
//retriving sellerlogin data from database
app.post("/selllogin",bp,function(req,res){
    SellerSignUpModel.find({"Email":req.body.Email,"Password":req.body.Password},function(err,data){
        if(data.length == 0)
        {
            console.log("invalid");
            let data = {
                "msg":"invalid"
            };
            res.json(data);
        }
        else
        {
            let data = {
                "msg":"success"

            };
            res.json(data);
        }
    });
});
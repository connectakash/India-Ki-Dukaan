let fs=require('fs');
let http=require('http');
let express=require('express');
let bodyParser=require('body-parser');
let bp=bodyParser.json();

let mongoose=require('mongoose');
let app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.connect('mongodb://akhila:akhila123@ds141870.mlab.com:41870/practice-2',{useNewUrlParser: true});

let usersignupSchema= new mongoose.Schema({
    "username"       : String,
    "email"   : String,
   "password"       : String,
    " Phone"      :    Number,
    "address"         :    String

});

let usersignupModel=new mongoose.model("signup",usersignupSchema);

app.post("/registerUser",bp,function(req,res){
    console.log(req.body);
    usersignupModel(req.body).save();
 
})



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.post("/addName",function(req,res){
      console.log("post request success")
  })

app.listen(2000);
console.log("sever running @ 2000");

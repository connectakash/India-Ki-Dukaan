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

mongoose.connect('mongodb://admin:admin123@ds129541.mlab.com:29541/india-ki-dukaan');

let sellersignupSchema= new mongoose.Schema({
    "username"       : String,
    "email"   : String,
   "Password"       : String,
    "dateofbirth"  :   String,
    " Phone"      :    Number,
    "state"          :    String,
 
   "Address"         :    String

});

let signupModel=new mongoose.model("signup",sellersignupSchema);

app.post("/registerSeller",bp,function(req,res){
    console.log(req.body);
    signupModel(req.body).save();
 
})



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.post("/addName",function(req,res){
      console.log("post request success")
  })
/*app.get("/animals",function(req,res){
     res.writeHead(200,{'Content-Type':'application/json'})
    let myReadStream=fs.createReadStream(__dirname+"/data/animals.json","utf-8");
    myReadStream.pipe(res);
});*/
//app.get("/employee",function(req,res){
   // res.writeHead(200,{'Content-Type':'application/json'})
   // let myReadStream=fs.createReadStream(__dirname+"/data/employee.json","utf-8");
   // myReadStream.pipe(res);
//});

//let myWrite=fs.createWriteStream(__dirname+"/data/dataop.json");

/*let server=http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'application/json'})
    let myReadStream=fs.createReadStream(__dirname+"/data/data.json","utf-8");
    myReadStream.pipe(res);
});*/

app.listen(3000);
console.log("sever running @ 3000");
//myReadStream.pipe(myWrite);

//myReadStream.on('data',function(response){
 //console.log(response);
//});
var app=angular.module("myApp",[]);


app.controller("usersignupController",function($scope,$http){


$scope.addUser=function(){
let data={
"User Name":$scope.username,
"Email address":$scope.email,
"Password":$scope.password,
"Phone No":$scope.Phone,
"Address":$scope.address

}
console.log(data);
$http.post("http://localhost:3000/registerUser",data).then(function(response){
console.log(response);
}).catch(function(err){
console.log(err);
});


}

$http.get("http://localhost:3000/signup").then(function(response){
$scope.data=response.data;

});

});



app.controller("usersignupController",function($scope,$http){
 console.log("connected");
});


var app=angular.module("myApp",[]);

    app.controller('signupController',function($scope){
        $scope.Name="Amrutha.E";
        $scope.Emailaddress="amruthaedara@gmail.com";
        $scope.password="amrutha12";
        $scope.dateofbirth="23-01-1998";
        $scope.phoneno="897654321";
        $scope.State="karnataka";
        $scope.Address="bengaluru"
    
    
});
// app.config(function($routeProvider){
//    $routeProvider.when("/",{
//       templateUrl:"template/aboutus.html"
//    }).when("/animals",{
//       templateUrl:"template/animalList.html"
//    }).when("/about",{
//       templateUrl:"template/aboutus.html"
//    }).when("/addAnimal",{
//       templateUrl:"template/addAnimal.html"
//    });
// });
app.controller("signupController",function($scope,$http){
//  $scope.title="welcome";

$scope.addUser=function(){
let data={
  "username":$scope.username,
  "email":$scope.email,
  "password":$scope.password,
  "dateOfBirth":$scope.dateOfBirth,
  "phone":$scope.Phone,
  "State":$scope.State,
  "Address":$scope.Address
  
}
console.log(data);
  $http.post("http://localhost:3000/registerSeller",data).then(function(response){
    console.log(response);
  }).catch(function(err){
    console.log(err);
  });


}

$http.get("http://localhost:3000/signup").then(function(response){
    $scope.data=response.data;

  });
  
});
 

// })
//*app.controller("signupController",function($scope,$http){
   // console.log("connected");
//});

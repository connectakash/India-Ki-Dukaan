let app=angular.module("myApp", []);
app.controller("getproductdesc",function($scope,$http){
    console.log("inside controller");
    $scope.click=function(){
        let val=$scope.pr;
    }
    $http.get("http://localhost:3000/productdesc").then(function(response){
        $scope.data=response.data;
    });
});
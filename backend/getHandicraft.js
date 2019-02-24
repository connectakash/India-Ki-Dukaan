let app=angular.module("myApp", []);
app.controller("getproductgrid",function($scope,$http){
    console.log("inside controller");
    $scope.click=function(){
        let val=$scope.pr;
    }
    $http.get("http://localhost:3000/handicraft").then(function(response){
        $scope.data=response.data;
    });
});
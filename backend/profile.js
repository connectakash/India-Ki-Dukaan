let app=angular.module("myApp", []);
app.controller("profile",function($scope,$http){
    console.log("inside controller");
    $http.get("http://localhost:3000/profile").then(function(response){
        $scope.data=response.data;
        console.log($scope.data);
    });
});
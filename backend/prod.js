let app=angular.module("myApp", []);
app.controller("prod",function($scope,$http){
    console.log("inside controller");
    $scope.click=function(){
        let val=$scope.pr;
    }
    $http.get("http://localhost:3000/prod/:name").then(function(response){
        $scope.data=response.data;
    });
});
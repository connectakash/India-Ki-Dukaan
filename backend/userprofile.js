let app=angular.module("myApp", []);
app.controller("userprofile",function($scope,$http){
    console.log("inside controller");
    $http.post("http://localhost:3000/userprofile").then(function(response){
        $scope.data=response.data;
        console.log($scope.data);
        let str = JSON.stringify($scope.data);
        localStorage.setItem("name",str);
    });
});
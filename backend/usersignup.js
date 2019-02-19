let app=angular.module("myApp",[]);
app.controller('usersignup',function($scope,$http){
    console.log("inside controller");
    $scope.submit=function(){
            console.log("inside submit");
            let data={
                //"SellerName":$scope.Sellername,
                
                "UserName":$scope.username,
                "Email":$scope.email,
                "Password":$scope.password,
                "PhoneNo":$scope.phone,
                "Address":$scope.address

            };
            console.log(data);
            $http.post("http://localhost:3000/usersignup",data).then(function(response){
                console.log("data request sent");
            });
    }
});
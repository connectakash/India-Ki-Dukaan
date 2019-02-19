let app=angular.module("myApp",[]);
app.controller('sellersignup',function($scope,$http){
    console.log("inside controller");
    $scope.submit=function(){
            console.log("inside submit");
            let data={
                //"SellerName":$scope.Sellername,
                
                "UserName":$scope.username,
                "Email":$scope.email,
                "Password":$scope.password,
                "DOB":$scope.dateofbirth,
                "PhoneNo":$scope.Phone,
                "State":$scope.State,
                "Address":$scope.Address

            };
            console.log(data);
            $http.post("http://localhost:3000/sellersignup",data).then(function(response){
                console.log("data request sent");
            });
    }
});
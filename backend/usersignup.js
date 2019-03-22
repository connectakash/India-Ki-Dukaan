let app=angular.module("myApp",[]);
app.controller('usersignup',function($scope,$http){
    console.log("inside controller");
    $scope.submit=function(){
            console.log("inside submit");
            let data={
                //"SellerName":$scope.Sellername,
                "_id":$scope.email,
                "UserName":$scope.username,
                "Password":$scope.password,
                "PhoneNo":$scope.phone,
                "Address":$scope.address

            };
            console.log(data);
            $http.post("http://localhost:3000/usersignup",data).then(function(response){
                console.log("data request sent");
                if(response.data.msg == "duplicate"){
                    alert("Email ID already existing");
                }
                else if(response.data.msg == "success")
                {
                    $window.location.href="SellerLogin.html"
                }
            });
    }
});
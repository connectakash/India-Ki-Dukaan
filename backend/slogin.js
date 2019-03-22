let app = angular.module("myApp",["ngRoute"]);
app.controller('sellerlogin',function($scope,$http,$window){
    console.log("inside controller");
    $scope.submit=function(){
            if($scope.email && $scope.password)
            {
                console.log("Data Received");
                let value={
                    "_id":$scope.email,
                    "Password":$scope.password
                };
                $http.post("http://localhost:3000/selllogin",value).then(function(response){

                    if(response.data.msg == "invalid")
                    {
                        alert("Invalid Email or Password");
                        $scope.value="Email or Password Incorrect";
                    }
                    else{
                        console.log("Redirect");
                        alert("Login Successful");
                        $window.location.href="./sellerDashboard.html";
                    }

                });
            }
    }
});
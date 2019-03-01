let app = angular.module("myApp",["ngRoute"]);
app.controller('userlogin',function($scope,$http,$window){
    console.log("inside controller");
    $scope.submit=function(){
            if($scope.email && $scope.password)
            {
                console.log("Data Received");
                let value={
                    "UserEmail":$scope.email,
                    "UserPassword":$scope.password
                };
                $http.post("http://localhost:3000/login",value).then(function(response){
                    console.log(response.data.msg);
                    if(response.data.msg == "success")
                    {
                        console.log("Redirect");
                        $window.location.href="/userDashboard.html";
                    }
                    else{
                        $scope.value="Email or Password Incorrect";
                    }
                });
            }
    }
});
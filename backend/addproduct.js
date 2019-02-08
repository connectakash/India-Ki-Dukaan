let app=angular.module("myApp",[]);

app.controller('addproduct',function($scope,$http){
    console.log("inside controller");
    $scope.submit=function(){
            console.log("inside submit");
            let data={
                "SellerName":$scope.SellerName,

            };
            console.log(data);
    };
});
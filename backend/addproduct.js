let app=angular.module("myApp",[]);
app.controller('addproduct',function($scope,$http){
    console.log("inside controller");
    $scope.submit=function(){
            console.log("inside submit");
            let data={
                //"SellerName":$scope.Sellername,
                
                "ProductName":$scope.Product,
                "ProductCategory":$scope.Category,
                "AboutProduct":$scope.aboutProduct,
                "Description":$scope.Description,
                "Specification":$scope.Specification,
                "Price":$scope.Price,
                "Quantity":$scope.Quantity,
                "ImageUrl":$scope.ImageURL,
                "SellerId":1

            };
            console.log(data);
            $http.post("http://localhost:3000/add",data).then(function(response){
                console.log("data request sent");
            });
    }
});
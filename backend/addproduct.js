let app=angular.module("myApp",[]);
app.controller('addproduct',function($scope,$http){
    console.log("inside controller");
    $scope.submit=function(){
            console.log("inside submit");
            if(($scope.Product != null)&&($scope.Category != null)&&($scope.aboutProduct != null)&&($scope.Description != null)&&($scope.Specification != null)&&($scope.Price != null)&&($scope.Quantity != null)&&($scope.ImageURL != null)){
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
                "SellerEmail":$scope.Email

            };
            
            console.log(data);
            $http.post("http://localhost:3000/add",data).then(function(response){
                console.log("data request sent");
            });
            alert("Product Successfully Added");
        }
        else{
            alert("Error! Please fill the details properly");
        }
    }
});

var eShoppingApp = angular.module('myCart', []);
eShoppingApp.controller('myCartCtrl', function ($scope) {

    $scope.cartItems = [{ itemImg: 'fossil-1.jpg', itemAlt: 'Fossil Watch', itemName: 'Fossil Watch', itemPrice: 3000, itemQty: 1 },
    { itemImg: 'fossil-2.jpg', itemAlt: 'Fossil Smart Watch', itemName: 'Fossil Smart Watch', itemPrice: 4000, itemQty: 1 },
    { itemImg: 'sun-glasses.jpg', itemAlt: 'Sun Glasses', itemName: 'Sun Glasses', itemPrice: 1000, itemQty: 1}];

    $scope.cartItemsCount = $scope.cartItems.length;
    $scope.total = 0;
    $scope.dCharges = 200;

    for(var i=0; i<$scope.cartItemsCount-1;i++){
        $scope.total += $scope.cartItems[i].itemPrice;
    }

    $scope.amtPay = $scope.total + $scope.dCharges;
});
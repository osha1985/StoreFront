angular.module('MainApp').controller('CartController', function ($scope, $http, $rootScope) {
    $scope.cartItems = [];
    for (let productId in $rootScope.cart.items) {
        $http({
            url: '/product/products/' + productId,
            method: 'GET'
        }).then(function (response) {
            $scope.cartItems.push({
                "productId": response.data.productId,
                "productName": response.data.productName,
                "price": response.data.price,
                "information": response.data.information,
                "description": response.data.description,
                "manufacturer": response.data.manufacturer,
                "productImage": response.data.productImage,
                "quantity": $rootScope.cart.items[response.data.productId]
            });
        });
    }
});
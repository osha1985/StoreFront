angular.module('MainApp').controller('CartController', function ($scope, $http, $rootScope) {
    $scope.cartItems = [];
    $http({
        url: '/cart/carts/search/findByCustomerId?customerId=' + $rootScope.customer.customerId,
        method: 'GET'
    }).then(function (response) {
        let cart = response.data;
        for (let productId in cart.items) {
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
                    "quantity": cart.items[response.data.productId]
                });
            });
        }
    });
});

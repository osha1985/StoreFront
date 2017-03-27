angular.module('MainApp').controller('CartController', function ($http, $log, cart) {
    let vm = this;
    vm.cartItems = [];
    for (let productId in cart.items) {
        $http({
            url: '/product/products/' + productId,
            method: 'GET'
        }).then(function (response) {
            vm.cartItems.push({
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
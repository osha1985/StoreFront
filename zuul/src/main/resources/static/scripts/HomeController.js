angular.module("MainApp").controller('HomeController', function ($scope, $http, $log) {
    $http({
        url: '/product/products',
        method: 'GET'
    }).then(function (response) {
        $scope.products = response.data['_embedded'].products;
        $log.info(response.data);
    }, function () {
    });
    $http({
        url: '/cart/carts/',
        method: 'GET'
    }).then(function (response) {
        $scope.carts = response.data['_embedded'].carts;
    });

    if($scope.carts.length == 0) {
        $http({
            url: 'cart/carts/',
            method:
        })
    }
});
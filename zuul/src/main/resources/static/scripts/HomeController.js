angular.module("MainApp").controller('HomeController', function ($scope, $http) {
    $http({
        url: '/product/products',
        method: 'GET'
    }).then(function (response) {
        $scope.products = response.data['_embedded'].products;
    }, function () {
    });
});
angular.module("MainApp").controller('HomeController', function ($scope, $http, $log) {
    $http({
        url: '/product/products',
        method: 'GET'
    }).then(function (response) {
        $scope.products = response.data['_embedded'].products;
        $log.info(response.data);
    }, function () {
    });
});
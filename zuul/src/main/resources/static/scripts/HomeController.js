angular.module("MainApp").controller('HomeController', function ($scope, $http, $log, $rootScope) {
    alert($rootScope.loggedIn);
    $http({
        url: '/product/products',
        method: 'GET'
    }).then(function (response) {
        $scope.products = response.data['_embedded'].products;
        $log.info(response.data);
    }, function () {
    });
});
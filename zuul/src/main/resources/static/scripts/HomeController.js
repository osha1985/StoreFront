angular.module("MainApp").controller('HomeController', function ($scope, $http) {
    let vm = this;
    $http({
        url: '/product/products',
        method: 'GET'
    }).then(function (response) {
        vm.products = response.data['_embedded'].products;
    }, function () {
    });
});
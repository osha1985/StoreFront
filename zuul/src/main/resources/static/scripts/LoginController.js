angular.module("MainApp").controller('LoginController', function ($scope, $rootScope, $http) {
    $scope.login = function () {
        $http({
            url: "/customer/customers/search/findByUsername?username=" + $scope.username,
            method: 'GET'
        }).then(function (response) {
            if (response.data.password === $scope.password) {
                $rootScope.loggedIn = true;
                $rootScope.customer = response.data;
                $http({
                    url: '/cart/carts/search/findByCustomerId?customerId=' + response.data.customerId,
                    method: 'GET'
                }).then(function (response) {
                    $rootScope.cart = response.data;
                });
            } else {
                alert("The user could not be found");
            }
        }, function () {
        });
    };
});
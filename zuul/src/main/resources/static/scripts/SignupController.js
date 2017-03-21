angular.module('MainApp').controller('SignupController', function ($scope, $http) {
    $scope.submit = function () {
        $http({
            url: '/customer/customers',
            method: 'POST',
            data: {
                'firstName': $scope.firstName,
                'lastName': $scope.lastName,
                'username': $scope.username,
                'password': $scope.password
            }
        }).then(function (response) {
            $http({
                url: '/cart/carts',
                method: 'POST',
                data: {
                    'customerId': response.data.customerId,
                    'items': {}
                }
            });
        }, function () {
        });
    };
});
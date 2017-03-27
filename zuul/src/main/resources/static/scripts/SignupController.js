angular.module('MainApp').controller('SignupController', function ($scope, $http) {
    let vm = this;
    vm.submit = function () {
        $http({
            url: '/customer/customers',
            method: 'POST',
            data: {
                'firstName': vm.firstName,
                'lastName': vm.lastName,
                'username': vm.username,
                'password': vm.password
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
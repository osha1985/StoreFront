angular.module('MainApp').controller('SignupController', function ($scope) {
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
        }).then(function () {
            alert("Success");
        }, function () {
            alert("Failure");
        });
    };
});
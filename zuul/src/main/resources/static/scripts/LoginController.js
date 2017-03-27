angular.module("MainApp").controller('LoginController', function (customer, $http, cart, loggedIn) {
    let vm = this;
    vm.login = function () {
        $http({
            url: "/customer/customers/search/findByUsername?username=" + vm.username,
            method: 'GET'
        }).then(function (response) {
            if (response.data.password === vm.password) {
                loggedIn = true;
                customer = response.data;
                $http({
                    url: '/cart/carts/search/findByCustomerId?customerId=' + response.data.customerId,
                    method: 'GET'
                }).then(function (response) {
                    cart.cartId = response.data.cartId;
                    cart.customerId = response.data.customerId;
                    cart.items = response.data.items;
                });
            } else {
                alert("The user could not be found");
            }
        }, function () {
        });
    };
});
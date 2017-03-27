angular.module('MainApp').value('cart',
    {
        cartId: 0,
        customerId: 0,
        items: {}
    }
);
angular.module('MainApp').value('loggedIn', false);
angular.module('MainApp').value('customer', {
    customerId: "",
    firstName: "",
    lastName: "",
    username: "",
    password: ""
});
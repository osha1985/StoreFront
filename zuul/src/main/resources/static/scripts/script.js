angular.module("MainApp", ['ngRoute']);

angular.module("MainApp").config(function ($logProvider) {
    $logProvider.debugEnabled(true);
});
angular.module("MainApp").controller("MainController", function (loggedIn, customer) {
    let vm = this;
    vm.loggedIn = loggedIn;
    vm.firstName = customer.firstName;
    vm.lastName = customer.lastName;
}).config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when('/', {
        templateUrl: '../partials/home.html',
        controller: 'HomeController',
        controllerAs: 'homeController'
    }).when('/Cart', {
        templateUrl: "../partials/cart.html",
        controller: 'CartController',
        controllerAs: 'cartController'
    }).when('/Billing', {
        templateUrl: '../partials/billing.html',
        controller: 'BillingController',
        controllerAs: 'billingController'
    }).when('/addProduct', {
        templateUrl: '../partials/addProduct.html',
        controller: 'AddProductController',
        controllerAs: 'addProductController'
    }).when('/Overview', {
        templateUrl: '../partials/overview.html',
        controller: 'OverviewController',
        controllerAs: 'overviewController'
    }).when('/reviews', {
        templateUrl: '../partials/reviews.html',
        controller: 'ReviewsController',
        controllerAs: 'reviewsController'
    }).when('/product/:param', {
        templateUrl: '../partials/product.html',
        controller: 'ProductController',
        controllerAs: 'productController'
    }).when('/login', {
        templateUrl: '../partials/login.html',
        controller: 'LoginController',
        controllerAs: 'loginController'
    }).when('/signup', {
        templateUrl: '../partials/signup.html',
        controller: 'SignupController',
        controllerAs: 'signupController'
    });
});
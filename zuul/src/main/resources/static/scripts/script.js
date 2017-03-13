angular.module("MainApp", ['ngRoute']);
angular.module("MainApp").config(function ($logProvider) {
    $logProvider.debugEnabled(true);
});

angular.module("MainApp").controller("MainController", function ($scope, $rootScope) {
    $rootScope.loggedIn = false;
}).config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when('/', {
        templateUrl: '../partials/home.html',
        controller: 'HomeController'
    }).when('/Cart', {
        templateUrl: "../partials/cart.html",
        controller: 'CartController'
    }).when('/Billing', {
        templateUrl: '../partials/billing.html',
        controller: 'BillingController'
    }).when('/addProduct', {
        templateUrl: '../partials/addProduct.html',
        controller: 'AddProductController'
    }).when('/Overview', {
        templateUrl: '../partials/overview.html',
        controller: 'OverviewController'
    }).when('/reviews', {
        templateUrl: '../partials/reviews.html',
        controller: 'ReviewsController'
    }).when('/product/:param', {
        templateUrl: '../partials/product.html',
        controller: 'ProductController'
    }).when('/login', {
        templateUrl: '../partials/login.html',
        controller: 'LoginController'
    }).when('/signup', {
        templateUrl: '../partials/signup.html',
        controller: 'SignupController'
    });
});
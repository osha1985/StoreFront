angular.module("MainApp").controller('ProductController', function ($scope, $rootScope, $http, $routeParams) {
    $http({
        url: '/product/products/' + $routeParams['param'],
        method: 'GET'
    }).then(function (response) {
        $scope.product = response.data;
    });
    $scope.selectedTab = "description";
    $scope.goToDescription = function () {
        angular.element(".productTab").removeClass("active");
        angular.element(".tab-pane").removeClass("active");
        angular.element("#descriptionTab").addClass("active");
        angular.element("#description").addClass("active");

    };
    $scope.goToReviews = function () {
        angular.element(".productTab").removeClass("active");
        angular.element(".tab-pane").removeClass("active");
        angular.element("#reviewsTab").addClass("active");
        angular.element("#reviews").addClass("active");
    };

    $scope.goToAddReview = function () {
        angular.element(".productTab").removeClass("active");
        angular.element(".tab-pane").removeClass("active");
        angular.element("#addReviewTab").addClass("active");
        angular.element("#addReview").addClass("active");
    };
    $scope.submitComment = function (product) {
        product.reviews.push(angular.element('#comment').val());
        $http({
            url: '/product/products/' + $routeParams['param'],
            method: 'PUT',
            data: product
        }).then(function () {
            alert("The review was submitted successfully");
        }, function () {
            alert("The review failed to submit");
        });
    };
    $scope.addToCart = function (product) {
        var selectedQuantity = angular.element('#quantityInput').val();
        $http({
            url: '/cart/carts',
            method: 'GET'
        }, function(response){
            var carts = response.data['_embedded']['carts'];
        }, function(response) {

        });

        $http({
            url: '/shopping/cart/addCartItem',
            method: 'POST',
            data: {

            }
        });
    };
});
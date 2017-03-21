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
    $scope.addToCart = function () {
        if ($rootScope.cart.items[$scope.product.productId]) {
            $rootScope.cart.items[$scope.product.productId] += $scope.quantity;
        } else {
            $rootScope.cart.items[$scope.product.productId] = $scope.quantity;
        }
        $http({
            url: '/cart/carts/' + $rootScope.cart.cartId,
            method: 'PUT',
            data: $rootScope.cart
        }, function () {
            alert("Success");
        }, function () {
            alert("Failure");
        });
    };
});
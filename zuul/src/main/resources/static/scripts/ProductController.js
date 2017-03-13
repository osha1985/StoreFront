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
        $http({
            url: '/cart/carts',
            method: 'POST',
            data: {
                product: {
                    "productName": $scope.product.productName,
                    "price": $scope.product.price,
                    "information": $scope.product.information,
                    "description": $scope.product.description,
                    "manufacturer": $scope.product.manufacturer,
                    "productImage": $scope.product.productImage,
                    "availableQuantity": $scope.product.availableQuantity,
                    "reviews": $scope.product.reviews
                },
                quantity: $scope.quantity
            }
        }, function () {
            alert("Success");
        }, function () {
            alert("Failure");
        });
    };
});
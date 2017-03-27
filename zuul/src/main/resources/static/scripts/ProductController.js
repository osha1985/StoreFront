angular.module("MainApp").controller('ProductController', function ($http, $routeParams, cart) {
    let vm = this;
    $http({
        url: '/product/products/' + $routeParams['param'],
        method: 'GET'
    }).then(function (response) {
        vm.product = response.data;
    });
    vm.goToDescription = function () {
        angular.element(".productTab").removeClass("active");
        angular.element(".tab-pane").removeClass("active");
        angular.element("#descriptionTab").addClass("active");
        angular.element("#description").addClass("active");

    };
    vm.goToReviews = function () {
        angular.element(".productTab").removeClass("active");
        angular.element(".tab-pane").removeClass("active");
        angular.element("#reviewsTab").addClass("active");
        angular.element("#reviews").addClass("active");
    };

    vm.goToAddReview = function () {
        angular.element(".productTab").removeClass("active");
        angular.element(".tab-pane").removeClass("active");
        angular.element("#addReviewTab").addClass("active");
        angular.element("#addReview").addClass("active");
    };
    vm.submitComment = function () {
        vm.product.reviews.push(angular.element('#comment').val());
        $http({
            url: '/product/products/' + $routeParams['param'],
            method: 'PUT',
            data: vm.product
        }).then(function () {
            alert("The review was submitted successfully");
        }, function () {
            alert("The review failed to submit");
        });
    };
    vm.addToCart = function () {
        if (cart.items[vm.product.productId]) {
            cart.items[vm.product.productId] += vm.quantity;
        } else {
            cart.items[vm.product.productId] = vm.quantity;
        }
        $http({
            url: '/cart/carts/' + cart.cartId,
            method: 'PUT',
            data: cart
        }, function () {
        }, function () {
        });
    };
});
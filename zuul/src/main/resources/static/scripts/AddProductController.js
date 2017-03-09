angular.module("MainApp").controller('AddProductController', function ($scope, $http) {
    var productImage;
    document.getElementById("productImage").addEventListener("change", function () {
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        reader.addEventListener("load", function () {
            productImage = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    });
    $scope.submitProductData = function () {
        $http({
            url: '/product/products',
            method: 'POST',
            data: {
                "productName": $scope.productName,
                "price": $scope.price,
                "information": $scope.information,
                "description": $scope.description,
                "manufacturer": $scope.manufacturer,
                "productImage": productImage,
                "availableQuantity": $scope.availableQuantity,
                "reviews": []
            }
        }).then(function () {
            alert("Success");
        }, function () {
            alert("Failure");
        });
    };

    $scope.getImage = function () {
        $http({
            url: '/product/products',
            method: 'GET'
        }).then(function (response) {
            $scope.products = response.data;
            alert("Success");
        }, function () {
            alert("Failure");
        });
    }
});
var controllerModule = angular.module("appModule", ["factoryModule"]);

controllerModule.controller("customerController", ["$scope", "customerFactory", function($scope, factory) {
    factory.get(function(list) {
        $scope.customers = list;    
    });
    $scope.addCustomer = function() {
        factory.add($scope.customer);
        
        $scope.customer = {};
    }
}]);
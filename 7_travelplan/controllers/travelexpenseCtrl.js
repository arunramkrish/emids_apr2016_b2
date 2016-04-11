var page3Module = angular.module("travelExpense", ["ngRoute"]);
page3Module.config(["$routeProvider", function(r) {
    r.when('/:title/page3', {
        templateUrl: "partials/page3.html",
        controller:"Page3Controller"
    });
}]);
page3Module.controller("Page3Controller", ["$scope", "$routeParams", function($scope, $routeParams) {
    $scope.pageTitle = $routeParams.title;
}]);

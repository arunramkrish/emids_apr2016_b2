var page1Module = angular.module("page1", ["ngRoute"]);
page1Module.config(["$routeProvider", function(r) {
    r.when('/page1', {
        templateUrl: "partials/page1.html",
        controller:"Page1Controller"
    });
    r.when('/page1/:title', {
        templateUrl: "partials/page1.html",
        controller:"Page1Controller"
    });
}]);
page1Module.controller("Page1Controller", ["$scope", "$routeParams", function($scope, $routeParams) {
    $scope.pageTitle = $routeParams.title;
}]);

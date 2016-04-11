var page2Module = angular.module("page2", ["ngRoute"]);
page2Module.config(["$routeProvider", function(r) {
    r.when('/page2', {
        templateUrl: "partials/page2.html",
        controller:"Page2Controller"
    });
}]);
page2Module.controller("Page2Controller", ["$scope", "$routeParams", function($scope, $routeParams) {
    $scope.pageTitle = $routeParams.title;
}]);

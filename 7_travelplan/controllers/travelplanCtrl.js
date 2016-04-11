var travelPlanModule = angular.module("travelPlan",, ["ngRoute"]);

travelPlanModule.config(["$routeProvider", function(r) {
    r.when('/', {
        templateUrl: "partials/travelPlan.html",
        controller:"TravelPlanController"
    });
    r.when('/travelPlans', {
        templateUrl: "partials/travelPlan.html",
        controller:"TravelPlanController"
    });
}]);
page1Module.controller("TravelPlanController", ["$scope", "$rootScope", "$routeParams", function($scope, $routeParams) {
    $scope.showTravelForm = false;
    $rootScope.travelPlans = [];
    $scope.travel = {};
    
    $scope.addTravelPlan = function() {
        $scope.showTravelForm = true;
    };
    
    $scope.saveTravelPlan = function() {
      $scope.travelPlans.push($scope.travel);
        $scope.travel = {};
    };
    
}]);

"use strict";

// Declare app level module which depends on views, and components
angular.module("mitpuApp", [
  "ngRoute",
  "mitpuApp.playlist"
]).
config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("!");

  $routeProvider.otherwise({redirectTo: "/playlist"});
}]);

angular.module("mitpuApp.playlist", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/playlist", {
    templateUrl: "playlist.html",
    controller: "mainCtrl"
  });
}])

.controller("mainCtrl", function($scope) {

	$scope.guests = [
		{
			id: 1,
			episode: "Дугаар-1",
			name: "Ч Баттөгс",
			desc: "Менежер"
		}];
});
"use strict";

// Declare app level module which depends on views, and components
angular.module("mitpuApp", [
  "ngRoute",
  "mitpuApp.about",
  "mitpuApp.playlist"
]).
config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("!");

  $routeProvider.otherwise({redirectTo: "/about"});
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
			title: "Salesforce",
			desc: "Миний баримталдаг менежерийн 3 зарчим бол Хүлээлт Итгэлцэл Фийдбак. Менежер хүн тухайн ажилчныхаа өмнө хүлээлгэсэн хүлээлтийг тодорхой ойлгомжтой тавьдаг байх нь чухал ..."
		}];
});

angular.module("mitpuApp.about", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/about", {
    templateUrl: "about.html"
  });
}])
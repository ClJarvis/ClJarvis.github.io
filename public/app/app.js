var app = angular.module('myapp', ['ngRoute', 'myapp.controllers']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/index', controller: 'IndexController'})
		.when('/about', {templateUrl: 'partials/about', controller:'AboutController'})
		.otherwise({redirectTo:'/'})
}])

.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

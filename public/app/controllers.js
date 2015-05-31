var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = "Welcome";
}]);

controllers.controller('AboutController', ['$scope', function($scope){
	$scope.message = "Who Am I?";
}]);

controllers.controller('PortfolioController', ['$scope', function($scope){
	$scope.message = "My Portfolio";
}]);

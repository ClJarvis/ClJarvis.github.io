var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = "Portfolio Page";
}]);

controllers.controller('AboutController', ['$scope', function($scope){
	$scope.message = "Who Am I?";
}]);

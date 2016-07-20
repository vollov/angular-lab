'use strict';

angular.module('auth.controllers', [ 'auth.services', 'ui.router'])
.controller('NavCtrl', ['$scope', 'authService',
function($scope, authService) {
	$scope.getToken = authService.getToken;
}]);
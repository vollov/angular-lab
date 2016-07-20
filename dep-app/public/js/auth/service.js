'use strict';

var url = '/api/v1.0/';

angular.module('auth.services', [])
.factory('authService', [ function() {
	var auth = {};

	auth.saveToken = function(token) {
		console.log('call auth.saveToken(), token = ' + token);
	};

	auth.getToken = function() {
		console.log('call auth.getToken()');
	};
	
	return auth;
} ])
.factory('testInterceptor', ['authService', function testInterceptor(authService) {
	
	var interceptor = {};
	
	interceptor.request = function(config) {
		console.log('testInterceptor request');
		authService.getToken();
		return config;
	};
	
	interceptor.response = function(res) {
		console.log('testInterceptor response res=%j', res);
		authService.saveToken('aabbcc');
		return res;
	};
	
	return interceptor;	
}]);
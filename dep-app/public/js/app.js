angular.module('app', [ 'ui.router', 'auth' ])
.constant('API', 'http://localhost:8000')
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
	$stateProvider.state('home', {
		url : '/home',
		templateUrl : '/views/home.html'
		//controller : 'MainCtrl'
	}).state('about', {
		url : '/about',
		templateUrl : '/views/about.html'
	});
	
	$httpProvider.interceptors.push('testInterceptor');
	$urlRouterProvider.otherwise('home');
	
	
}])
.run(function(API, authService) {
	authService.saveToken('AABBCC');
	console.log('app running with API='+API);
});

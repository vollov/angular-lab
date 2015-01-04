'use strict';

angular.module('labApps',['ngRoute','todoModule',
                          'commonModule',
                          'sportsControllers',
                          'sportsFilters',
                          'sportsServices',
                          'sportsDirectives']).config(function($routeProvider){
	$routeProvider.when('/sports', {
		//controller : 'SettingCtrl',
		templateUrl : '/views/sports/store.html'
	}).when('/todo', {
		controller : 'ToDoCtrl',
		templateUrl : '/views/todo/todo.html'
	}).when('/checkout', {
		templateUrl : '/views/sports/checkout.html'
	})
});

//angular.module('appModule', [ 'ngRoute', 'appControllers' ])
//	.config(function($routeProvider) {
//		$routeProvider.when('/home', {
//			controller : 'SettingCtrl',
//			templateUrl : '/views/public/setting.html'
//		}).when('/postcodes', {
//			controller : 'PostCodeCtrl',
//			templateUrl : '/views/postcode/list.html'
//		}).when('/postcode/:id', {
//			controller : 'PostCodeEditCtrl',
//			templateUrl : '/views/postcode/detail.html'
//		}).otherwise({
//			redirectTo : '/home'
//		});
//	});

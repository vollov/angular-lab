'use strict';

angular.module('labApps',['ngRoute','ngResource','ui.router',
                          'commonModule',
                          'labUI']).config(function($stateProvider,
    $urlRouterProvider,$locationProvider){

	  $stateProvider.state('state1', {
			url : '/state1',
			controller : 'Ctrl1',
			templateUrl : '/views/view1.html'
		})
		.state('state1.list', {
			url : "/list",
			templateUrl : "views/state1/list.html",
			controller : function($scope) {
				$scope.items = [ "A", "List", "Of", "Items" ];
			}
		}).state('state2', {
			url : '/state2/:firstname/:lastname',
			controller : 'Ctrl2',
			resolve : {
				names : function() {
					return [ 'Misko', 'Vojta', 'Brad' ];
				}
			},
			templateUrl : '/views/view2.html'
		})
		.state('state2.list', {
			url : "/list",
			templateUrl : "views/state2/list.html",
			controller : function($scope) {
				$scope.things = [ "A", "Set", "Of", "Things" ];
			}
		});
		$urlRouterProvider.otherwise('/state1');
		$locationProvider.html5Mode(false);
});
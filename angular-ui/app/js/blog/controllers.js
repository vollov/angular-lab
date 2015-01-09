angular.module('labUI',[])
.controller('Ctrl1',['$scope', '$state', function($scope, $state) {

	$scope.loadView2 = function() {
		// the following activates state view2
		$state.go('state2', {
			firstname: $scope.firstname,
			lastname: $scope.lastname
		});
	}
}])
.controller('Ctrl2',['$scope', '$stateParams', 'names',  function($scope, $stateParams, names){
		$scope.firstname=$stateParams.firstname;
		$scope.lastname=$stateParams.lastname;
		$scope.names=names;
}]);



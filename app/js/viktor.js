angular.module('aah.viktor', ['ionic'])
.controller('AuthorStoriesCtrl', function($scope, $http) {
	$scope.storyline = {stations: []};
	
  $scope.addStation = function(){
		$scope.storyline.stations.push({});
	};
});
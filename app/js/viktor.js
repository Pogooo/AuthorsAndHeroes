angular.module('aah.viktor', ['ionic'])
.controller('AuthorStoriesCtrl', function($scope, $http, $ionicModal) {
	$scope.storyline = {stations: []};
	
  $scope.addStation = function(){
		$scope.storyline.stations.push({});
	};
	
	$scope.deleteStation = function(index){
		$scope.storyline.stations.splice(index, 1);
	};
})
.controller('StorylineCtrl', function($scope, $http) {
});
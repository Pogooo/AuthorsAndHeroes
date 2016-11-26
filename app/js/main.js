angular.module('aah', ['ionic'])

.config(function($stateProvider) {
  //
  // For any unmatched url, redirect to /state1

  //
  // Now set up the states
  $stateProvider

// Main page state
  .state('main', {
    url: "/main",
		templateUrl: "app/main.html",
  })
	
	//Stories of the heroes
	.state('heroesstories', {
    url: "/heroesstories",
		templateUrl: "app/html/heroesstories.html",
  })
	
	//Stories for the authors
	.state('authorstories', {
    url: "/authorstories",
		templateUrl: "app/html/authorstories.html",
  })
	
	//user's profile page
	.state('usersprofile', {
    url: "/usersprofile",
		templateUrl: "app/html/usersprofile.html",
  })
	
	//user's setting page
	.state('settings', {
    url: "/settings",
		templateUrl: "app/html/settings.html",
  })
	
	//Story details page
	.state('storydetails', {
    url: "/storydetails",
		templateUrl: "app/html/storydetails.html",
  })
})

.controller('MainCtrller', function($scope) {
  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];
})
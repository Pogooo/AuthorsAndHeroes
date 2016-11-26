angular.module('aah', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider

// Main page state
  .state('main', {
    url: "/main",
		views: {
      '': {
        templateUrl: "app/html/main.html",
        controller: 'StartCtrl'
      }
    }
  })
	
	//Stories of the heroes
	.state('herostories', {
    url: "/herostories",
		templateUrl: "app/html/heroesstories.html",
  })
	
	//Stories for the authors
	.state('authorstories', {
    url: "/authorstories",
		views: {
      '': {
        templateUrl: "app/html/authorstories.html",
        controller: 'AuthorStoriesCtrl'
      }
    }
  })
	
	//user's profile page
	.state('usersprofile', {
    url: "/usersprofile",
		views: {
      '': {
        templateUrl: "app/html/usersprofile.html",
        controller: 'UserProfileCtrl'
      }
		}
  })
	
	//user's setting page
	.state('settings', {
    url: "/settings",
		views: {
			'': {
				templateUrl: "app/html/settings.html",
				controller: 'SettingCtrl'
			}
		}
  })
	
	//Story details page
	.state('storydetails', {
    url: "/storydetails",
		views: {
			'': {
				templateUrl: "app/html/storydetails.html",
				controller: 'StoryDetailsCtrl'
			}
		}
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

.controller('AuthorStoriesCtrl', function($scope) {
  $scope.valami = "valanmiii";
})

.controller('StartCtrl', function($scope) {
  $scope.dunno = "I don't know";
})

.controller('UserProfileCtrl', function($scope) {
  $scope.dunno = "I don't know";
})

.controller('SettingCtrl', function($scope) {
  $scope.dunno = "I don't know";
})

.controller('StoryDetailsCtrl', function($scope) {
  $scope.dunno = "I don't know";
})
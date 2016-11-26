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
		views: {
			'': {
				templateUrl: "app/html/heroesstories.html",
				controller: 'HeroStoriesCtrl'
			}
    }
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

.controller('StoryDetailsCtrl', function($scope, $http, $stateParams) {
  $scope.story = {
		NAME: "Storyname",
		IMG_SRC: "valami/valami.jpg",
		DESCRIPTION: "dfssadgfdsgfdsg",
		STORY_NUMBER: 5,
		QUESTION: "Why did Spidey cross the road?",
		ANSWER: "To get the another router",
		STORYLINE_NAME: "Storysdfaasd sdf sd line",
		STORYLINE_ID: 21345325 //for the url
	};
})

.controller('HeroStoriesCtrl', function($scope) {
	//sample data
  $scope.unfinishedStories = [
		{
			NAME: 'valami',
			DESCRIPTION: "dsfdsafdsagfdsa dsf dsa dst ",
			IMG_SRC: '/valami/valami.jpg',
			STORY_NUMBER: 5,
			STORYLINE_NAME: "Valami storyline",
			STORYLINE_ID: 12412
		},
				{
			NAME: 'valami',
			DESCRIPTION: "dsfdsafdsagfdsa dsf dsa dst ",
			IMG_SRC: '/valami/valami.jpg',
			STORY_NUMBER: 5,
			STORYLINE_NAME: "Valami storyline",
			STORYLINE_ID: 12412
		},
				{
			NAME: 'valami',
			DESCRIPTION: "dsfdsafdsagfdsa dsf dsa dst ",
			IMG_SRC: '/valami/valami.jpg',
			STORY_NUMBER: 5,
			STORYLINE_NAME: "Valami storyline",
			STORYLINE_ID: 12412
		},
				{
			NAME: 'valami',
			DESCRIPTION: "dsfdsafdsagfdsa dsf dsa dst ",
			IMG_SRC: '/valami/valami.jpg',
			STORY_NUMBER: 5,
			STORYLINE_NAME: "Valami storyline",
			STORYLINE_ID: 12412
		}
	];
	
	$scope.nearbyStories = [
		{
			NAME: 'valami',
			DESCRIPTION: "dsfdsafdsagfdsa dsf dsa dst ",
			IMG_SRC: '/valami/valami.jpg',
			STORY_NUMBER: 5,
			STORYLINE_NAME: "Valami storyline",
			STORYLINE_ID: 12412
		},
		{
			NAME: 'valami',
			DESCRIPTION: "dsfdsafdsagfdsa dsf dsa dst ",
			IMG_SRC: '/valami/valami.jpg',
			STORY_NUMBER: 5,
			STORYLINE_NAME: "Valami storyline",
			STORYLINE_ID: 12412
		},
				{
			NAME: 'valami',
			DESCRIPTION: "dsfdsafdsagfdsa dsf dsa dst ",
			IMG_SRC: '/valami/valami.jpg',
			STORY_NUMBER: 5,
			STORYLINE_NAME: "Valami storyline",
			STORYLINE_ID: 12412
		},
				{
			NAME: 'valami',
			DESCRIPTION: "dsfdsafdsagfdsa dsf dsa dst ",
			IMG_SRC: '/valami/valami.jpg',
			STORY_NUMBER: 5,
			STORYLINE_NAME: "Valami storyline",
			STORYLINE_ID: 12412
		}
	];
})
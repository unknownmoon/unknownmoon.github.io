/**
 * Namespacing presentation application
 */
window.presApp = {}

presApp.mainViewObj = document.getElementById('main-view');

presApp.hideMainView = function() {
	// console.log('in hideMainView');
	presApp.mainViewObj.style.opacity = 0;
}

presApp.showMainView = function() {
	// console.log('in showMainView');
	presApp.mainViewObj.style.opacity = 1;
}

/**
 * Set up angular module
 */
var mainApp = angular.module(
	'presentation-app0',
	['bootstrap', 'bootstrapPrettify', 'ngCookies', 'ngResource']
);

mainApp

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	// console.log('in config');

	$routeProvider.when('/landing', {
		templateUrl: 'landing.html',
		controller: 'LandingCtrl'
	}).when('/slides', {
		templateUrl: 'slides.html',
		controller: 'SlidesCtrl'
	}).when('/slides/:slideId', {
		templateUrl: 'slides.html',
		controller: 'SlidesCtrl'
	}).otherwise({
		redirectTo: 'landing'
	});

	// $locationProvider.html5Mode(true);
}])

.run(['$templateCache', function($templateCache){
	// console.log('in run');

	$templateCache.put('contentsTpl',
		'<ol class="contents-level">' +
			'<li class="contents-level" ng-repeat="elem in contents">' +
				'<div class="contents-title" ng-class="{\'contents-link\': elem.slideId>=0}" ng-bind="elem.title" ng-click="elem.slideId >= 0 && switchView(\'slides/\'+elem.slideId)">'+
				'</div>'+
				'<div class="inner-wrapper" ng-include="\'contentsTpl\'" ng-init="contents=elem.subs">'+
				'</div>'+
			'</li>'+
		'</ol>'
	);
}])

.factory('SlideMetaData', ['$resource', function($resource){
	return $resource('slides/:slideId/metaData.json', {slideId:'0'});
}])

.controller('MainCtrl', ['$rootScope', '$scope', '$location', '$timeout', '$resource', function($rootScope, $scope, $location, $timeout, $resource){
	// console.log('in MainCtrl');

	$scope.metaInfo = {
		contents: []
	}

	var SlideRs = $resource('slides/contents.json', {}, {
		getContents: {
			method: 'GET',
			params: {}
		}
	});

	SlideRs.getContents(function(rsp){
		// success callback
		// console.log(rsp);
		$scope.metaInfo = rsp;
		rsp = null;
	},function(rsp){
		// fail callback
		console.log(rsp);
	});

	$scope.switchView = function(url){
		presApp.hideMainView();
		$timeout(function() {
			presApp.showMainView();
			$location.path(url || '');
		}, 250);
	}
}])

.controller('LandingCtrl', ['$scope', '$location', function($scope, $location){
	// console.log('in LandingCtrl');
}])

.controller('SlidesCtrl', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){
	// console.log('in SlidesCtrl');
	// console.log('%% $routeParams');
	// console.log($routeParams);

	if ($routeParams.slideId != undefined){
		$scope.currentSlideId = parseInt($routeParams.slideId);
		// has slide id
		$scope.slideTpl = 'slides/' + $routeParams.slideId + '/template.html';
	} else {
		$scope.currentSlideId = undefined;
		// intro page
		// $scope.slideTpl = '';

		// back to home page
		$scope.switchView();
	}

	$scope.slideTotal = $scope.metaInfo.slideTotal;

	$scope.nextSlide = function() {
		// need to verify if the change is valid
		var nextSlideId = $scope.currentSlideId+1;

		$scope.switchView('slides/' + nextSlideId);
	}

	$scope.prevSlide = function(){
		var prevSlideId = $scope.currentSlideId-1;

		if (prevSlideId<0) {
			$scope.switchView(); // back to home
		} else {
			$scope.switchView('slides/' + prevSlideId);
		}
	}

}])

// angular.bootstrap(document, ['presentation-app0']);

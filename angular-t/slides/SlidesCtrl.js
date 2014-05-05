angular.module('presentation-app0')

.controller('Slide0Ctrl', ['$scope', 'SlideMetaData', function($scope, SlideMetaData){
	// console.log('in Slide0Ctrl');

	var slide = SlideMetaData.get({slideId:0}, function() {
		$scope.slide = slide;
	});
}])

// // test controller for slide 0
// .controller('expres0Ctrl', ['$scope', function($scope){
// 	// $scope.testClass0 = "test-class-0";
// 	// $scope.classPrefix = "test-class-";
// }])

.controller('Slide1Ctrl', ['$scope', 'SlideMetaData', function($scope, SlideMetaData){
	// console.log('in Slide1Ctrl');

	var slide = SlideMetaData.get({slideId:1}, function() {
		$scope.slide = slide;
	});

}])

// // test controller for slide 1
// .controller('expres1Ctrl', ['$scope', function($scope){
// 	// $scope.testClass0 = "test-class-1";
// 	// $scope.classPrefix = "test-class-";
// }])

.controller('Slide2Ctrl', ['$scope', 'SlideMetaData', function($scope, SlideMetaData){
	// console.log('in Slide2Ctrl');

	var slide = SlideMetaData.get({slideId:2}, function() {
		$scope.slide = slide;
	});

}])

.controller('Slide3Ctrl', ['$scope', 'SlideMetaData', function($scope, SlideMetaData){
	// console.log('in Slide3Ctrl');

	var slide = SlideMetaData.get({slideId:3}, function() {
		$scope.slide = slide;
	});

}])

.controller('Slide4Ctrl', ['$scope', 'SlideMetaData', function($scope, SlideMetaData){
	// console.log('in Slide4Ctrl');

	var slide = SlideMetaData.get({slideId:4}, function() {
		$scope.slide = slide;
	});

}])

.controller('Slide5Ctrl', ['$scope', 'SlideMetaData', function($scope, SlideMetaData){
	console.log('in Slide5Ctrl');

	var slide = SlideMetaData.get({slideId:5}, function() {
		$scope.slide = slide;
	});

	// for writing up
	// $scope.displayP2 = true;
	// $scope.displayHTML2 = true;
	// $scope.displayJS2 = true;
	// $scope.displayD2 = true;

}])

;

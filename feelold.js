angular.module('feel-oldifier',[]). 
	config(function($routeProvider) {
		$routeProvider.
			when('/', { controller: FeelOldifier, templateUrl: 'include.html' });
	});

	
function FeelOldifier($scope) {
	// TODO
}

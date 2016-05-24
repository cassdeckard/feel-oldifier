NormalAdolescentYearStatement = 'That means you were in your mid-teens around {{ userAdolescentYear }}.';
YoungsterAdolescentYearStatement = 'Look, no offense, but you\'re pretty young. This app is designed to make old people feel old and you just simply aren\'t old enough. So get off my lawn.';

angular.module('feel-oldifier',[]). 
	config(function($routeProvider) {
		$routeProvider.
			when('/', {
                controller: FeelOldifier,
                templateUrl: 'include.html'
            });
	}).
    directive('adolescentYearStatement', AdolescentYearStatement);

	
function FeelOldifier($scope, $compile) {
    function calculateAdolescentYearFromAge(age) {
        var currentYear = new Date().getFullYear();
        return (currentYear - age + 15);
    }

    $scope.$watch('userAge', function(newVal, oldVal) {
        $scope.userAdolescentYear = calculateAdolescentYearFromAge(newVal);
    });

    $scope.userAgeValid = function() {
        return /^\+?\d+$/.test($scope.userAge);
    };
}


function AdolescentYearStatement() {
    return {
        restrict: 'E',
        template: '<div ng-show="showNormalStatement()">' +
            NormalAdolescentYearStatement +
            '</div>' +
            '<div ng-hide="showNormalStatement()">' +
            YoungsterAdolescentYearStatement +
            '</div>' +
            '',
        link: function(scope, elem) {
            scope.showNormalStatement = function() {
                return (scope.userAge > 25);
            }
        }
    };
}

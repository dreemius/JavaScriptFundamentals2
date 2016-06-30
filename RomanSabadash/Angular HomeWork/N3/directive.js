angular.module('informationApp.filter.directive', [])
.directive('filterText', function () {
	return {
		scope: {
			data: '='
		},
		templateUrl: "information.html"
	};
});
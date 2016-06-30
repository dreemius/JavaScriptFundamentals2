angular.module('informationApp.filter.directive', [])
.directive('filterText', function () {
	return {
		scope: {
			data: '=',
            selectUser: '='
		},
		templateUrl: "information.html"
	};
});
angular.module('informationApp.filter.ctrl', ['informationApp.filter.service'])
.controller('filterCtrl', function ($scope, filterService) {
	$scope.information = filterService.information;

	$scope.addInformation = function () {
		filterService.information.push({
			name: $scope.name,
			surname: $scope.surname,
			birthday: $scope.birthday
		});
	}

	$scope.tableInformation = false;

	$scope.toogleInformation = function () {
		$scope.tableInformation = !$scope.tableInformation;
	}

	$scope.searchField = true;
	
	$scope.toogleSearchField = function () {
		$scope.searchField = !$scope.searchField;
	}
});
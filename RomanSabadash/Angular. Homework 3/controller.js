angular.module('informationApp.filter.ctrl', ['informationApp.filter.service'])
.controller('filterCtrl', function ($scope, filterService) {

	$scope.information = filterService.sendInformation();

	$scope.new = {};
	$scope.addInformation = function () {
		if ($scope.name && $scope.surname && $scope.birthday) {
			$scope.new.name = $scope.name;
			$scope.new.surname = $scope.surname;
			$scope.new.birthday = $scope.birthday;
			filterService.receiveInformation($scope.new);
		}
	};

	$scope.tableInformation = false;

	$scope.toogleInformation = function () {
		$scope.tableInformation = !$scope.tableInformation;
	};

	$scope.searchField = true;
	
	$scope.toogleSearchField = function () {
		$scope.searchField = !$scope.searchField;
	};
});
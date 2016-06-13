angular.module('informationApp.filter.ctrl', ['informationApp.filter.service'])
.controller('filterCtrl', function ($scope, filterService) {
	$scope.information = filterService.information;
    
    console.log($scope.search);
});
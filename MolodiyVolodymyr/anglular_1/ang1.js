var myApp = angular.module('App', []);
myApp.controller('userListCtrl', ['$scope', function($scope) {
	$scope.list = [];

	function addItem() {
		if ($scope.name && $scope.pass) {
			$scope.list.push({
				id: new Date().getTime(),
				name: $scope.name,
				pass: $scope.pass,
                email:$scope.email
              });
		}
	}

	function removeItem(id) {
		angular.forEach($scope.list, function(val, key) {
			if (val.id == id) {
				$scope.list.splice(key, 1);
			}
		})
	}
  
	$scope.add = function() {
		addItem();
	};
	$scope.remove = function(id) {
		removeItem(id);
	};

}]);
myApp.run();
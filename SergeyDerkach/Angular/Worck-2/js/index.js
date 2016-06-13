angular.module("myApp.dashboard", [
	"myApp.dashboard.ctrl",
	"myApp.dashboard.service",
	"myApp.dashboard.directive"
]);

angular.module("myApp", ['myApp.dashboard']);
angular.module("myApp.dashboard.ctrl", ['myApp.dashboard.service'])
		.controller("dashboardCtrl", ["$scope","$filter", "dashboardService", function($scope,$filter, dashboardService) {
			$scope.usersList = [];
			var user = dashboardService.getUser();
			$scope.firstName = user.firstName;
			$scope.lastName = user.lastName;

			function addItem() {
				if ($scope.firstName && $scope.lastName ) {
					$scope.usersList.push({
						id: new Date().getTime(),
						firstName: $scope.firstName,
						lastName:  $scope.lastName


					});
				}
			}

			function removeItem(id) {
				angular.forEach($scope.usersList, function(val, key) {
					if (val.id == id) {
						$scope.usersList.splice(key, 1);
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

angular.module("myApp.dashboard.service", [])
		.factory("dashboardService", function(){
			function getUser (){
				return {
					firstName: "Sergey",
					lastName: "Derkach"
				}
			}
			return {getUser : getUser};
		});

angular.module("myApp.dashboard.directive", [])
		.directive("dashboardDirective", function(){
			return {
				scope: {
					users: "="
				},
				templateUrl: 'my-modal.html'

			};
		});



 //
 //(function () {
 //angular.module('app', []);
 //
 //// MainCtrl.js
 //function MainCtrl () {
 //
 //}
 //
 //angular.module('app').controller('MainCtrl', MainCtrl);
 //
 //// AnotherCtrl.js
 //function AnotherCtrl () {
 //
 //}
 //
 //angular.module('app').controller('AnotherCtrl', AnotherCtrl);
 //
 //// и так далее...
 //
 //})();

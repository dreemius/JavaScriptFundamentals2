angular.module("myApp.panel.ctrl", ['myApp.panel.service'])
 .controller("panelCtrl", ["$scope", "panelService", function($scope, panelService){
    $scope.usersList = panelService.getUser();
	$scope.setUser = function(){
       if($scope.firstName && $scope.secondName){
             panelService.setUser({
				firstName: $scope.firstName,
                secondName: $scope.secondName})
            }
        }
}]);
angular.module("myApp.panel.service", [])
 .factory("panelService", function(){
      var usersData = [];
        function getUser(){
            return usersData;
        }
        function setUser(user){
            usersData.push(user)
			return usersData;
        }
        return {
            getUser: getUser,
            setUser: setUser
        };
    });
angular.module("myApp.panel.directive", [])
 .directive("panelDirective", function(){
   return {
	 scope: {
	   users: "="
			},
     templateUrl: 'show-customer.html'
    };
});
angular.module("myApp.panel", [
    "myApp.panel.ctrl", 
    "myApp.panel.service", 
    "myApp.panel.directive"
]);

angular.module("myApp", ['myApp.panel']);
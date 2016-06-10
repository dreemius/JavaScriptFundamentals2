angular.module("myApp", ["myApp.myModules"]);

angular.module("myApp.myModules", [
    "myApp.myModules.controller",
    "myApp.myModules.service",
    "myApp.myModules.directive"
]);

angular.module("myApp.myModules.controller", ["myApp.myModules.service"])
    .controller("myController", ["$scope", "userService", function($scope, userService){
        $scope.listMode = false;
        $scope.users = userService.getUser();
        $scope.addUser = function(){
            if($scope.firstName && $scope.lastName){
                userService.addUser({firstName: $scope.firstName,
                                     lastName : $scope.lastName})
            }
        }

    }]);

angular.module("myApp.myModules.service", [])
    .service("userService", function(){
        var service = {
            getUser: getUser,
            addUser: addUser
        };

        var usersList = [
            {
                firstName: 'Viktor',
                lastName : 'Tarnavsky',
                date     : '16.04.1989'
            },
            {
                firstName: 'Ivan',
                lastName : 'Pupkin',
                date     : '16.04.1989'
            }];

        function getUser(){
            return usersList
        }

        function addUser(user){
            usersList.push(user);
            console.log(usersList);
        }

        return service
    });

angular.module("myApp.myModules.directive", [])
    .directive("showUser", function(){
        return{
            restrict: 'E',
            scope: {
                users  : "=",
                filter: "="
            },
            //templateUrl: "directive-template.html"
            template: "<p ng-repeat='user in users | filter : filter '>{{ user.firstName}} {{ user.lastName}} {{ user.date}}</p>"
        }
    });
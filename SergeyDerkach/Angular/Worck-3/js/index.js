angular.module("myApp", ['myApp.dashboard']);
angular.module("myApp.dashboard", [
    "myApp.dashboard.ctrl",
    "myApp.dashboard.service",
    "myApp.dashboard.directive"
]);

angular.module("myApp.dashboard.ctrl", ['myApp.dashboard.service'])
    .controller("dashboardCtrl", ["$scope", "$filter", "dashboardService", function ($scope, $filter, dashboardService) {
        $scope.usersList = [];
        data = $scope.usersList = dashboardService.getUser();

        $scope.girlName = data.girlName;
        $scope.girlType = data.girlType;
        var dataItem = {};

        function addList() {
         return   dashboardService.getUser();
        }

        function addItem() {
            if ($scope.girlName && $scope.girlType) {
                dataItem = {
                    id: new Date().getTime(),
                    girlName: $scope.girlName,
                    girlType: $scope.girlType
                };
                dashboardService.setUser(dataItem);
            }

        }
        function checkDublicate () {
            var isDublicate = false;
            angular.forEach($scope.usersList, function(val){
                if((val.girlName == $scope.girlName) &&
                    (val.girlType == $scope.girlType) &&
                    isDublicate == false){
                    isDublicate = true;
                }
            })
            return isDublicate;
        }


        function removeItem(id) {
            angular.forEach($scope.usersList, function (val, key) {
                if (val.id == id) {
                    $scope.usersList.splice(key, 1);
                }
            })
        }

        $scope.addList = function () {
            addList();
        };
        $scope.addUser = function () {
            !checkDublicate() && addItem(dataItem);
        };
        $scope.remove = function (id) {
            removeItem(id);
        };
    }]);

angular.module("myApp.dashboard.service", [])
    .factory("dashboardService", function () {
        var  data = [{
            id: new Date().getTime(),
            girlName: "Алина",
            girlType: "Блондинка"

        }, {
            id: new Date().getTime(),
            girlName: "Света",
            girlType: "Брюнетка"

        }, {
            id: new Date().getTime(),
            girlName: "Настя",
            girlType: "Блондинка"

        }];
        function setUser(dataItem) {
            return data.push(dataItem);
        }

        function getUser() {
            return data;
        }

        return {
            getUser: getUser,
            setUser: setUser
        };
    });

angular.module("myApp.dashboard.directive", [])
    .directive("dashboardDirective", function () {
        return {
            scope: {
                users: "="
            },
            templateUrl: 'template-1.html'

        };
    });


(function () {
    angular.module('app', []);

    // MainCtrl.js
    function MainCtrl() {

    }

    angular.module('app').controller('MainCtrl', MainCtrl);

    // AnotherCtrl.js
    function AnotherCtrl() {

    }

    angular.module('app').controller('AnotherCtrl', AnotherCtrl);

    // и так далее...

})();

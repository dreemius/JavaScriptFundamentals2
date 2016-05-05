var myApp = angular.module('App', []);
myApp.controller('userListCtrl', ['$scope', function($scope) {
    $scope.list = [];

    function addItem() {
        if ($scope.name && $scope.pass && $scope.word) {
            $scope.list.push({
                id: new Date().getTime(),
                name: $scope.name,
                pass: $scope.pass,
                word: $scope.word
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
    
    function checkDublicate () {
        var isDublicate = false;
        angular.forEach($scope.list, function(val){
            if((val.name == $scope.name) && 
               (val.pass == $scope.pass) && 
               (val.word == $scope.word) &&
               isDublicate == false){
                isDublicate = true;    
            }
        })
        return isDublicate;
    }

    $scope.add = function() {
        !checkDublicate() && addItem();
    };
    $scope.remove = function(id) {
        removeItem(id);
    };
}]);
myApp.run();

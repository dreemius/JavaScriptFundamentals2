angular.module('controller',[])
    .controller('myCtrl',['$scope','myServ',function($scope,myServ){
        $scope.items = [];
        $scope.showIdent = false;
        $scope.record = {};
        $scope.setItems = function(){
            if($scope.firstName && $scope.lastName && $scope.city){
                $scope.record.firstName = $scope.firstName;
                $scope.record.lastName = $scope.lastName;
                $scope.record.city = $scope.city;
                myServ.setData($scope.record);
            }
        };
        $scope.showItems = function(){
            $scope.items =  myServ.getData();
            $scope.showIdent = true;
        };
        $scope.hideItems = function(){
            $scope.showIdent = false;
        };
        function checkDublicate () {
            var isDublicate = false;
            angular.forEach($scope.items, function(val){
                if((val.firstName == $scope.firstName) &&
                    (val.lastName == $scope.lastName) &&
                    (val.city == $scope.city) &&
                    isDublicate == false){
                    isDublicate = true;
                }
            });
            return isDublicate;
        }

        $scope.copyItems = function() {
            !checkDublicate() && $scope.setItems();
        };
    }]);
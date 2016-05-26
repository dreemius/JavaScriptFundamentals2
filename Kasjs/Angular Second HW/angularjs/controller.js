angular.module('controller',[])
    .controller('myController',[ '$scope','myService',function($scope,myService){
        myService.async().then(function(response){
           $scope.myData = response;
        });

    }]);

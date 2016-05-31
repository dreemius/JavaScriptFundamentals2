angular.module('controller',[])
    .controller('myController',['myService',function(myService){
        var self = this;
        myService.async().then(function(response){
          self.myData = response;
        });

    }]);

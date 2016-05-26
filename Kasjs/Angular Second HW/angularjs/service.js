angular.module('service',[])
    .factory('myService',['$http',function($http){
        return {
            async : function() {
                return $http.get('http://www.w3schools.com/angular/customers.php')
                    .then(function(response){
                        return response.data.records;
                    },
                    function(response){
                        console.log('Same error');
                    });
            }
        };
    }]);





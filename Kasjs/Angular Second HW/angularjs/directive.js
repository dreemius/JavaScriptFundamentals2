angular.module('directive',[])
    .directive('myDirective',function(){
        return{
            scope :{
                users:'='
            },
            templateUrl: "template.html"
        }
    });
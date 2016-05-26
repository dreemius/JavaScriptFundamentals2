angular.module('directive',[])
    .directive('myDirective',function(){
        return{
            scope :{
                me:'='
            },
            templateUrl: "template.html"
        }
    });
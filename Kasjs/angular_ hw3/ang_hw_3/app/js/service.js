angular.module('service',[])
    .factory('myServ',function(){
       var item = {};
        var items = [];
        function setData(contItem){
            items.push({
                firstName: contItem.firstName,
                lastName: contItem.lastName,
                city: contItem.city
            });
        }
        return {
            getData : function(){
                return items;
            },
            setData : setData
        }
    });



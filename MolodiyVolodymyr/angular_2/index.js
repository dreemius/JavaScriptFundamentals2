angular.module("myApp.panel.ctrl", ['myApp.panel.service'])
.controller("panelCtrl", [ "panelService", function( panelService) {
   var user = panelService.getUser();
   this.fullName = [user.firstName, user.secondName,user.birthDate];
 }]);

angular.module("myApp.panel.service", [])
.factory("panelService", function(){
    function getUser (){
        return {
            firstName: "John",
            secondName: "Doe",
            birthDate:'02-30-2222'
        }
    }
    return {getUser : getUser};
});

angular.module("myApp.panel.directive", [])
.directive("panelDirective", function(){
    return {
	  scope: {
		    users: "="
			},
      templateUrl: 'my-customer.html'
    };
});

angular.module("myApp.panel", [
    "myApp.panel.ctrl", 
    "myApp.panel.service", 
    "myApp.panel.directive"
]);

angular.module("myApp", ['myApp.panel']);
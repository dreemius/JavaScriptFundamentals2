

angular.module("routerApp", ['ui.router','routerApp.dashboard']);
angular.module("routerApp.dashboard", [
    "routerApp.dashboard.ctrl",
    "routerApp.dashboard.service",
    "routerApp.dashboard.directive"
]);

angular.module("routerApp", ['ui.router','routerApp.dashboard'])
    .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../partial-home.html'

        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: '../partial-home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': {templateUrl: '../partial-about.html'},
                'columnOne@about': {template: 'Look I am a column!'},
                'columnTwo@about': {
                    templateUrl: '../table-data.html',
                    controller: 'scotchController'
                }
            }

        });

});



angular.module("myApp.dashboard.ctrl", ['myApp.dashboard.service', 'myApp.dashboard.scotchController'])
    .controller("dashboardCtrl", ["$scope", "dashboardService", function ($scope, dashboardService) {
        var ctrl = this;


    }]);


angular.module("myApp.dashboard.service", [])
    .factory("dashboardService", function () {
        function getData() {
            return $http.get('js/data/data.json').then(function (response) {
                return response.data;
            });
        }

        return {
            getData: getData

        };
    });



angular.module("myApp.dashboard.scotchController", ['myApp.dashboard.service'])
    .controller('scotchController', ["$scope", '$rootScope', 'dashboardService', function ($scope, $rootScope, dashboardService) {

        $scope.message = 'test';
        $scope.scotches = [];

        dashboardService.getData().then(function (response) {
            $scope.scotches = response;
        });


    }]);

angular.module("myApp.dashboard.directive", [])
    .directive("dashboardDirective", function () {
        return {
            scope: {
                users: "="
            },
            templateUrl: ''

        };
    });
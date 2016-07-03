angular.module("routerApp", ['ui.router', 'routerApp.dashboard'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'partial-home.html'

            })

            // nested list with custom controller
            .state('home.latest', {
                url: '/latest',
                templateUrl: 'partial-home-latest.html',
                controller: 'latestCtrl',
                scope: {
                    latestes: "="
                }

            })

            // nested list with just some random string data
            .state('home.popularPhones', {
                url: '/popularPhones',
                templateUrl: 'partial-home-popularPhones.html',
                controller: 'popularPhonesCtrl'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('item', {
                url: '/item',

                views: {
                    '': {templateUrl: 'partial-about.html'},
                    'columnOne@item': {template: 'Look I am a column!'},
                    'columnTwo@item': {
                        templateUrl: 'table-data.html',
                        controller: 'scotchController',
                        scope: {
                            scotches: "="
                        }
                    }
                }

            });

    });
angular.module("routerApp.dashboard", [
    "routerApp.dashboard.ctrl",
    "routerApp.dashboard.service",
    "routerApp.dashboard.directive"
]);


angular.module("routerApp.dashboard.ctrl", ['routerApp.dashboard.service', 'routerApp.dashboard.scotchController',
        'routerApp.dashboard.latestCtrl', 'routerApp.dashboard.popularPhonesCtrl', "routerApp.dashboard.latestService",
        "routerApp.dashboard.popularPhonesService"])
    .controller("dashboardCtrl", ["$scope", "dashboardService", function ($scope, dashboardService) {
        var ctrl = this;


    }]);

angular.module("routerApp.dashboard.latestCtrl", ['routerApp.dashboard.service'])
    .controller("latestCtrl", ["$scope", "latestService", function ($scope, latestService) {
        $scope.latestes = [];
        latestService.getDataLatest().then(function (response) {
            $scope.latestes = response;
        });
    }]);

angular.module("routerApp.dashboard.popularPhonesCtrl", ['routerApp.dashboard.service'])
    .controller("popularPhonesCtrl", ["$scope", "popularPhonesService", function ($scope, popularPhonesService) {
        $scope.popularPhones = [];
        popularPhonesService.getDataPopularPhones().then(function (response) {
            $scope.popularPhones = response;
        });
    }]);


angular.module("routerApp.dashboard.latestService", [])
    .factory("latestService", function (dashboardService) {
        var responseData;

        function getDataLatest() {
           return dashboardService.getData().then(function (response) {
             var  sortData = _.sortBy(response, function(o) { return o.date; }).reverse();

               return  responseData=sortData;
            });
          }

        return {
            getDataLatest: getDataLatest
        };
    });


angular.module("routerApp.dashboard.popularPhonesService", [])
    .factory("popularPhonesService", function (dashboardService) {
        var responseData;
        function getDataPopularPhones() {
            return dashboardService.getData().then(function (response) {
               var sortData= _.groupBy(response, {popular: true});
                responseData=sortData.true;
                return  responseData;
            });
        }

        return {
            getDataPopularPhones: getDataPopularPhones
        };
    });


angular.module("routerApp.dashboard.service", [])
    .factory("dashboardService", function ($http) {
        function getData() {
            return $http.get('js/data/data.json').then(function (response) {
                return response.data;
            });
        }

        return {
            getData: getData
        };
    });


angular.module("routerApp.dashboard.scotchController", ['routerApp.dashboard.service'])
    .controller('scotchController', ["$scope", '$rootScope', 'dashboardService', function ($scope, $rootScope, dashboardService) {

        $scope.message = 'test';
        $scope.scotches = [];

        dashboardService.getData().then(function (response) {
            $scope.scotches = response;
        });


    }]);

angular.module("routerApp.dashboard.directive", [])
    .directive("dashboardDirective", function () {
        return {
            scope: {
                users: "="
            }


        };
    });
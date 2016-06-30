angular.module('catalogApp', ['ui.router']).
config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
        
        .state('home.list', {
            url: '/list',
            templateUrl: 'partials/home-list.html',
            controllerAs: "ls",
            controller: function() {
                var vm = this;
                vm.items = ['item1', 'item2', 'item3'];
            }
        })
        
        .state('home.paragraph', {
            url: '/paragraph',
            template: '<h1>Какой то текст</h1>'
        })
        
        .state('about', {
            url: '/about',
            views: {
                '': { 
                    templateUrl: 'partials/about.html' 
                },
                'columnOne@about': { 
                    template: 'Text' 
                },
                'columnTwo@about': { 
                    templateUrl: 'partials/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });
        
});

angular.module('catalogApp')
    .controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.phones = [
        {
            name: 'Samsung',
            price: 7000
        },
        {
            name: 'HTC',
            price: 10000
        },
        {
            name: 'IPhone',
            price: 14000
        }
    ];
    
});
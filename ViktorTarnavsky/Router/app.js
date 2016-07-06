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
            controller: 'PopularItemsController'
        })
        
        .state('home.paragraph', {
            url: '/paragraph',
            templateUrl: 'partials/last-phones.html',
            controller: 'LastItemsController'
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
                    controller: 'MainController'
                }
            }
            
        });
        
});


angular
    .module('catalogApp')
    .controller('MainController', MainController);

function MainController(itemsService, $scope) { 
    console.log(itemsService.getList());
    $scope.phones = itemsService.getList();
    
}

angular
    .module('catalogApp')
    .service('itemsService', itemsService);
function itemsService() { 
        var phonesList = [
            {
                name: 'Samsung',
                price: 7000,
                popular: true,
                date: 1467450203727
            },
            {
                name: 'HTC',
                price: 10000,
                popular: false,
                date: 1467440203727
            },
            {
                name: 'IPhone',
                price: 14000,
                popular: true,
                date: 1467470203727
            },
            {
                name: 'Nokia',
                price: 3000,
                popular: false,
                date: 1467430203727
            }
        ];

        function getList(){
            return phonesList
        }

        return {getList: getList};
}


angular
    .module('catalogApp')
    .controller('PopularItemsController', PopularItemsController);

function PopularItemsController(popularItemsService, $scope) { 
    console.log(popularItemsService.getPopularList())
    vm = this
    vm.popularPhones = popularItemsService.getPopularList()
}
angular
    .module('catalogApp')
    .service('popularItemsService', popularItemsService);
function popularItemsService(itemsService) {
    var itemsList = itemsService.getList();
	
    function getPopularList(){
        return itemsList.filter(function(item) {
            return item.popular;         
        }) 
    }
    return {getPopularList: getPopularList};
}



angular
    .module('catalogApp')
    .controller('LastItemsController', LastItemsController);

function LastItemsController(lastItemsService, $scope) { 
    console.log(lastItemsService.getLastList())
    $scope.lastPhones = lastItemsService.getLastList()
}
angular
    .module('catalogApp')
    .service('lastItemsService', lastItemsService);
function lastItemsService(itemsService) { 
    var itemsList = itemsService.getList();

    function getLastList(){
        var lastItemsList = []
        angular.forEach(itemsList, function(item, key) {
            if(item.date >= 1467440203727){
                lastItemsList.push(itemsList[key]);
            }
        })
                        
        return lastItemsList
    }

    return {getLastList: getLastList};
}


             

/*angular.module('catalogApp')
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
});*/
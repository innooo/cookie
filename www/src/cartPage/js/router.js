angular.module('cartRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('cart', {
                url: '/cart',
                views: {
                    '': {
                        templateUrl: 'template/cart.html',
                        controller: 'cart'
                    }
                }
            })
    })
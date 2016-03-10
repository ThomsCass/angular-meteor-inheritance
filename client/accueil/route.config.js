(function () {
    'use strict';

    angular
        .module('event')
        .config(routeConfig)

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider
            .state('accueil', {
                url: '/accueil',
                templateUrl: 'client/accueil/accueil.html'
            })
    }
})();

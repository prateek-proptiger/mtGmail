'use strict';

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider
    .otherwise('/404')

    $stateProvider
    .state('base', {
        abstract: true,
        templateUrl: 'views/controllers/abstractCtrl.html',
        controller: 'AbstractCtrl'
    })
    .state('base.mail', {
        url: '/mail/:label',
        templateUrl: 'views/controllers/listMails.html',
        controller: 'ListMailsCtrl'
    })
    .state('base.view', {
        url: '/mail/:label/:id',
        templateUrl: 'views/controllers/viewMail.html',
        controller: 'ViewMailCtrl'
    })
}]);
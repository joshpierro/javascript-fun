
var app = angular.module('angularApp', [ 'ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    // Now set up the states
    $stateProvider
        .state('list', {
            url: "/home",
            controller: 'List',
            controllerAs: 'vm',
            templateUrl: "../app/list.html"
        })
        .state('item', {
            url: "/item/:itemId:/:name",
            controller: 'Item',
            controllerAs: 'vm',
            templateUrl: "../app/item.html"
        });
});
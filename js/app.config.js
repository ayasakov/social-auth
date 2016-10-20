"use strict";

angular.module('AuthApp')
  .config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
}]);
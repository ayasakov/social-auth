"use strict";

angular.module('AuthApp')
  .config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: 'includes/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'includes/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'includes/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
}]);
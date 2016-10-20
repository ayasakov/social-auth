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
      .otherwise({
        redirectTo: '/'
      })
}]);
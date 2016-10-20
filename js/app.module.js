"use strict";

angular.module('AuthApp', ['ngRoute'])
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.title = 'Home page';
  }]);
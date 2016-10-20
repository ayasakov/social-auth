"use strict";

angular.module('AuthApp', ['ngRoute'])
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.title = 'Home page';
  }])
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isAuthorization = function () {
      return false;
    };

    $scope.auth = function (username, password) {
      $scope.username = '';
      $scope.password = '';

      // VK auth will be here

      console.log(username, password);
    };

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }
  }])
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.title = 'About page';
  }])
  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.title = 'Contact page';
  }]);
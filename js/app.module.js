"use strict";

angular.module('AuthApp', ['ngRoute'])
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.title = 'Home page';
  }])
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isAuthorization = false;
    $scope.profileImage = 'images/not-available.jpg';

    // Authorization via VK OpenAPI
    $scope.authVK = function () {
      // App ID
      var appId = 0; /* input your appId here */

      VK.init({
        apiId: appId
      });

      VK.Auth.login(function(response) {
        if (response.status == 'connected') {
          $scope.firstName = response.session.user.first_name;
          $scope.secondName = response.session.user.last_name;
          $scope.uid = response.session.user.id;

          // Get profile's photo
          VK.Api.call('photos.get', {
            owner_id: $scope.uid,
            album_id: 'profile',
            rev: 1,
            count: 1
          }, function (obj) {
            var image = _.first(obj.response);
            if (image) {
              $scope.$apply(function() {
                $scope.profileImage = image.src_small;
              });
            }
          });

          $scope.$apply(function() {
            $scope.isAuthorization = true;
          });
        }
      });
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
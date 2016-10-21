"use strict";

angular.module('AuthApp', ['ngRoute'])
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.title = 'Home page';
    $("[data-toggle=tooltip]").tooltip();
  }])
  .controller('NavCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.isAuthorization = false;
    $rootScope.profileImage = 'images/not-available.jpg';

    // Authorization via VK OpenAPI
    $scope.authVK = function () {
      // App ID
      var appId = 5676328; /* input your appId here */

      VK.init({
        apiId: appId
      });

      VK.Auth.login(function(response) {
        if (response.status == 'connected') {
          $rootScope.firstName = response.session.user.first_name;
          $rootScope.secondName = response.session.user.last_name;
          $rootScope.url = response.session.user.href;
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
                $rootScope.profileImage = image.src_small;
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
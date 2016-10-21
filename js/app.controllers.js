"use strict";

angular.module('AuthApp')
  .controller('MainController', ['$scope', function ($scope) {

  }])
  .controller('HomeCtrl', ['$scope', 'Comments', function ($scope, Comments) {
    $scope.title = 'Home page';
    $("[data-toggle=tooltip]").tooltip();

    $scope.count = 0;
    $scope.comments = [];

    Comments.get(function (data) {
      $scope.count = data.count;
      $scope.comments = data.comments;
    });

    $scope.addComment = function (url, userpic, text, name) {
      var id = $scope.comments.length + 3;
      var newComment = {
        id: id,
        name: name,
        userpic: userpic,
        url: url,
        text: text,
        like: 0,
        dislike: 0,
        date: new Date(),
        children: []
      };
      $scope.comments.push(newComment);
      Comments.save({count: $scope.count, comments: $scope.comments});
    };

    $scope.addReply = function (url, userpic, text, name, parrent) {
      var newComment = {
        name: name,
        userpic: userpic,
        url: url,
        text: text,
        like: 0,
        dislike: 0,
        date: new Date()
      };

      var obj = _.findWhere($scope.comments, {id: parrent});
      obj.children.push(newComment);
    };

    $scope.showReply = false;
    $scope.changeReply = function () {
      $scope.showReply = !$scope.showReply;
    }

  }])
  .controller('NavCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $rootScope.isAuthorization = false;
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
            $rootScope.isAuthorization = true;
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
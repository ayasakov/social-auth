"use strict";

angular.module('AuthApp')
  .factory('Comments', ['$resource', function($resource) {
    return $resource('/api/journal/comment');
  }])
  .factory('Reply', ['$resource', function($resource) {
    return $resource('/api/journal/reply');
  }]);
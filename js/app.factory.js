"use strict";

angular.module('AuthApp')
  .factory('Comments', ['$resource', function($resource) {
    return $resource('./data/comments.json');
  }]);
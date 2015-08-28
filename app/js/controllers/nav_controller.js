'use strict';

module.exports = function(app) {
  app.controller('NavController', ['$scope', '$location', function($scope, $location) {
    $scope.redirect = function(destination) {
      $location.path('/' + destination)
    }
  }]);
};

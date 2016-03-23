'use strict';

var val = require('validator');

module.exports = function(app) {
  app.controller('AuthController', ['$scope', '$location', '$cookies', 'auth', function($scope, $location, $cookies, auth) {

    $scope.hasValidationErrors = false;
    $scope.validationErrorMessage = '';

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    };

    $scope.signIn = function(user) {

      var validationErrors = [];
      if (val.isNull(user)) {
        validationErrors.push('Please fill out the form.');
      } else {
        if (val.isNull(user.email)) { validationErrors.push('Email is required.'); }
        if (val.isNull(user.password)) { validationErrors.push('Password is required.'); }
        if (!val.isEmail(user.email)) { validationErrors.push('Email address is an invalid format.'); }
      }

      if (validationErrors.length) {
        $scope.validationErrorMessage = validationErrors.join('\n');
        $scope.hasValidationErrors = true;
        return false;
      }

      auth.signIn(user, function(err) {

        if (err) {
          validationErrors.push('Credentials are invalid.');
          $scope.validationErrorMessage = validationErrors.join('\n');
          return $scope.hasValidationErrors = true;
        }
        $location.path('/create-pattern');

      });
    };

  }]);
};

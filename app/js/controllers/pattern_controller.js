'use strict';

module.exports = function(app) {
  app.controller('PatternController', ['$scope', '$location', '$http', '$routeParams', function($scope, $location, $http, $routeParams) {

    var patternId = $routeParams.id;
    console.log($scope.patternId);

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    };

    $scope.getPattern = function () {
      $http.get('/api/pattern/' + patternId).then(function (res) {
        $scope.pattern = res.data.pattern;
      }),
      function (err) {
        console.log(err);
      };
    };

  }]);
};

'use strict';

module.exports = function(app) {
  app.controller('PatternsController', ['$scope', '$location', '$cookies', 'auth', '$http', function($scope, $location, $cookies, auth, $http) {

    $scope.patternId = window.location.pathname.split('/').pop();
    $scope.section = 'modern';
    var eat = $cookies.get('eat');
    var config = {
      headers: {'eat': eat}
    };

    $scope.isSignedIn = function () {
      if(!auth.isSignedIn) {
        $window.location = '/catalogue/signin';
      }
    };

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    };

    $scope.getPatterns = function () {
      $http.get('/api/patterns').then(function (res) {
        $scope.patternsMaster = res.data.patterns;
        $scope.patterns = $scope.patternsMaster[$scope.section];
      }),
      function (err) {
        console.log(err);
      };
    };

    $scope.getPattern = function () {
      $http.get('/api/patterns/' + patternId).then(function (res) {
        $scope.pattern = res.data.pattern;
      }),
      function (err) {
        console.log(err);
      };
    };

    $scope.setSection = function (category) {
      $scope.section = category;
      $scope.patterns = $scope.patternsMaster[category];
    };

    $scope.createPattern = function (pattern) {
      $http.post('/api/create-pattern', pattern).then(function (res) {
        $location.path('/catalogue/' + res.data.pattern._id);
      }),
      function (err) {
        console.log(err);
      };
    };

    $scope.uploadPattern = function(callback) {
      $scope.uploadMessage = null;
      if( $('#file-selector')[0].files[0] ) {
        var file = $('#file-selector')[0].files[0];
        var bucket = new AWS.S3({ params: { Bucket: 'studio-redfield-patterns'} });
        bucket.config.region = 'us-west-1';

        $http.get('/api/upload-config', config).then(function(res) {

          bucket.config.update({ accessKeyId: res.data.accessKeyId, secretAccessKey: res.data.secretAccessKey });

          var params = {Key: file.name, ContentType: file.type, Body: file};

          bucket.putObject(params, function (err, data) {
            if(err) {
              return console.log(err);
            }
            $scope.pattern.image = ('https://s3.amazonaws.com/studio-redfield-patterns/' + file.name);
            callback();
          });
        }),
        function(res) {
          console.log('Error');
        };
      }
    };

    $scope.uploadAndSave = function (pattern) {
      $scope.uploadPattern(function () {
        $scope.createPattern(pattern);
      });
    }

    $scope.logOut = function () {

    };

  }]);
};

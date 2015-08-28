'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.redirect = function(destination) {
      $location.path('/' + destination)
    }


    //EFFECTS

    //HOME
    angular.element('li.tile').mouseenter(function() {
      angular.element('#featured img').attr('src', 'https://s3-us-west-2.amazonaws.com/studio-redfield/img/kibaktile-feature.jpg');
    });

    angular.element('li.ceramics').mouseenter(function() {
      angular.element('#featured img').attr('src', 'https://s3-us-west-2.amazonaws.com/studio-redfield/img/ceramic-feature.jpg');
    });

    angular.element('li.paintings').mouseenter(function() {
      angular.element('#featured img').attr('src', 'https://s3-us-west-2.amazonaws.com/studio-redfield/img/miller-feature.jpg');
    });

    angular.element('li.bags').mouseenter(function() {
      angular.element('#featured img').attr('src', 'https://s3-us-west-2.amazonaws.com/studio-redfield/img/wren-feature.jpg');
    });

    angular.element('li.jewelry').mouseenter(function() {
      angular.element('#featured img').attr('src', 'https://s3-us-west-2.amazonaws.com/studio-redfield/img/kahill-feature.jpg');
    });

    angular.element('li.cutlery').mouseenter(function() {
      angular.element('#featured img').attr('src', 'https://s3-us-west-2.amazonaws.com/studio-redfield/img/kotiach-feature.jpg');
    });

    //GALLERIES

    angular.element('.gallery li img').mouseenter(function(){
      var thisImg = this.src;
      angular.element('.gallery .gallery-head img').attr('src', thisImg);
    });

    //ARTIST ROWS

    angular.element('.row .text li img').mouseenter(function(){
      var thisImg = this.src;
      var thisParent = angular.element(this).closest('.row').children('.main-img');
      thisParent.attr('src', thisImg);
    });

  }]);
};

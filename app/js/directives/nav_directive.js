'use strict';

module.exports = function(app) {
  app.directive('navHead', function(){
    return {
      restrict: 'EA',
      scope: {
        redirect: "&"
      },
      templateUrl: 'views/templates/nav_template.html'
    }
  });
};

'use strict';

require('angular/angular');
require('angular-route');
require('angular-sanitize');

var StudioRedfieldApp = angular.module('StudioRedfieldApp', ['ngRoute', 'ngSanitize']);

//controllers
require('./controllers/main_controller')(StudioRedfieldApp);
require('./controllers/nav_controller')(StudioRedfieldApp);

//directives
require('./directives/nav_directive')(StudioRedfieldApp);

//routes
StudioRedfieldApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/artists', {
      templateUrl: 'views/artists.html',
      controller: 'MainController'
    })
    .when('/ceramics', {
      templateUrl: 'views/ceramics.html',
      controller: 'MainController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'MainController'
    })
    .when('/cutlery', {
      templateUrl: 'views/cutlery.html',
      controller: 'MainController'
    })
    .when('/jewelry', {
      templateUrl: 'views/jewelry.html',
      controller: 'MainController'
    })
    .when('/paintings', {
      templateUrl: 'views/paintings.html',
      controller: 'MainController'
    })
    .when('/textile', {
      templateUrl: 'views/textile.html',
      controller: 'MainController'
    })
    .when('/tile', {
      templateUrl: 'views/tile.html',
      controller: 'MainController'
    })
    .otherwise({redirectTo:'/'});
}]);

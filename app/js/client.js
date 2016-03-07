'use strict';

require('angular/angular');
require('angular-route');
require('angular-sanitize');
require('angular-cookies');
require('angular-base64');

var StudioRedfieldApp = angular.module('StudioRedfieldApp', ['ngRoute', 'ngSanitize', 'ngCookies', 'base64']);

//controllers
require('./controllers/main_controller')(StudioRedfieldApp);
require('./controllers/nav_controller')(StudioRedfieldApp);
require('./controllers/auth_controller')(StudioRedfieldApp);
require('./controllers/patterns_controller')(StudioRedfieldApp);
require('./controllers/pattern_controller')(StudioRedfieldApp);

//directives
require('./directives/nav_directive')(StudioRedfieldApp);

// services.
require('./services/auth_service')(StudioRedfieldApp);

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
    .when('/catalogue', {
      templateUrl: 'views/catalogue/catalogue.html',
      controller: 'PatternsController'
    })
    .when('/catalogue/:id', {
      templateUrl: 'views/catalogue/pattern-template.html',
      controller: 'PatternController'
    })
    .when('/catalogue/signin', {
      templateUrl: 'views/catalogue/signin.html',
      controller: 'AuthController'
    })
    .when('/catalogue/create-pattern', {
      templateUrl: 'views/catalogue/create-pattern.html',
      controller: 'PatternsController'
    })
    .otherwise({redirectTo:'/'});
}]);

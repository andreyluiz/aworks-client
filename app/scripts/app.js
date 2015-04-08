'use strict';

/**
 * @ngdoc overview
 * @name aworksClientApp
 * @description
 * # aworksClientApp
 *
 * Main module of the application.
 */
angular
  .module('aworksClientApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

angular
  .module('aworksClientApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngTouch',
    'ui.utils.masks',
    'ui.bootstrap',
    'angular-growl'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/eventos', {
        templateUrl: 'views/list-eventos.html',
        controller: 'ListEventosCtrl'
      })
      .when('/eventos/novo', {
        templateUrl: 'views/new-evento.html',
        controller: 'AddEventoCtrl'
      })
      .when('/eventos/:_id', {
        templateUrl: 'views/show-evento.html',
        controller: 'ShowEventoCtrl'
      })
      .when('/eventos/:_id/editar', {
        templateUrl: 'views/edit-evento.html',
        controller: 'EditEventoCtrl'
      })
      .otherwise({
        redirectTo: '/eventos'
      });
  })
  .config(function(growlProvider) {
    growlProvider.onlyUniqueMessages(true);
    growlProvider.globalTimeToLive(5000);
  });

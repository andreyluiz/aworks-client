'use strict';

/**
 * @ngdoc function
 * @name aworksClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aworksClientApp
 */
angular.module('aworksClientApp')
  .controller('ListEventosCtrl', function ($scope, EventoService, $location) {
    $scope.eventos = [];
    EventoService.getAll()
      .success(function(eventos) {
        $scope.eventos = eventos;
      });

    $scope.showEvento = function(id) {
      $location.path('/eventos/' + id);
    };
  });

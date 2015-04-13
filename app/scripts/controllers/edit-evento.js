'use strict';

angular.module('aworksClientApp')
  .controller('EditEventoCtrl', function ($scope, $routeParams, EventoService, $location, $rootScope) {
    $scope.evento = {};

    $scope.today = function() {
      $scope.evento.data_limite = new Date();
    };
    $scope.today();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    EventoService.getById($routeParams._id)
      .success(function(evento) {
        $scope.evento = evento;
      })
      .error(function(err) {
        throw err;
      });

    $scope.saveEvento = function(evento) {
      EventoService.update(evento)
        .success(function() {
          $rootScope.$broadcast('evento-editado-sucesso');
          $location.path('/eventos/' + evento._id);
        })
        .error(function(err) {
          throw err;
        });
    };
  });

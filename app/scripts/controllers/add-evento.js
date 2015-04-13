'use strict';

angular.module('aworksClientApp')
  .controller('AddEventoCtrl', function ($scope, EventoService, $location, $rootScope) {
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

    $scope.addEvento = function(evento) {
      EventoService.add(evento)
        .success(function(novo) {
          $rootScope.$broadcast('evento-cadastrado-sucesso');
          $location.path('/eventos/' + novo._id);
        })
        .error(function(err) {
          throw err;
        });
    };
  });

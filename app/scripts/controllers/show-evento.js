'use strict';

angular.module('aworksClientApp')
  .controller('ShowEventoCtrl', function ($scope, $routeParams, EventoService, $location, $rootScope) {
    $scope.evento = {};
    EventoService.getById($routeParams._id)
      .success(function(evento) {
        $scope.evento = evento;
      })
      .error(function(err) {
        throw err;
      });

    $scope.deletar = function(evento) {
      if (confirm('Deseja mesmo deletar o registro?')) {
        EventoService.delete(evento._id)
          .success(function() {
            $rootScope.$broadcast('evento-deletado-sucesso');
            $location.path('/eventos');
          })
          .error(function(err) {
            throw err;
          });
      }
    };
  });

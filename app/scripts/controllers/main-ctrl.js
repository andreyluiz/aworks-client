'use strict';

angular.module('aworksClientApp')
  .controller('MainCtrl', function($rootScope, growl) {
    $rootScope.$on('evento-cadastrado-sucesso', function() {
      growl.addSuccessMessage('Evento cadastrado com sucesso.');
    });
    $rootScope.$on('evento-editado-sucesso', function() {
      growl.addSuccessMessage('Evento editado com sucesso.');
    });
    $rootScope.$on('evento-deletado-sucesso', function() {
      growl.addSuccessMessage('Evento deletado com sucesso.');
    });
  });

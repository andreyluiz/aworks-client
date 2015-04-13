'use strict';

angular.module('aworksClientApp')
	.service('EventoService', function($http, SERVER_URI) {
    return {
      add: function(evento) {
        return $http.post(SERVER_URI + '/eventos', evento);
      },
      getAll: function() {
        return $http.get(SERVER_URI + '/eventos');
      },
      getById: function(id) {
        return $http.get(SERVER_URI + '/eventos/' + id);
      },
      update: function(evento) {
        return $http.put(SERVER_URI + '/eventos/' + evento._id, evento);
      },
      delete: function(id) {
        return $http.delete(SERVER_URI + '/eventos/' + id);
      }
    };
	});

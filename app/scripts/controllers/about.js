'use strict';

/**
 * @ngdoc function
 * @name aworksClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aworksClientApp
 */
angular.module('aworksClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name aworksClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aworksClientApp
 */
angular.module('aworksClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

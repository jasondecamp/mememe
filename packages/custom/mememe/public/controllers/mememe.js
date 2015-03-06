'use strict';

/* jshint -W098 */
angular.module('mean.mememe').controller('MememeController', ['$scope', 'Global', 'Mememe',
  function($scope, Global, Mememe) {
    $scope.global = Global;
    $scope.package = {
      name: 'mememe'
    };
  }
]);

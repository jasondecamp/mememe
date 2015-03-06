'use strict';

angular.module('mean.mememe').config(['$stateProvider','$viewPathProvider',
  function($stateProvider,$viewPathProvider) {
	$viewPathProvider.override('system/views/index.html', 'mememe/views/landing.html');
    $stateProvider.state('creator', {
      url: '/create',
      templateUrl: 'mememe/views/creator.html'
    });
  }
]);

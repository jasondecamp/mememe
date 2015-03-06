'use strict';

angular.module('mean.mememe').factory('Menus', ['$resource',
  function($resource) {
    return $resource('admin/menu/:name', {
      name: '@name',
      defaultMenu: '@defaultMenu'
    });
  }
]);

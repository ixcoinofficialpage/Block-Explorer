'use strict';

angular.module('insight.shortaddr')
  .factory('ShortAddr',
    function($resource) {
      return $resource('/api/addr-short/:shortAddr');
  })
  .factory('ShortTx',
    function($resource) {
      return $resource('/api/tx-short/:shortTx');
  });


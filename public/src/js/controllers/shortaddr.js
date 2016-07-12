'use strict';

angular.module('insight.shortaddr').controller('ShortAddrController',
  function($scope, $rootScope, $routeParams, $location, Global, ShortAddr) {

      $scope.global = Global;
      $scope.loading = false;

      if ($routeParams.shortAddr) {
        ShortAddr.get({
          shortAddr: $routeParams.shortAddr
        }, function(address) {
          $location.path('/address/' + address.address);
        }, function(e) {
          $rootScope.flashMessage = e.data;
          $location.path('/');
        });
      }
});

angular.module('insight.shortaddr').controller('ShortTxController',
  function($scope, $rootScope, $routeParams, $location, Global, ShortTx) {

      $scope.global = Global;
      $scope.loading = false;

      if ($routeParams.shortTx) {
        ShortTx.get({
          shortTx: $routeParams.shortTx
        }, function(tx) {
          $location.path('/tx/' + tx.txid);
        }, function(e) {
          $rootScope.flashMessage = e.data;
          $location.path('/');
        });
      }
});

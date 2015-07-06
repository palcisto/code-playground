(function(){
  'use strict';

  function HomeViewCtrl($scope) {
    $scope.variable = 'something';
  }

  angular
    .module('Home')
    .controller('HomeViewCtrl', ['$scope', HomeViewCtrl]);
})();
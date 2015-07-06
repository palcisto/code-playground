(function(){
  'use strict';

  function CompanyViewCtrl($scope) {
    $scope.variable = 'something';
  }

  angular
    .module('Company')
    .controller('CompanyViewCtrl', ['$scope', CompanyViewCtrl]);
})();
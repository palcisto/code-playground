(function() {
  'use strict';

  function HeaderController($state, $rootScope, $scope) {

    function stateChangeSuccess() {
      $scope.currentState = $state.current.name;
      console.log('Current state is: ' + $state.current.name);
    }

    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
  }

  angular
    .module('Global')
    .controller('HeaderController', ['$state', '$scope', '$rootScope', HeaderController]);
})();
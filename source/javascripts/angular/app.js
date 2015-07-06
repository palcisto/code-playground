(function () {
  'use strict';

  /* App Initialization */
  angular.module('app', [
    'ui.router',
    'Global',
    'Home',
    'Company'
  ])

  function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  };

  angular
    .module('app')
    .config(['$urlRouterProvider', appConfig]);
})();
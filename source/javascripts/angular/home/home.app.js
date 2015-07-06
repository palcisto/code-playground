(function() {
  'use strict';

  /* Home Module */
  angular.module('Home', []);

  function HomeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'javascripts/angular/home/home.html',
        controller: 'HomeViewCtrl'
      });
  }

  angular
    .module('Home')
    .config(['$stateProvider', HomeConfig]);
})();
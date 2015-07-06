(function() {
  'use strict';

  angular.module('Global', ['ui.router']);

  function GlobalConfig() {
    // $stateProvider
    //   .state('global', {
    //     abstract: true,
    //     url: '/',
    //     views: {
    //       'header': {
    //         templateUrl: 'javascripts/angular/global/header.html',
    //         controller: 'HeaderController'
    //       }
    //     }
    //   })
    //   .state('footer', {
    //     templateUrl: 'javascripts/angular/global/footer.html',
    //     controller: 'FooterController'
    //   });
  }

  function globalHeader() {
    return {
      restrict: 'E',
      templateUrl: 'javascripts/angular/global/header.html',
      controller: 'HeaderController'
    }
  }

  function globalFooter() {
    return {
      restrict: 'E',
      templateUrl: 'javascripts/angular/global/footer.html',
      replace: true
    }
  }

  angular
    .module('Global')
    .config(['$stateProvider', GlobalConfig])
    .directive('globalHeader', [globalHeader])
    .directive('globalFooter', [globalFooter]);
})();

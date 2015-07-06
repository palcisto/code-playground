(function() {
  'use strict';

  /* Company Module */
  angular.module('Company', []);

  function CompanyConfig($stateProvider) {
    $stateProvider
      .state('company', {
        url: '/company',
        templateUrl: 'javascripts/angular/company/company.html',
        controller: 'CompanyViewCtrl'
      });
  }

  angular
    .module('Company')
    .config(['$stateProvider', CompanyConfig]);
})();
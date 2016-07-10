(function() {
  'use strict';

  angular
    .module('findJobAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('find_job', {
        url: '/find_job',
        templateUrl: 'app/find_job/find_job.html',
        controller: 'FindJobController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

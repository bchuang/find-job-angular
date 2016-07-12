(function() {
  'use strict';

  angular
    .module('findJobAngular')
    .controller('FindJobController', FindJobController);

  /** @ngInject */
  function FindJobController(NgTableParams,$resource,$log) {
    var label = "FindJobController";
    var vm = this;
    var Api = $resource('http://localhost:8081/scrape');

    var jobsList = [];

    Api.get().$promise.then(function(data) {
      jobsList = data.results;

      vm.tableParams = new NgTableParams({}, {
        dataset: jobsList
      });

    });

  }

  FindJobController.$inject = ["NgTableParams", "$resource","$log"];


})();

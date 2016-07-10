(function() {
  'use strict';

  angular
    .module('findJobAngular')
    .controller('FindJobController', FindJobController);

  /** @ngInject */
  function FindJobController(NgTableParams,$resource) {
    var vm = this;

    var data = [{name: "Moroni", age: 50},{name: "Tom Moroni", age: 30}];
    vm.tableParams = new NgTableParams({}, { dataset: data});

    var scrape = $resource('http://localhost:8081/scrape');
    scrape.get({}, function(result){

    });

  }

  FindJobController.$inject = ["NgTableParams", "$resource"];


})();

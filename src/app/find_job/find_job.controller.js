(function() {
  'use strict';

  angular
    .module('findJobAngular')
    .controller('FindJobController', FindJobController);

  /** @ngInject */
  function FindJobController(NgTableParams,$resource) {
    var vm = this;

    var Api = $resource('http://localhost:8081/scrape');

    this.tableParams = new NgTableParams({}, {
      getData: function(params) {
        // ajax request to api
        return Api.get(params.url()).$promise.then(function(data) {
          params.total(data.inlineCount); // recal. page nav controls
          return data.results;
        });
      }
    });

  }

  FindJobController.$inject = ["NgTableParams", "$resource"];


})();

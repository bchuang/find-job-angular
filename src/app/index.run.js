(function() {
  'use strict';

  angular
    .module('findJobAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

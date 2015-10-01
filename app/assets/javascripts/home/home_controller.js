angular.module('ElgeaApp').controller('HomeController', [ function($mdDialog) {
  var _init, vm;
  vm = this;
  vm.loading = true;

  _init = function() {
    return vm.loading = false;
  };

  _init();

}]);

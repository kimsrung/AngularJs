(function () {
  'use strict';
  angular.module('ElgeaApp')
    .controller('RecetteDialogEtalementController', ['$mdDialog', 'parentScope',
      function($mdDialog, parentScope) {
        var vm = this, seperateRecette, _init;
        vm.parentScope = parentScope;
        vm.group = parentScope.group;
        vm.recette = parentScope.recette;
        vm.month = new Date(parentScope.month);
        vm.value = parentScope.value;
        vm.fois = parentScope.fois;
        vm.newRecettes = [];

        _init = function() {
          var i;
          for (i = 0; i < vm.fois; i++) {
            var object = {
              percentage: 50,
              value: vm.value/2,
              month: new Date(vm.month.getFullYear(), vm.month.getMonth() + i, vm.month.getDate())
            }
            vm.newRecettes.push(object);
          }
        };

        vm.cancel = function(e) {
          e.preventDefault()
          $mdDialog.hide('close');
        }

        _init();
      }
    ]);

})();
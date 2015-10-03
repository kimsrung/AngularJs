(function () {
  'use strict';
  angular.module('ElgeaApp')
    .controller('RecetteDialogController', ['$mdDialog', 'parentScope', 'recette', 'building', 'key', 'value',
      function($mdDialog, parentScope, recette, building, key, value) {
        var vm = this;
        vm.parentScope = parentScope
        vm.recette = recette
        vm.building = building
        vm.key = key
        vm.value = value

        vm.cancel = function() {
          $mdDialog.cancel();
        }
      }
    ]);

})();
(function () {
  'use strict';
  angular.module('ElgeaApp')
    .controller('RecetteDialogController', ['$mdDialog', 'parentScope', 'group', 'recette', 'key', 'value',
      function($mdDialog, parentScope, group, recette, key, value) {
        var vm = this;
        vm.parentScope = parentScope;
        vm.recette = recette;
        vm.group = group;
        vm.value = value;
        vm.key = key;
        vm.fois = 2;

        vm.cancel = function() {
          $mdDialog.cancel();
        }

        vm.openModify = function(e) {
          if (vm.form.$valid) {
            $mdDialog.hide();
            $mdDialog.show({
              targetEvent: e,
              locals: { parentScope: vm },
              controller: 'RecetteDialogEtalementController',
              controllerAs: 'ctrl',
              templateUrl: 'views/etalement_recette_dialog.html',
              clickOutsideToClose: false
            })
            .then(function(result) {

            }, function() {

            });
          };
        }
      }
    ]);

})();
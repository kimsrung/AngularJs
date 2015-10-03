(function () {
  'use strict';
  angular.module('ElgeaApp')
    .controller('RecetteDialogController', ['$mdDialog', 'parentScope', 'group', 'recette', 'month', 'value',
      function($mdDialog, parentScope, group, recette, month, value) {
        var vm = this;
        vm.parentScope = parentScope;
        vm.recette = recette;
        vm.group = group;
        vm.value = value;
        vm.month = new Date(month);
        vm.fois = 2;

        vm.cancel = function() {
          $mdDialog.cancel();
        }

        vm.openModify = function(e) {
          if (vm.form.$valid) {
            $mdDialog.hide();
            $mdDialog.show({
              targetEvent: event,
              parent: angular.element(document.body),
              locals: { parentScope: vm },
              templateUrl: 'views/etalement_recette_dialog.html',
              controller: 'RecetteDialogEtalementController',
              controllerAs: 'ctrl'
            })
            .then(function(result) {

            });
          };
        }
      }
    ]);

})();
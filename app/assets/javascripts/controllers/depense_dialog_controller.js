(function () {
  'use strict';
  angular.module('ElgeaApp')
    .controller('DepenseDialogController', ['$mdDialog', 'parentScope', 'group', 'depense', 'month', 'value',
      function($mdDialog, parentScope, group, depense, month, value) {
        var vm = this, _init;
        vm.parentScope = parentScope;
        vm.depense = depense;
        vm.group = group;
        vm.value = value;
        vm.month = new Date(month);
        vm.TVAOptions = ['5.5', '7', '10', '20']
        vm.affichageOptions = ['HT', 'TC']
        vm.pmdOptions = parentScope.pmdOptions;

        _init = function (){
          vm.tva = vm.TVAOptions[3]
          vm.affichage = vm.affichageOptions[1]
          vm.valueHT = (vm.value * vm.tva) / 100
          vm.probabilite = vm.pmdOptions[2]
        }

        vm.cancel = function() {
          $mdDialog.cancel();
        }

        vm.submit = function() {
          $mdDialog.hide();
        }

        // vm.openModify = function(e) {
        //   if (vm.form.$valid) {
        //     $mdDialog.show({
        //       targetEvent: event,
        //       parent: angular.element(document.body),
        //       locals: { parentScope: vm },
        //       templateUrl: 'views/etalement_recette_dialog.html',
        //       controller: 'DialogEtalementController',
        //       controllerAs: 'ctrl'
        //     });
        //   };
        // }
        _init();
      }
    ]);

})();
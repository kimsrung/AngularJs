(function () {
  'use strict';

  angular.module('ElgeaApp').controller('HomeController', ['$rootScope', '$mdDialog', '$filter', 'factory', function($rootScope, $mdDialog, $filter, factory) {
    var _init, sum, groupReport, vm = this;
    vm.loading = true;
    vm.pmrOptions = factory.pmrOptions;
    vm.pmdOptions = factory.pmdOptions;
    vm.editions   = factory.editions;
    vm.monthlyReport = factory.monthlyReport;
    vm.recettes   = factory.recettes;
    vm.depenses   = factory.depenses;
    vm.modifiedRecettes = []

    function sum (items) {
      return _(items).reduce(function(item, obj) {
        _(obj).each(function(value, key) {
          item[key] = (item[key] ? item[key] : 0) + (value ? value : 0)
        });
        return item;
      }, {});
    }

    function groupReport (lists, groupBy) {
      return _.chain(lists)
              .groupBy(groupBy)
              .map(function(value, key) {
                return {
                  name: key,
                  collections: value,
                  expandIconUrl: "assets/images/ic_expand_less.svg",
                  expandStatus: true,
                  totalMonthly: sum(_.pluck(value, 'months'))
                }
              })
              .value();
    }

    _init = function() {
      vm.pmr = vm.pmrOptions[0]
      vm.pmd = vm.pmdOptions[0]
      vm.recetteGroups = groupReport(vm.recettes, 'group')
      vm.depenseGroups = groupReport(vm.depenses, 'group')

      vm.monthlyReport.forEach(function(report) {
        report.totaltransitions     = report.totalRecettes - report.totalDepenses
        report.totaltransitionsCumulan = report.totalRecettesCumulan - report.totalDepensesCumulan
        report.finalResult  = report.totaltransitionsCumulan - report.totaltransitions
      });

      vm.loading = false;
    };

    vm.onClickExpandToggle = function(recettes) {
      recettes.expandStatus = !recettes.expandStatus;
      return recettes.expandIconUrl = recettes.expandStatus == true ? 'assets/images/ic_expand_less.svg' : 'assets/images/ic_expand_more.svg';
    };

    vm.updateRecetteValue = function(e, group, recette, month, value) {
      $mdDialog.show({
        targetEvent: e,
        parent: angular.element(document.body),
        locals: { parentScope: vm, group: group, recette: recette, month: month, value: value },
        templateUrl: 'views/recette_dialog.html',
        controller: 'RecetteDialogController',
        controllerAs: 'ctrl',
        clickOutsideToClose: false
      })
    };

    vm.resetRecettes = function() {
      var found = []
      found = $filter('filter')(vm.recettes, { type: vm.pmr});
      vm.recetteGroups = groupReport(found, 'group')
    };

    vm.resetDepenses = function() {
      var found = []
      found = $filter('filter')(vm.depenses, { type: vm.pmd});
      vm.depenseGroups = groupReport(found, 'group')
    };

    vm.isRecetteModified = function(recette, month) {
      recette = $filter('filter')(vm.modifiedRecettes, { name: recette.name })[0]
      return (angular.isUndefined(recette) ? false : _.contains(recette.modifiedRecetteMonths, month));
    }

    $rootScope.$on('updateRecettes', function(event, newRecettes, recette) {
      recette.modifiedRecetteMonths = _.map(newRecettes, function(num, key){ return key; });
      vm.modifiedRecettes = _.union(vm.modifiedRecettes, [recette]);

      vm.recetteGroups = groupReport(vm.recettes, 'group')
    });

    _init();

  }]);
})();
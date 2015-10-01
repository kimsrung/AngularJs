angular.module('ElgeaApp').controller('HomeController', ['$mdDialog', function($mdDialog) {
  var _init, vm;
  vm = this;
  vm.loading = true;
  vm.pmrOptions = ['Faibles', 'Moyennes', 'Certaines']
  vm.pmdOptions = ['Hypothèses', 'Possibles', 'Certaines']
  vm.editions   = [{id: 0, value: 'Edition niveau 1'}, {id: 1, value: 'Edition niveau 2'},{id: 2, value:  'Edition niveau 3'}]
  vm.monthlyReport = [
    {month: 'Jan 2015', totalRecettes: 300, totalDepenses: 300},
    {month: 'Feb 2015', totalRecettes: 1200, totalDepenses: 1200},
    {month: 'Mar 2015', totalRecettes: 560, totalDepenses: 560},
    {month: 'Apr 2015', totalRecettes: 0, totalDepenses: 0},
    {month: 'May 2015', totalRecettes: 34600, totalDepenses: 34600},
    {month: 'Jun 2015', totalRecettes: 200, totalDepenses: 200}]
  vm.recettes   = [
    {id: 0, value: 'Honoraires', totalMonthly: {'1': '', '2': 1200, '3': '', '4': '', '5': 34400, '6': ''}, materials: [
      {name: 'Cement', type: 'Faibles', months: {'1': '', '2': '', '3': '', '4': '', '5': 34400, '6': ''}},
      {name: 'Hammer', type: 'Certaines', months: {'1': '', '2': 1200, '3': '', '4': '', '5': '', '6': ''}}
      ]
    },
    {id: 1, value: 'Massy', totalMonthly: {'1': 400, '2': '', '3': 100, '4': '', '5': '', '6': 200}, materials: [
      {name: 'Brick Laying', type: 'Moyennes', months: {'1': 400, '2': '', '3': '', '4': '', '5': '', '6': ''}},
      {name: 'Hand Tools', type: 'Certaines', months: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': 200}},
      {name: 'Roofers Tools', type: 'Certaines', months: {'1': '', '2': '', '3': 100, '4': '', '5': '', '6': ''}},
      ]
    },
    {id: 2, value: 'Massy1', totalMonthly: {'1': '', '2': '', '3': 460, '4': '', '5': 200, '6': ''}, materials: [
      {name: 'Plastering Power Mixer', type: 'Certaines', months: {'1': '', '2': '', '3': 460, '4': '', '5': '', '6': ''}},
      {name: 'Wraparound Safety', type: 'Faibles', months: {'1': '', '2': '', '3': '', '4': '', '5': 200, '6': ''}}
      ]
    }
  ]

  vm.depenses   = [
    {id: 0, value: 'Charges bureau', totalMonthly: {'1': '', '2': 1200, '3': '', '4': '', '5': 34400, '6': ''}, materials: [
      {name: 'Cement', type: 'Faibles', months: {'1': '', '2': '', '3': '', '4': '', '5': 34400, '6': ''}},
      {name: 'Hammer', type: 'Certaines', months: {'1': '', '2': 1200, '3': '', '4': '', '5': '', '6': ''}}
      ]
    },
    {id: 1, value: 'Salaries', totalMonthly: {'1': 400, '2': '', '3': 100, '4': '', '5': '', '6': 200}, materials: [
      {name: 'Brick Laying', type: 'Moyennes', months: {'1': 400, '2': '', '3': '', '4': '', '5': '', '6': ''}},
      {name: 'Hand Tools', type: 'Certaines', months: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': 200}},
      {name: 'Roofers Tools', type: 'Certaines', months: {'1': '', '2': '', '3': 100, '4': '', '5': '', '6': ''}},
      ]
    },
    {id: 2, value: 'Electricity', totalMonthly: {'1': '', '2': '', '3': 460, '4': '', '5': 200, '6': ''}, materials: [
      {name: 'Plastering Power Mixer', type: 'Certaines', months: {'1': '', '2': '', '3': 460, '4': '', '5': '', '6': ''}},
      {name: 'Wraparound Safety', type: 'Faibles', months: {'1': '', '2': '', '3': '', '4': '', '5': 200, '6': ''}}
      ]
    }
  ]

  _init = function() {
    vm.loading = false;
    vm.pmr = vm.pmrOptions[0]
    vm.pmd = vm.pmdOptions[0]
    vm.recettes.forEach(function(recette) {
      recette.expandIconUrl = "assets/images/ic_expand_less.svg"
      recette.expandStatus = true;
    });

    vm.depenses.forEach(function(depense) {
      depense.expandIconUrl = "assets/images/ic_expand_less.svg"
      depense.expandStatus = true;
    });

    vm.monthlyReport.forEach(function(report) {
      report.totalRecettesCumulan = report.totalRecettes + report.totalRecettes*0.1
      report.totalDepensesCumulan = report.totalDepenses + report.totalDepenses*0.2
      report.totaltransitions     = report.totalRecettes - report.totalDepenses
      report.totaltransitionsCumulan = report.totalRecettesCumulan - report.totalDepensesCumulan
      report.finalResult  = report.totaltransitionsCumulan - report.totaltransitions
    });
  };

  vm.onClickExpandToggle = function(recettes) {
    recettes.expandStatus = !recettes.expandStatus;
    return recettes.expandIconUrl = recettes.expandStatus == true ? 'assets/images/ic_expand_less.svg' : 'assets/images/ic_expand_more.svg';
  };

  _init();

}]);
(function () {
  'use strict';
  angular.module('ElgeaApp')
    .controller('RecetteDialogEtalementController', ['$rootScope', '$mdDialog', 'parentScope',
      function($rootScope, $mdDialog, parentScope) {
        var vm = this, seperateRecette, _init, _toDateStringFormat, _decorateNewRecettes, _mergeRecette;
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

        // format: "2015-06"
        _toDateStringFormat = function(date) {
          var month, year;
          if (angular.isUndefined(date)) {
            return null;
          }
          year = date.getFullYear().toString();
          month = ('0' + (date.getMonth() + 1)).slice(-2).toString();

          return year + '-' + month;
        };

        _decorateNewRecettes = function(lists){
          lists.forEach(function(item) {
            item.month = _toDateStringFormat(item.month);
          });

          var result = lists.reduce(function(map, obj) {
            if(angular.isUndefined(map[obj.month])){ map[obj.month] = 0 };
            map[obj.month] += obj.value;
            return map;
          }, {});
          return result
        };

        _mergeRecette = function(){
          var dateString, isContain;
          dateString = _toDateStringFormat(vm.month);
          isContain = 0;

          angular.forEach(vm.newRecettes, function(value1, key1) {
            angular.forEach(vm.recette.months, function(value2, key2) {
              if (key1 == key2) {
                if (key1 == dateString) {
                  vm.recette.months[key2] = (value1 ? value1 : 0);
                  isContain = 1;
                } else{
                  vm.recette.months[key2] = (value1 ? value1 : 0) + (value2 ? value2 : 0);
                };
              };
            });
          });

          if (isContain == 0) {
            var obj = {}
            obj[dateString] = 0
            vm.newRecettes[dateString] = 0
            angular.extend(vm.recette.months, obj);
          };

          $rootScope.$broadcast('updateRecettes', vm.newRecettes, vm.recette);
        };

        vm.cancel = function() {
          $mdDialog.hide();
        }

        vm.updateRecetteValue = function(recette, index) {
          recette.value = (recette.percentage * vm.value)/100
        }

        vm.updateRecettePercentage = function(recette, index) {
          recette.percentage = (recette.value / vm.value)*100
        }

        vm.submit = function() {
          var totalEtalement;
          totalEtalement = _.pluck(vm.newRecettes, 'value').reduce((a, b) => a + b)
          if (totalEtalement == vm.value) {
            vm.newRecettes = _decorateNewRecettes(vm.newRecettes);
            _mergeRecette();
            $mdDialog.hide();
          } else {
            vm.errorForm = "Total amount is not valid."
          };
        }

        _init();
      }
    ]);

})();
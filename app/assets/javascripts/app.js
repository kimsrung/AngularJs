(function () {
  'use strict';
  angular
    .module('ElgeaApp', ['ngMaterial', 'ui.router', 'ngMessages', 'ngResource'])
    .config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider',
      function($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('brown')
          .accentPalette('green', {
            "default": '600'
          });
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
          url: '/',
          controller: 'AppController',
          controllerAs: 'ctrl',
          templateUrl: 'index.html'
        });
      }
    ])
    .controller('AppController', [ function($mdDialog) {
      var _init, vm;
      vm = this;
      vm.searchOptions = ['a', 'b', 'c']
      vm.selectSearch  = vm.searchOptions[0]
    }]);
})();

var pageLoad;

pageLoad = function() {
  return angular.bootstrap(document.getElementsByTagName('body')[0], ['ElgeaApp']);
};

$(document).on('ready page:load', function() {
  return pageLoad();
});
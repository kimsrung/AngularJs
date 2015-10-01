(function () {
  'use strict';
  angular
    .module('ElgeaApp', ['ngMaterial', 'ui.router', 'ngMessages', 'ngResource'])
    .config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider',
      function($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('brown')
          .accentPalette('red');
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
          url: '/',
          controller: 'HomeController',
          controllerAs: 'HomeCtrl',
          templateUrl: 'views/home.html'
        });
      }
    ]);
})();

var pageLoad;

pageLoad = function() {
  return angular.bootstrap(document.getElementsByTagName('body')[0], ['ElgeaApp']);
};

$(document).on('ready page:load', function() {
  return pageLoad();
});
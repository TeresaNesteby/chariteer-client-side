'use strict';

/**
 * @ngdoc overview
 * @name chariteerAngularApp
 * @description
 * # chariteerAngularApp
 *
 * Main module of the application.
 */
angular
  .module('chariteerAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  // .config(function($httpProvider) {
  //   $httpProvider.defaults.useXDomain = true;
  //   delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/volunteers', {
        templateUrl: 'views/volunteers.html',
        controller: 'VolunteersCtrl'
      })
       .when('/event_search', {
        templateUrl: 'views/volunteers/event_search.html',
        controller: 'CategoriesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

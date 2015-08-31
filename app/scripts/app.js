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
      .when('/sessions/login', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sessions/logout', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/volunteers/new', {
        templateUrl: 'views/new.html',
        controller: 'VolunteersCtrl',
        controllerAs: 'vol'
      })
      .when('/volunteers/profile', {
        templateUrl: 'views/volunteer_profile.html',
        controller: 'VolunteersCtrl',
        controllerAs: 'vol'
      })
       .when('/categories/events/search', {
        templateUrl: 'views/volunteers/event_search.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'cat'
      })
       .when('/categories/events/results', {
        templateUrl: 'views/volunteers/event_search_results.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .otherwise({
        redirectTo: '/sessions/login'
      });
  });

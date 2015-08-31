'use strict';

/**
 * @ngdoc overview
 * @name chariteerAngularApp
 * @description
 * # chariteerAngularApp
 *
 * Main module of the application.
 */
var app = angular.module('chariteerAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);


  // .config(function($httpProvider) {
  //   $httpProvider.defaults.useXDomain = true;
  //   delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // })

  app.config(function ($routeProvider) {
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
        templateUrl: 'views/volunteers/new.html',
        controller: 'VolunteersCtrl',
        controllerAs: 'vol'
      })
      .when('/volunteers/profile', {
        templateUrl: 'views/volunteers/volunteer_profile.html',
        controller: 'VolunteersCtrl',
        controllerAs: 'vol'
      })
       .when('/categories/events/search', {
        templateUrl: 'views/volunteers/event_search.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
       .when('/orgs/profile', {
        templateUrl: 'views/organizations/org_profile.html',
        controller: 'OrgsCtrl',
        controllerAs: 'orgs'
      })

      //  .when('/categories/events/results', {
      //   templateUrl: 'views/volunteers/event_search_results.html',
      //   controller: 'EventsCtrl',
      //   controllerAs: 'events'
      // })

      .otherwise({
        redirectTo: '/sessions/login'
      });
  });

  // app.factory('Organization', ['$resource', function($resource) {
  //   return $resource('/api/organizations/:id.json', null, {
  //     'get': {method: 'GET'}
  //   });
  // }]);

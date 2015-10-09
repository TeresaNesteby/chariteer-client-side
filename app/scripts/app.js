'use strict';

/**
 * @ngdoc overview
 * @name chariteerAngularApp
 * @description
 * # chariteerAngularApp
 *
 * Main module of the application.
 */
angular.module('chariteerAngularApp', [
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
      .when('/main', {
        templateUrl: 'views/volunteers/event_search.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/main/new', {
        templateUrl: 'views/main/new.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/main/logout', {
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
       .when('/orgs/new', {
        templateUrl: 'views/organizations/new.html',
        controller: 'OrganizationsCtrl',
        controllerAs: 'orgs'
      })
       .when('/orgs/profile', {
        templateUrl: 'views/organizations/org_profile.html',
        controller: 'OrganizationsCtrl',
        controllerAs: 'orgs'
      })
      .when('/orgs/event/new', {
        templateUrl: 'views/organizations/new_event.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })

      //  .when('/categories/events/results', {
      //   templateUrl: 'views/volunteers/event_search_results.html',
      //   controller: 'EventsCtrl',
      //   controllerAs: 'events'
      // })

      .otherwise({
        redirectTo: '/main'
      });
  });

  // app.factory('Organization', ['$resource', function($resource) {
  //   return $resource('/api/organizations/:id.json', null, {
  //     'get': {method: 'GET'}
  //   });
  // }]);

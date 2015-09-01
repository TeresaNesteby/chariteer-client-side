'use strict';

/**
 * @ngdoc function
 * @name chariteerAngularApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the chariteerAngularApp
 */
angular.module('chariteerAngularApp')
  .controller('EventsCtrl', function ($scope, $http, $log) {

    $scope.events = {};
      $http({
          method: 'GET',
          url: 'http://localhost:3000/api/organizations/3/events',
          dataType: 'jsonp'
        })
        .success(function(data) {
          $scope.categories = data.categories;
          $scope.events = data.events;
          $scope.organizations = data.organizations;
        });

  })

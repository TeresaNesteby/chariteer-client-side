'use strict';

/**
 * @ngdoc function
 * @name chariteerAngularApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the chariteerAngularApp
 */
angular.module('chariteerAngularApp')
  .controller('EventsCtrl', ["$scope", "$http", "$log", function ($scope, $http, $log) {

    $scope.getVolunteers = function(){
      return Math.floor((Math.random()*8)+1);
    }

    var controller = this;
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

    $scope.addEvent = function() {
      $http.post('http://localhost:3000/api/organizations/3/events',{
          name: $scope.name,
          org_name: $scope.org_name,
          place: $scope.place,
          date: $scope.date,
          time: $scope.time,
          num_of_volunteers_needed: $scope.num_of_volunteers_needed,
          image: $scope.image
      })
        .then(function(response) {
        // console.log("THE EVENT HAS BEEN CREATED!!", response.data.event);
          $scope.redirectToSearch = function() {
            window.location = "#/categories/events/search";
          }
      });
    };

    // function to toggle the join text
    $scope.toggle = true;

    // $scope.$watch('toggle', function(){
        // $scope.toggleJoin = $scope.toggle ? 'Join' : 'Unjoin';
    // })
  }]);

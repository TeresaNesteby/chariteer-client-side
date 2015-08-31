'use strict';

/**
 * @ngdoc function
 * @name chariteerAngularApp.controller:VolunteersCtrl
 * @description
 * # VolunteersCtrl
 * Controller of the chariteerAngularApp
 */
angular.module('chariteerAngularApp')
  .controller('VolunteersCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/volunteers',
      dataType: 'jsonp'
    })
    .success(function(response) {
      console.log(response);
    });

    $scope.banana="volunteer 1";
// this will post a new volunteer to the db
    $http({
    method: 'POST',
    url: 'http://localhost:3000/api/volunteers',
    dataType: 'jsonp'
    })
    .success(function(response) {
      console.log(response);
    });

    $scope.signUp = function() {
      //on submit
      //send new volunteer params to the database
      //redirect to the events search page
    }

  });

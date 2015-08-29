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

    // $http.get("http://localhost:3000/Api/volunteers/1")
    // .success(function(response) {
    //   console.log(response);

    // });

    $http({
      method: 'GET',
      url: 'http://localhost:3000/Api/volunteers/1',
      dataType: 'jsonp'
    })
    .success(function(response) {
      console.log(response);

    });


    $scope.banana="volunteer 1";

  });

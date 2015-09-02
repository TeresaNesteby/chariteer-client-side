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
    $http.post('http://localhost:3000/api/volunteers', {
        first_name: $scope.first_name,
        last_name: $scope.last_name,
        interest: $scope.interest,
        email: $scope.email,
        password: $scope.password
      })
    .then(function(response) {
        console.log("it worked! new org was created");
      }, function(response){
        console.log('this did not work, here\'s why:', response)
      })
  }

  });

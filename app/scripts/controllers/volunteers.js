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

    var controller = this;
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/volunteers',
      dataType: 'jsonp'
    })
    .success(function(response) {
      controller.vols_arr = response;
      // console.log(controller.orgs_arr)
      $scope.vol_first = controller.vols_arr[0];
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

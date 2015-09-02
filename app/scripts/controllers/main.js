'use strict';

/**
 * @ngdoc function
 * @name chariteerAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chariteerAngularApp
 */
angular.module('chariteerAngularApp')
  .controller('MainCtrl', ["$scope", "$http", function ($scope, $http) {

  $scope.logIn = function() {
    $http.post("http://localhost:3000/api/sessions", {
      email: $scope.email,
      password: $scope.password
    })
  .then(function(login_response) {
    console.log("TOKEN HAS BEEN CREATED: ", login_response.data.volunteer)
  })
  }

}]);

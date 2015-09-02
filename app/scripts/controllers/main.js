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

	$scope.ifLogIn = false;

  $scope.logIn = function() {
    $http.post("http://localhost:3000/api/sessions", {
      email: $scope.email,
      password: $scope.password
    })
  .then(function(login_response) {
    console.log("TOKEN HAS BEEN CREATED: ", login_response.data.volunteer.token)
    if (login_response.data.volunteer.token === "OK") {
    	$scope.redirect = function() {
    		$scope.ifLogIn = true;
    		window.location = "#/categories/events/search";
    	}
    }
  })
  }

}]);

// <button ng-click="redirect()">Click</button>
// In JS,

// $scope.redirect = function(){
//   window.location = "#/page.html";
// }
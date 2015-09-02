'use strict';

/**
 * @ngdoc function
 * @name chariteerAngularApp.controller:OrganizationsCtrl
 * @description
 * # OrganizationsCtrl
 * Controller of the chariteerAngularApp
 */
angular.module('chariteerAngularApp')
  .controller('OrganizationsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.banana="organization 1";

    var controller = this;
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/organizations',
      dataType: 'jsonp'
    })
    .success(function(response) {
      controller.orgs_arr = response;
      $scope.first_org = controller.orgs_arr[0];
    });



  $scope.signUp = function() {
    $http.post('http://localhost:3000/api/organizations', {
        name: $scope.name,
        mission_statement: $scope.mission_statement,
        phone_number: $scope.phone_number,
        logo_image: $scope.logo_image,
        website_url: $scope.website_url,
        email: $scope.email,
        non_profit: true,
        password: $scope.password
      })
    .then(function(response) {
        console.log("it worked! new org was created");
      }, function(response){
        console.log('this did not work, here\'s why:', response)
      })
  }
}]);

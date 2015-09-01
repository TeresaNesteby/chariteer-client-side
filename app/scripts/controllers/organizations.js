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

    // $scope.organizations = Organization.query();

    $scope.banana="organization 1";

    var controller = this;
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/organizations',
      dataType: 'jsonp'
    })
    .success(function(response) {
      // console.log(response);
      controller.orgs_arr = response;
      // displays first organization
      $scope.first_org = controller.orgs_arr[0];

    });

// removed the orgs.
  $scope.signUp = function() {
    var dataFromForm = {
      organization: {
        name: $scope.name,
        mission_statement: $scope.mission_statement,
        phone_number: $scope.phone_number,
        logo_image: $scope.logo_image,
        website_url: $scope.website_url,
        email: $scope.email,
        password: $scope.password
      }
    }
    console.log(dataFromForm)
// removed the ; before .fail
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/organizations',
      data: dataFromForm,
      dataType: 'jsonp'
    })
    .then(function(response) {
      console.log("it worked! new org was created");
    }, function(error){
      console.log('this did not work, here\'s why:', error)
    });
  }

}]);

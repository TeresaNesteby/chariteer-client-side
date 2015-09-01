'use strict';

/**
 * @ngdoc function
 * @name chariteerAngularApp.controller:OrgsCtrl
 * @description
 * # OrgsCtrl
 * Controller of the chariteerAngularApp
 */
angular.module('chariteerAngularApp')
  .controller('OrgsCtrl', ['$scope', '$http', function ($scope, $http) {

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


  $scope.signUp = function(form) {
    dataFromForm = {
      $scope.name = orgs.name,
      $scope.mission_statement = orgs.mission_statement,
      $scope.phone_number = orgs.phone_number,
      $scope.logo_image = orgs.logo_image,
      $scope.website_url = orgs.website_url,
      $scope.email = orgs.email,
      $scope.password = orgs.password
    }
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/organizations/create',
      data: dataFromForm,
      dataType: 'jsonp'
    })
    .success(function(response) {
      console.log("it worked! new org was created");
    });
    .fail(function(response){
      console.log('this did not work, here\'s why:' + response)
    });
    }

  }]);

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

  }]);

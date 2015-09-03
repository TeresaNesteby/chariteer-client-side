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

    // var controller = this;
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/organizations',
      dataType: 'jsonp'
    })
    .success(function(response) {
      $scope.orgs_arr = response.organizations;
      $scope.first_org = $scope.orgs_arr[0];
      $scope.events = response.events;
      $scope.eventsForOrg = $scope.getEventsByOrg($scope.events, 1);
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

  $scope.getEventsByOrg = function(events, org_id) {
    var events_arr = [];

    for (var i = 0; i < events.length; i++) {
      if (events[i].organization_id === org_id) {
        events_arr.push(events[i]);
      }
    }

    return events_arr;
  };

  
}]);

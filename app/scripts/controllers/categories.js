'use strict';

/**
 * @ngdoc function
 * @name chariteerAngularApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the chariteerAngularApp
 */
angular.module('chariteerAngularApp')
  .controller('CategoriesCtrl', function ($scope, $http) {

    // $scope.categories = [
    //   {type: "Animals", id: 1},
    //   {type: "Health", id: 2},
    //   {type: "Kids", id: 3},
    //   {type: "Human Rights", id: 4},
    //   {type: "Sports", id: 5}
    // ]

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // $http.get("http://localhost:3000/Api/volunteers/1")
    // .success(function(response) {
    //   console.log(response);

    // });
    var controller = this;
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/categories',
      dataType: 'jsonp'
    })
    .success(function(response) {
      // console.log(response);
      controller.categories_arr = response;
    });


    $scope.banana = "inside the categories controller";
    console.log($scope.banana);
    $scope.findEventsByCategory = function() {
      return $scope.categories;
      // when button clicked, store category_id in a variable
      // find events from DB a/w that category_id & return results or store results in variable -->

    }
    $scope.displayEvents = function(eventsByCategory) {


      // display event: logo, description
      // append a volunteer button ("I'm In!")
      // hide all the category buttons
    }
  });



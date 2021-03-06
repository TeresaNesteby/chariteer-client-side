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
  });



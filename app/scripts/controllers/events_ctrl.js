'use strict';

/**
 * @ngdoc function
 * @name chariteerAngularApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the chariteerAngularApp
 */
angular.module('chariteerAngularApp')
  .controller('EventsCtrl', function ($scope, $http) {
    $scope.cat_events = [];
    var controller = this;

    // $scope.categories_arr = null;
        // $http({
        //   method: 'GET',
        //   url: 'http://localhost:3000/api/categories'
        // })
        // .success(function(categories) {
        //   // console.log(categories);
        //   // $scope.categories_arr = categories
        //   $http({
        //       method: 'GET',
        //       url: 'http://localhost:3000/api/organizations/3/events',
        //       dataType: 'jsonp'
        //     })
        //     .success(function(events) {
        //       // console.log(categories);
        //       console.log(events);
        //       $scope.categories_arr = function() {
        //         // var cat_events = [];
        //         for (var i = 0; i < events.event.length; i++) {
        //           if (events.event[i].category_id === 3) {
        //             $scope.cat_events.push(events.event[i]);
        //           }
        //         }
        //         // console.log("HERE"); not working
        //         // console.log(cat_events);
        //         return $scope.cat_events;
        //       }

            // console.log(controller.categories_arr());
            // });
        // });

          $http({
              method: 'GET',
              url: 'http://localhost:3000/api/organizations/3/events',
              dataType: 'jsonp'
            })
            .success(function(events) {
              // console.log(categories);

              console.log(events.event);
              controller.events = events.event;
            });

    // console.log("Categories are: ", categories());

  // console.log(controller.categories_arr());

    // $scope.banana = "inside the categories controller";
    // console.log($scope.banana);


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



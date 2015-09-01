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

              .success(function(data) {

              $scope.categories = data.category;
              $scope.events = data.event;
              $scope.organizations = data.organization;

            });

    // console.log("Categories are: ", categories());


  // console.log(controller.categories_arr());

  console.log($scope.events);

    // $scope.banana = "inside the categories controller";
    // console.log($scope.banana);



    $scope.findEventsByCategory = function() {

 $scope.applySearchFilter = function() {
        var nameFilter = $scope.filters.name.toLowerCase();
        var phoneFilter = $scope.filters.phone;
        var cityFilter = $scope.filters.city;
        var showAll = 0 === nameFilter.length && 0 === phoneFilter.length && 0 === cityFilter.length;
        angular.forEach($scope.users, function(user) {
            if (showAll) {
                user.excludedByFilter = false;
            } else {
                user.excludedByFilter = (user.name.toLowerCase().indexOf(nameFilter) === -1)
                                        || (user.phone.indexOf(phoneFilter) === -1)
                                        || (user.city.indexOf(cityFilter) === -1);
            }
        });
    }



    $scope.findEventsByCategoryId = function(id) {
      var categoryFilter = $scope.filters.category.id
      console.log("hello" + id);

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



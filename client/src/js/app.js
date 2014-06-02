(function () {
  'use strict';

  // create the angular app
  angular.module('myApp', [
    'myApp.controllers',
    'd3Example'
    ]);

  // setup dependency injection
  angular.module('d3', []);
  angular.module('myApp.controllers', []);
  angular.module('d3Example', ['d3']);

}());
'use strict';

/* @ngdoc object
 * @name 4GeeksAngularCourse
 * @requires $urlRouterProvider
 *
 * @description
 *
 */
angular
  .module('4GeeksAngularCourse', [
    'ui.router',
    'ui.bootstrap',
    'home'
  ]);

angular
  .module('4GeeksAngularCourse')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  });

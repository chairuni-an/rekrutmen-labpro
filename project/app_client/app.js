var picshareApp = angular.module('picshareApp', ['ngRoute', 'ngResource']);

picshareApp.config(function($locationProvider, $routeProvider) {
   $routeProvider.when('/error', {
       templateUrl: 'templates/error.html'
   }).when('/:username',
    {
        templateUrl: 'templates/profile.html'
    }).when('/', {
       templateUrl: 'templates/home.html'
   })
    $locationProvider.html5Mode(true);
});
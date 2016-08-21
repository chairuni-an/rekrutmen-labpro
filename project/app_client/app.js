var picshareApp = angular.module('picshareApp', ['ngAnimate', 'ngSanitize', 'ngRoute', 'ngResource', 'ngFileUpload']);

picshareApp.config(function($locationProvider, $routeProvider) {
   $routeProvider.when('/error', {
       templateUrl: 'templates/error.html'
   })
   .when('/register', {
       templateUrl: 'templates/register.html'
   })
   .when('/login', {
       templateUrl: 'templates/login.html'
   })
   .when('/thanks', {
       templateUrl: 'templates/thanks.html'
   })
   .when('/account', {
       templateUrl: 'templates/account.html'
   })
   .when('/notifications', {
       templateUrl: 'templates/notifcations.html'
   })
   .when('/auth/twitter', {
       templateUrl: 'templates/auth.html'
   })
   .when('/search/:q', {
       templateUrl: 'templates/search.html'
   })
   .when('/:username', {
       templateUrl: 'templates/profile.html'
   })
   .when('/posts/:id', {
       templateUrl: 'templates/post.html'
   })
   .when('/', {
       templateUrl: 'templates/home.html'
   })
   $locationProvider.html5Mode(true);
});

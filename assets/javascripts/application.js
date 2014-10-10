angular.module('resumeApp', ['ngRoute']).
  config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'ResumeController',
        templateUrl:'/resume/sections/goal.html'
      })
      .when('/goal', {
        controller:'ResumeController',
        templateUrl:'/resume/sections/goal.html'
      })
      .when('/education', {
        controller:'ResumeController',
        templateUrl:'/resume/sections/education.html'
      })
      .when('/links', {
        controller:'ResumeController',
        templateUrl:'/resume/sections/links.html'
      })
      .when('/private', {
        controller:'ResumeController',
        templateUrl:'/resume/sections/private.html'
      })
      .when('/public', {
        controller:'ResumeController',
        templateUrl:'/resume/sections/public.html'
      })
      .when('/publications', {
        controller:'ResumeController',
        templateUrl:'/resume/sections/publications.html'
      })
      .when('/technologies', {
        controller:'ResumeController',
        templateUrl:'/resume/sections/technologies.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .controller('ResumeController', function($scope) {
    $scope.body_class = 'resume';
    $scope.tabs = {home: {class: ''}, resume: {class: 'active'}};
  });

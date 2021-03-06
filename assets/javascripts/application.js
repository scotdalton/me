angular.module('resumeApp', ['ngRoute','ui.bootstrap']).
  config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'ResumeCtrl',
        templateUrl:'/resume/sections/goal.html'
      })
      .when('/goal', {
        controller:'ResumeCtrl',
        templateUrl:'/resume/sections/goal.html'
      })
      .when('/education', {
        controller:'ResumeCtrl',
        templateUrl:'/resume/sections/education.html'
      })
      .when('/links', {
        controller:'ResumeCtrl',
        templateUrl:'/resume/sections/links.html'
      })
      .when('/private', {
        controller:'ResumeCtrl',
        templateUrl:'/resume/sections/private.html'
      })
      .when('/publications', {
        controller:'ResumeCtrl',
        templateUrl:'/resume/sections/publications.html'
      })
      .when('/public', {
        controller:'ResumeCtrl',
        templateUrl:'/resume/sections/public.html'
      })
      .when('/technologies', {
        controller:'ResumeCtrl',
        templateUrl:'/resume/sections/technologies.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .controller('ResumeCtrl', function($scope) {
    $scope.isCollapsed = true;
    $scope.$on('$locationChangeStart', function(event) {
      $scope.isCollapsed = true;
    });
  });

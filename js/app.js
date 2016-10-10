var app = angular.module('site', ['ui.bootstrap', 'ngAnimate', 'ngRoute']);


app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl:'../partials/home.html'
  })
  .when('/evenements', {
    templateUrl: '../partials/evenements.html',
    controller: 'evenements_ctrl'
  })
  .when('/themes', {
    templateUrl: '../partials/themes.html',
    controller: 'themes_ctrl'
  })
  .when('/annees', {
    templateUrl: '../partials/annees.html',
    controller: 'annees_ctrl'
  })
  .when('/parcours', {
    templateUrl: '../partials/parcours.html',
    controller: 'parcours_ctrl'
  })
  .when('/contact', {
    templateUrl: '../partials/contact.html'
  });

}]);

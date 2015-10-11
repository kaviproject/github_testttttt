'use strict';

/**
 * @ngdoc overview
 * @name eeaDoerApp
 * @description
 * # eeaDoerApp
 *
 * Main module of the application.
 */
angular
  .module('eeaDoerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'times.tabletop',
    'angular.filter',
    'ngLodash'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/glossary', {
        templateUrl: 'views/glossary.html',
        controller: 'GlosCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'CtctCtrl'
      })
       .when('/FAQs', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl'
      })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
 /*.config(function(TabletopProvider){
    TabletopProvider.setTabletopOptions({
      key:'https://docs.google.com/spreadsheets/d/1lizvDw-cztrOAaYOPdemJEXik9oyO2t4IepGOjcDdzk/pubhtml',
      simpleSheet: true
    })
 });*/

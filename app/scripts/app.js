/**
 * Created by tuw296 on 1/27/17.
 */
var myApp = angular.module('NoteTakingApp', ['ngRoute', 'color.picker'])
  .constant("AppConstants", {
    "api": "http://localhost:3000"
  })
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
      .when("/", {
        templateUrl: 'html/home.html',
        controller: 'NoteAppController',
        controllerAs: 'mainCtrl'
      })
      .when('/newNote', {
        templateUrl : 'html/note.html',
        controller : 'NewNoteController',
        controllerAs: 'newCtrl'
      })
      .when('/note/:id', {
        templateUrl : 'html/note.html',
        controller : 'EditNoteController',
        controllerAs: 'editCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  }])
  .run([ function(){

  }]);
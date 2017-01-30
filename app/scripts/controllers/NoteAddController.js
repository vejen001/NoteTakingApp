/**
 * Created by tuw296 on 1/28/17.
 */
'use strict';

angular.module('NoteTakingApp')
  .controller('NewNoteController', function ($scope, $routeParams, $location, Notes, $rootScope) {

    $scope.isDone = true;

    $scope.color= "#FFFFA5";

    $scope.options = {
      placeholder: 'Select the color',
      id: 'myColorPicker',
      format: 'hex',
      round: 'true'
    };

    $scope.addEditText = "Add";


    $scope.done = function(){
      var text = $scope.text;
      var title = $scope.title;
      var color = $scope.color;
      if(text || title){
        var newNote = {
          title : title,
          text : text,
          color: color
        }

        Notes.addNote(function (res) {
          $rootScope.$emit('updateNote');
          $location.url('/');
        }, function (error) {
          console.log('Error: '+error)
        }, newNote);
      }
    }


  });
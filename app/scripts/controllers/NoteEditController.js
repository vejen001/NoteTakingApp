/**
 * Created by tuw296 on 1/28/17.
 */
'use strict';

angular.module('NoteTakingApp')
  .controller('EditNoteController', function ($scope, $routeParams, $location, Notes, $rootScope) {

    $scope.options = {
      placeholder: 'Select the color',
      id: 'myColorPicker',
      format: 'hex',
      round: 'true'
    };

    $scope.addEditText = "Edit";
    var id = $routeParams.id;


    Notes.retrieveNote(id, function(note){
        $scope.title = note.title;
        $scope.text = note.text;
        $scope.color = note.color;
    }, function (error) {
      $location.url('/');
      console.log('Error: '+error)
    });

    $scope.done = function(){
      var text = $scope.text;
      var title = $scope.title;
      var color = $scope.color;
      if(text || title){
        var newNote = {
          _id: id,
          title : title,
          text : text,
          color: color
        }

        Notes.editNote(function (res) {
          $rootScope.$emit('updateNote');
          $location.url('/');
        }, function (error) {
          console.log('Error: '+error)
        }, newNote);
      }
    }

  });

/**
 * Created by tuw296 on 1/28/17.
 */
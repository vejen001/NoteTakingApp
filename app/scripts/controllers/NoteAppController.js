/**
 * Created by tuw296 on 1/27/17.
 */
var myApp = angular.module('NoteTakingApp');
myApp.controller('NoteAppController', ['$scope', '$rootScope', 'Notes', function($scope, $rootScope, Notes){
  $scope.notes = [];

  Notes.retrieveAllNotes(function (res) {
    $scope.notes = res;
  }, function (error) {
    console.log('Error: '+error)
  });


  $scope.delete = function(note){
    Notes.deleteNote(note._id, function(res){
      for (var i = 0; i < $scope.notes.length; i++) {
        if($scope.notes[i]._id === note._id){
          $scope.notes.splice(i, 1);
        }
      };
    }, function (error) {
      console.log('Error: '+error)
    });
  }

  var unbindUpdateListener = $rootScope.$on('updateNote', function(events, args) {
    Notes.retrieveAllNotes(function (res) {
      $scope.notes = res;
    }, function (error) {
      console.log('Error: '+error)
    });
  });

  $scope.$on('$destroy', function() {
    unbindUpdateListener();
  });

}]);
'use strict';

angular.module('NoteTakingApp')
  .factory('Notes', function ($rootScope, $q, $http, AppConstants) {

    var baseUrl = AppConstants.api;

    return {
      retrieveAllNotes: function(success, error) {
        $http.get(baseUrl + '/noteslist').success(success).error(error)
      },
      retrieveNote: function(data, success, error) {
        $http.get(baseUrl + '/getnote/'+data).success(success).error(error)
      },
      addNote: function(success, error, data) {
        $http.post(baseUrl + '/addnote', data).success(success).error(error)
      },
      deleteNote: function(data, success, error) {
        $http.delete(baseUrl + '/deletenote/'+data).success(success).error(error)
      },
      editNote: function(success, error, data) {
        $http.put(baseUrl + '/editnote', data).success(success).error(error)
      }
    };
  });

/**
 * Created by tuw296 on 1/28/17.
 */

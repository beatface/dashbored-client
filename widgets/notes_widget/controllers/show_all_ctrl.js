"use strict";

NotesApp.controller('ShowNotesCtrl', ['$scope', '$http', '$state', 'StateFactory', function($scope, $http, $state, StateFactory) {
    $scope.allNotes = "";
    $scope.noteCount = null;

    // set up if statement so that, if widget state = 0, this http.get runs, then on success, set widget state = 1
    $http.get("http://127.0.0.1:3153/notes")
    .then(function(data) {
        $scope.allNotes = data.data;
        $scope.noteCount = data.data.length;
    },
    function(err) {
        console.log("Oh, no! An error! ", err.data);
    });

    $scope.deleteNote = (id) => {
        $http.delete(`http://127.0.0.1:3153/notes/${id}`)
        .then(function(success) {
            $state.go($state.current, {}, {reload: true});
        },
        function(err) {
            console.log("Oh, no! An error! ", err.data);
        });
    };

}]);

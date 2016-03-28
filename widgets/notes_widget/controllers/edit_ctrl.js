"use strict";

NotesApp.controller('EditNoteCtrl', ['$scope', '$http', '$state', 'NoteFactory', function($scope, $http, $state, NoteFactory) {

    let thisNote = NoteFactory.getNote();

    $scope.noteTitle = thisNote.title;
    $scope.noteContent = thisNote.content;

    $scope.updateNote = (title, note) => {
        $http.post(`http://127.0.0.1:3153/notes/${thisNote.id}`, { "title": title, "content": note })
        .then(function(success) {
            console.log(`The note got posted!`, success.data);
        },
        function(err) {
            console.log("Something went wrong: ", err.data);
        });
    };

}]);

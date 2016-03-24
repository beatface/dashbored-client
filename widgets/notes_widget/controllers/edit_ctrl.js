"use strict";

NotesApp.controller('EditNoteCtrl', ['$scope', '$http', '$state', 'NoteFactory', function($scope, $http, $state, NoteFactory) {
    console.log("add a note controller!!");

    let thisNote = NoteFactory.getNote();
    console.log("this note is: ", thisNote);

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
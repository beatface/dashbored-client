"use strict";

NotesApp.controller('AddNotesCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    console.log("add a note controller!!", $scope);

    // $('#notes-widget').draggable();
    $scope.saveNote = (title, note) => {
        $http.post(`http://127.0.0.1:3153/notes`, {"title": title, "content": note})
        .then(function(success) {
            console.log(success.data);
        },
        function (err) {
            console.log("There was an error: ", err.data);
        });
    };

}]);

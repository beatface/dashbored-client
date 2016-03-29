"use strict";

NotesApp.controller('ShowOneCtrl', ['$scope', '$http', '$stateParams', 'NoteFactory', function($scope, $http, $stateParams, NoteFactory) {

    const id = $stateParams.id;
    $scope.note = "";
    $scope.id = id;

    $http.get(`http://127.0.0.1:3153/notes/${id}`)
    .then(function(data) {
        data.data[0].Content = data.data[0].Content.replace(/<br>/g, '\n');
        $scope.note = data.data[0];
        let wordsArray = data.data[0].Content.split(" ");
        $scope.wordCount = wordsArray.length;
        NoteFactory.setNote(id, data.data[0].Title, data.data[0].Content);
    });

}]);

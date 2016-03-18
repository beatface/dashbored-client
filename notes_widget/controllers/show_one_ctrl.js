"use strict";

app.controller('ShowOneCtrl', ['$scope', '$http', '$stateParams', 'NoteFactory', function($scope, $http, $stateParams, NoteFactory) {
    console.log("notes just one!!");

    const id = $stateParams.id;
    $scope.note = "";
    $scope.id = id;

    $http.get(`http://127.0.0.1:3153/notes/${id}`)
    .then(function(data) {
        console.log(data.data);
        $scope.note = data.data[0];
        NoteFactory.setNote(id, data.data[0].Title, data.data[0].Content);
    });

}]);

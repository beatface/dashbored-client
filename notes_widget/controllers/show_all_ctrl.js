"use strict";

app.controller('ShowNotesCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    console.log("notes controller!!");
    $scope.allNotes = "";

    $http.get("http://127.0.0.1:3153/notes")
    .then(function(data) {
        console.log(data);
        $scope.allNotes = data.data;
    },
    function(err) {
        console.log("Oh, no! An error! ", err.data);
    });

    $scope.deleteNote = (id) => {
        $http.delete(`http://127.0.0.1:3153/notes/${id}`)
        .then(function(success) {
            console.log(success.data);
            $state.go($state.current, {}, {reload: true});
        },
        function(err) {
            console.log("Oh, no! An error! ", err.data);
        });
    };

}]);

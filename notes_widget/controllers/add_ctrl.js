"use strict";

app.controller('AddNotesCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    console.log("add a note controller!!");

    $scope.saveNote = (title, note) => {
        $http.post(`127.0.0.1:3153/notes`)
        .then(function(err) {
            if (err) throw err;
            console.log(`the fuckin note got posted!`);
        });
    };



}]);

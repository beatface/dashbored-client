"use strict";

app.controller('ShowNotesCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("notes controller!!");
    $scope.allNotes = "";

    $http.get(`127.0.0.1:3153/notes`)
    .then(function(data) {
        console.log(data);
        $scope.allNotes = data.data;
    });


}]);

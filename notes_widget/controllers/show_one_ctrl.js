"use strict";

app.controller('ShowOneCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    console.log("notes controller!!");

    const id = $stateParams.id;
    console.log("ID: ", id);


    $http.get(`127.0.0.1:3153/notes/${id}`)
    .then(function(data) {
        console.log(data.data);
        $scope.note = data.data;
    });


}]);

"use strict";

TwitterApp.controller('DefaultCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    console.log("default twitter controller!!");

    $http.get("http://127.0.0.1:3153/twitter")
    .then(function(success) {
        console.log("Yas! Tweet success!", success.data);
        $scope.tweets = success.data.statuses;
    },
    function(err) {
        console.log('Error loading tweets. :(');
    });


}]);

angular.bootstrap(document.getElementById("twitter-widget"), ['TwitterWidget']);

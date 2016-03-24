"use strict";

TwitterApp.controller('DefaultCtrl', ['$scope', '$http', '$state', 'StateFactory', function($scope, $http, $state, StateFactory) {

    console.log(StateFactory.getState());
    if (StateFactory.getState() === 0) {
        $http.get("http://127.0.0.1:3153/twitter")
        .then(function(success) {
            console.log("Yas! Tweet success!", success.data);
            $scope.tweets = success.data.statuses;
            StateFactory.setState();
            console.log(StateFactory.getState());
        },
        function(err) {
            console.log('Error loading tweets. :(');
        });
    }

}]);

angular.bootstrap(document.getElementById("twitter-widget"), ['TwitterWidget']);

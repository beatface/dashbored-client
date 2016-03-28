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

    $scope.searchTweets = (search) => {
        console.log("before:", search);
        search = search.replace(/#/g, '%23');
        console.log("after:", search);
        $http.get("http://127.0.0.1:3153/twitter/" + search)
        .then(function(success) {
            console.log("Yas! Tweet success!", success.data);
            $scope.tweets = success.data.statuses;
        },
        function(err) {
            console.log('Error loading tweet search. :(');
        });
    };

}]);

angular.bootstrap(document.getElementById("twitter-widget"), ['TwitterWidget']);

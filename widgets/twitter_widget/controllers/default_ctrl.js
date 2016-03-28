"use strict";

TwitterApp.controller('DefaultCtrl', ['$scope', '$http', '$state', 'StateFactory', function($scope, $http, $state, StateFactory) {

    if (StateFactory.getState() === 0) {
        $http.get("http://127.0.0.1:3153/twitter")
        .then(function(success) {
            $scope.tweets = success.data.statuses;
            StateFactory.setState();
        },
        function(err) {
            console.log('Error loading tweets. :(');
        });
    }

    $scope.searchTweets = (search) => {
        search = search.replace(/#/g, '%23');
        $http.get("http://127.0.0.1:3153/twitter/" + search)
        .then(function(success) {
            $scope.tweets = success.data.statuses;
        },
        function(err) {
            console.log('Error loading tweet search. :(');
        });
    };

}]);

angular.bootstrap(document.getElementById("twitter-widget"), ['TwitterWidget']);

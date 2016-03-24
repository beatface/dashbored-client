"use strict";

TwitterApp.factory('StateFactory', function() {

    var twitter_state = 0;

    return {
        setState () {
            twitter_state = 1;
        },
        getState () {
            return twitter_state;
        }
    };
});

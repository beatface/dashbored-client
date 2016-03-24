"use strict";

angular.module("StateModule", [])
.factory('StateFactory', function() {

    let twitter_state = 0;
    let notes_state = 0;
    let clock_state = 0;
    let weather_state = 0;


    return {
        setState (widget) {
            widget = 1;
        }
    };
});

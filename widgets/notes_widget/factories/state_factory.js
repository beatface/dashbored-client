"use strict";

NotesApp.factory('StateFactory', function() {

    var notes_state = 0;

    return {
        setState () {
            notes_state = 1;
        },
        getState () {
            return notes_state;
        }
    };
});

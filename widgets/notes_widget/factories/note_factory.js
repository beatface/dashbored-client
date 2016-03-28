"use strict";

NotesApp.factory('NoteFactory', function() {

    var note = {};

    return {
        setNote: function(id, title, content) {
            note.id = id;
            note.title = title;
            note.content = content;
        },
        getNote: function() {
            return note;
        }
    };

});

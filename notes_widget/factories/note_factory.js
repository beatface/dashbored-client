"use strict";

app.factory('NoteFactory', function() {
    console.log('note factory');

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

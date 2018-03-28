//created note schema passed in
var Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
//require Note.js
var noteController = require("../models/Note.js");

module.exports = noteController;
    



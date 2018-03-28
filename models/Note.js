//require Mongoose
var mongoose = require('mongoose');
//create schema
var Schema = mongoose.Schema;

var db = require("../connection");

//create note schema
var NoteSchema = new Schema({
  noteText: {
    type:String
  }
});

var Note = mongoose.model('Note', NoteSchema);
module.exports = Note;



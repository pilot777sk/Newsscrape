//require Mongoose
var mongoose = require('mongoose');
// require connection db
var db = require("../config/connection");

//create schema
var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  summary: {
    type:String,
    required:true
  },
  note: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Note"
  }]
});

var Headline = mongoose.model('Headline', HeadlineSchema);
module.exports = Article;
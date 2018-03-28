//require Mongoose
var mongoose = require('mongoose');


//create schema
var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({
  headline: {
    type:String,
    required:true
  },
  summary: {
    type:String,
    required:true
  },
  url: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
    // note stores a Note id and use to populate the Article
  note: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Note"
  }]
});
// Creates model from schema
var Headline = mongoose.model('Headline', HeadlineSchema);
module.exports = Headline;







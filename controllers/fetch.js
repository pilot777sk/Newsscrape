import { Mongoose } from 'mongoose';

// the controllers interact with the front end and the database interaction with the models
// require mongoose
var mongoose = require('mongoose');





mongoose.connect('mongodb://heroku_////////////');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
Mongoose.connect(MONGODB_URI,{
  useMongoClient: true
});



var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) 
{
  console.log("Mongoose Error: ", error);
});

//Mongoose connedtion to db
db.once("open", function() 
{
  console.log("Mongoose connection successful!");
});

// export the database
module.exports = db;
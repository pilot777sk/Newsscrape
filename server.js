var express = require("express");
var bodyParser = require("body-parser");
var logger = require('morgan');
var hbs = require('express-handlebars');
var mongoose = require('mongoose');
// required routes 
//var routes = require('./routes/api');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI,{
  useMongoClient: true
});



var db = mongoose.connection;

// mongoose errors
db.on("error", function(error) 
{
  console.log("Mongoose Error: ", error);
});

//mongoose connection to db
db.once("open", function() 
{
  console.log("Mongoose connection successful!");
});

// Init express
var app = express();



// set up the HBS view engine
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs', partialsDir: [__dirname + '/views/partials']}));
app.set('view engine', 'hbs');

//morgan logger
app.use(logger('dev'));

// set up body-parser        ???? true or false ?????
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// set the public static directory
app.use(express.static('public'));


// Import routes
//app.use('/', routes);



// Launch App
var port = process.env.PORT || 3000;


app.listen(port, function()
{
  console.log('Running on port: ' + port);
});
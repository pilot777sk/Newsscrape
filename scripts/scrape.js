var express = require('express');
var router = express.Router();
var Headline = require('../models/Headline');
var Note = require('../models/Note');
var scraper = require('../controller/scraper');


// home page route
router.get('/', function(request, response) 
{

	// find all the headlines
	Headline.find({}, function(error, data) 
	{

		// error finding headlines
		if (error) console.log("error finding articles", error);

		response.render('index', {title: "NewsScraper", headlines: data});
	
	});

}); 


// scrape route
router.get('/scrape', function(request, response) 
{

	// run the scrapedWeb function from scraper
	scraper.scrapedWeb(function() 
	{

		// scrape then return to home page
		response.redirect('/');
	});
});

// get notes route
router.get('/note/:id', function(request, response) 
{
	Headline.findOne({_id: request.params.id})
		.populate("note")
		.exec(function(error, doc) {
			if (error) console.log("error finding notes", error);

			response.send(doc.note);
			
		});
});

// post notes route
router.post('/note/:id', function(request, response) 
{

	var newNote = new Note(request.body);

	newNote.save(function(error, doc) 
	{
		Article.findOneAndUpdate(
			{_id: request.params.id},
			{$push: {note: doc._id}},
			{new: true},
			function(err, anotherDoc) {
				if (error) console.log("post error", error);
				response.send(anotherDoc);
			});
	});
});


// delete note 
router.post('/deleteNote/:id', function(request, response) 
{
	console.log(request.params.id);
	
	Note.findByIdAndRemove({_id: request.params.id}, function(error) 
	{
		if (error) console.log('error deleting note', error);
		response.send();
	});
})


module.exports = router;
var request = require('request');
var cheerio = require('cheerio');

var scrape = function(callback) {

	request("https://www.nytimes.com", function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
		}

		var $ = cheerio.load(body);
    var articles = [];
    $("article.story").each(function(i, element) {

			var header = $(this).children(".story-heading").text().trim();
			var summary = $(this).children(".summary").text().trim();
			articles.push(data)
			
		});
		callback(articles);
	});
};

module.exports = scrape;
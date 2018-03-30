var headline = require('../models/Headline');
var newHeadline = function(headline,summary,url){
  return headline.create({'headline':headline, 'summary':summary, 'url':url})
}
module.exports = newHeadline;



var db = require(".././models");

module.exports = {
    renderHome: function(req, res) {
        db.Headline.find({"saved": false}, function(error, data) {
            var hbsObject = {
            headline: data
            };
            console.log(hbsObject);
            res.render("home", hbsObject);
        })
    },
    renderSaved: function(req,res) {
        res.render("saved");
        console.log("Saved Page");
    }
}
var headline = require('../models/Headline');
var newHeadline = function(headline,summary,url){
  return headline.create({'headline':headline, 'summary':summary, 'url':url})
}
module.exports = newHeadline;
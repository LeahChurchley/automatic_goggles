var request = require('request');
var cheerio = require('cheerio');

function wikipedia(url, callback){
  request(url, function(err, res, body){
    var wiki = {};
    if(!err & res.statusCode === 200){
      var $ = cheerio.load(body);
      var heading = $('h1#firstHeading');
      var headingText = heading.text();
      var content = $('div#bodyContent div#mw-content-text > p:first-of-type');
      wiki["title"] = headingText;
      wiki["body"] = content.text().replace(/(\[\d*\])/g,"");
      if(wiki["title"] !== "" && wiki["body"] !== ""){
        callback(wiki);
      }
    }
  });
};

module.exports = wikipedia;

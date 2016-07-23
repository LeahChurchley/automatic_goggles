'use strict';

var Youtube = require('youtube-node');
var keys = require('./keys');

var youTube = new Youtube();
youTube.setKey(keys.youtube);
youTube.addParam('relevanceLanguage', 'en');

var videos = function(term, callback){
  youTube.search(term, 1, function(error, result) {
    if (error) {
      console.log(error);
    } else {
      var url = 'https://www.youtube.com/embed/' + result['items'][0].id.videoId;
      callback(url);
    }
  });
};

module.exports = videos;

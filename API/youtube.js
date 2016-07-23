'use strict';

var Youtube = require('youtube-node');
var keys = require('./keys');

var youTube = new Youtube();
youTube.setKey(keys.youtube);
youTube.addParam('relevanceLanguage', 'en');


var videos = function(term, callback){
  youTube.search(term,5,function(error, result) {
    var vids = [];
    if (error) {
      console.log(error);
    }else {
      for(var i=0;i<result["items"].length;i++){
        vids.push({
          video_id: result["items"][i].id.videoId
        });
      }
        if(vids.length === result["items"].length){
          callback(vids);
        }
      }
  });
};

module.exports = videos;

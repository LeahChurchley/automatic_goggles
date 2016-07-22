var request = require('request');
var Twitter = require('twitter');

var keys = require('./keys');
var twitter = new Twitter(keys.twitter);


var tweet_list = function(term, callback){
		twitter.get('search/tweets', {q: term, lang: "en", result_type: "popular", count: 12}, function(error, tweets, response) {
			var topTweets = [];
				if (error) {
					console.log(error);
				} else {
					for(var i =0 ;i < tweets.statuses.length;i++){
						var url = "https://api.twitter.com/1/statuses/oembed.json?hide_media=true&hide_thread=true&url=https://twitter.com/"+tweets.statuses[i].user.screen_name+"/status/"+tweets.statuses[i].id_str;
						request(url, function(err, res, body){
							if(err){
								console.log(err);
							}else{
									var data = JSON.parse(body);
									topTweets.push(data);
									if(topTweets.length === tweets.statuses.length){
										callback(topTweets);
									}
								}
						});
					};
				}
		});
}

module.exports = tweet_list;

'use strict';

var express = require('express');
var router = express.Router();

var tweets = require('./twitter');
var wikipedia = require('./wikipedia');
var youtube = require('./youtube');

// Twitter
router.post('/twitter', function(req, res){
  var term = req.body.search_term;
  console.log(req.body);
  tweets(term, function(result){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  });
});

// Wikipedia
router.post('/wikipedia', function(req, res){
  var term = req.body.search_term;
  console.log(req.body);
  var url = "https://en.wikipedia.org/wiki/" + term;
  wikipedia(url, function(result){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  });
});

// YouTube
router.post('/youtube', function(req, res){
  var term = req.body.search_term;
  console.log(req.body);
  youtube(term, function(result){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  });
});

module.exports = router;

'use strict';

var express = require('express');
var router = express.Router();

var wikipedia = require('./wikipedia');
var youtube = require('./youtube');
var tweets = require('./twitter');

// Wikipedia
router.post('/wikipedia', function(req, res){
  var term = req.body.search_term;
  console.log(req.body);
  var url = "https://en.wikipedia.org/wiki/" + term;
  wikipedia(url, function(result){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: result }));
  });
});

// YouTube
router.post('/youtube', function(req, res){
  var term = req.body.search_term;
  console.log(req.body);
  youtube(term, function(result){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: result }));
  });
});

// Twitter
router.post('/twitter', function(req, res){
  var term = req.body.search_term;
  console.log(req.body);
  tweets(term, function(result){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: result }));
  });
});

module.exports = router;

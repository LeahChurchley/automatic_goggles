// External libraries
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Internal libraries
var route_api_calls = require('./api/actions');

// The main app
var app = express();

// Middleware for parsing and compiling
app.set('views', path.join(__dirname,'/public/views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Route home page
app.get('/', function(req,res){
  res.render('index');
});

// Route API endpoints
app.use('/api', route_api_calls);

// Route static assets
app.use(express.static(path.join(__dirname,'/public/static')));


// Listen for requests
var port = process.env.port || 3000;
app.listen(port,function(){
  console.log(`Listening to port ${port}`);
});


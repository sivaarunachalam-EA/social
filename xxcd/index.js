server/index.js
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var _ = require('loadsh');

//Create the application
var app = express();

//Add middlware  neccessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


//Connect to MongoDB
mongoose.connect('mongodb://localhoost/meanapp');
mongoose.connection.once('open',function() {
  console.log('Listening on port 3000.....') ;
  app.listen(3000);
});

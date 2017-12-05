/*
*
*	This is a test module to try out using mongo DB
*
*/

//declare dependencies
var express = require('express');
var bodyParser = require('body-parser');

//return the express object
var app = express();

//environment variables
var port = process.env.PORT || 3000;

//get the URL encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//tell it the folder to serve
app.use(express.static('dist'));

//define our body parsers
app.use(jsonParser); // for parsing application/json
app.use(urlencodedParser); // for parsing application/x-www-form-urlencoded

//open the port for local development
app.listen(port,function() {
	console.log('Express server is up and running on port ' + port);
});
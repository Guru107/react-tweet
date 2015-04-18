//Require the modules

var express = require('express');
	exphbs= require('express-handlebars');
	routes = require('./routes');

//Get the tweets at the start of server.
routes.getTweets();

//Initialize the app
var app = express();


//Set handlebars as engine and default layout to main
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
//Set the path of static resources like images,css,js,svg
app.use(express.static('./public/'));
app.disable('etag');

//Route to main page
app.get('/',routes.index);

//Start listening to requests
app.listen(8080);
console.log("Server Started at port 8080");
var express = require('express');
var fortune = require('./lib/fortune.js');

var fortunes = ["A","B","C","D"];

var app = express();
app.use(express.static(__dirname + '/public'));
// set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3030); 

// custom 400 page
/*app.use(function(req,res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});*/

// custom 500 page
/*app.use(function(err,req,res,next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});*/

app.get('/',function(req,res){
	res.render('home');
});

app.get('/about',function(req,res){
	res.render('about', {fortune:fortune.getFortune()});
});

app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});
app.listen(app.get('port'),function() {
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+C to terminate.');
});
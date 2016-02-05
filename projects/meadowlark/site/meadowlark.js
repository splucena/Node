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

app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
});

app.get('/',function(req,res){
	res.render('home');
});

app.get('/about',function(req,res){
	res.render('about', {
		fortune:fortune.getFortune(),
		pageTestScript: '/qa/test-about.js'
	});

});

app.get('/tours/hood-river', function(req, res) {
	res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res) {
	res.render('tours/request-group-rate');
});

app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});
app.listen(app.get('port'),function() {
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+C to terminate.');
});

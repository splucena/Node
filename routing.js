var http = require('http');

http.createServer(function(req,res){
	// normalize url by removing querystring, optional
	// trailing slash, and making it lowercase
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	switch(path) {
		case '':
			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end('Homepage');
		case '/about':
			res.writeHead(200, {'Content-Type':'text/plain'});
			res.end('About');
		default:
			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end('Not Found');

	}
}).listen(3000);
console.log('Server started at localhost:3000 press Ctrl+C to terminate...');

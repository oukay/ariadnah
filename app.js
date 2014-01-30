// Modules
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var lessMiddleware = require('less-middleware');

var viewsPath = path.join(__dirname, 'views');
var publicPath = path.join(__dirname + '/public');

// Configure app
var app = express();
app.configure(function () {
	app.set('port', '8888');
	app.set('views', viewsPath);
	app.set('view engine', 'ejs');

	app.use(express.logger());
	app.use(express.json());
	app.use(express.urlencoded());

	app.use(lessMiddleware({
		src: publicPath,
		debug: true
	}));

	app.use(express.static(publicPath));

	app.get('*', routes.index);
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Node.js is listening on port ' + app.get('port'));
});

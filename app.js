// Modules
var express = require('express');
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

	/*
	 * TODO: Move views to separate files
	 * app.get('/', routes.index);
	 * var routes = require('./routes');
	 */
	// Index page
	app.get('/', function(req, res) {
		res.render('index', {'title': 'ariadnah'});
	});

	// Get course
	app.get('/course/:i', function(req, res) {
		var url = '/course/';
		var i = parseInt(req.url.replace(url, ''));

		if (i < 12) {
			res.send({status: 'ok',
				course : {index: i, name: 'test'}
			});
		} else {
			res.send({status: 'end'});
		}
	});
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Node.js is listening on port ' + app.get('port'));
});

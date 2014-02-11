// Modules
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var lessMiddleware = require('less-middleware');

var viewsPath = path.join(__dirname, 'views');
var publicPath = path.join(__dirname + '/public');
var dbPath = 'mongodb://localhost/ariadnah';

// Configure db
mongoose.connect(dbPath);

// Configure app
var app = express();
app.configure(function () {
	app.set('port', '8888');
	app.set('views', viewsPath);
	app.set('view engine', 'ejs');

	app.use(express.json());

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
		res.render('index', {'title': 'ariadnah', 'logged': false});
	});

	// user cabinet
	app.get('/user/cabinet', function(req, res) {
		res.send({
			info :'/user/cabinet'
		});
	});

	// user cabinet
	app.get('/user/out', function(req, res) {
		res.send({
			info :'/user/out'
		});
	});

	// user cabinet
	app.get('/user/in/:service', function(req, res) {
		res.send({
			info :'/user/in/' + req.params.service
		});
	});

	// course
	app.get('/course/:i', function(req, res) {
		var url = '/course/';
		var i = parseInt(req.url.replace(url, ''));

		res.send({
			course :{
				index: i,
				name: '{Course' + i + '}',
				last: i > 25
			}
		});
	});
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Node.js is listening on port ' + app.get('port'));
});

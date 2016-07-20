/**
 * app to test angularjs module loading
 */
var express = require('express');
var app = express();
var cfg = require('./config');

var _ = require('underscore');
var bunyan = require('bunyan');
var log = bunyan.createLogger(_.extend(cfg.logging, {name: 'jwt-demo'}));

var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));

app.use(cookieParser());
app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req,res){
	res.sendfile('index.html', { root: path.resolve(__dirname + '/public') });
})

app.listen(8000, function() {
  console.log('server up and running at 8000 port');
});

module.exports = app;
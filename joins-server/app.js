const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const envConst = require('./consts/envs');
const routeConst = require('./consts/routes');

const app = express();
app.set('view engine', 'pug');

const joinRoute = require('./api/joins-api');;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routeConst.base, joinRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
    message: err.message,
    error: req.app.get('env') === envConst.dev ? err : {}
  });
});

module.exports = app;

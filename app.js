var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
// var users = require('./routes/users');
var inovaCelula = require('./routes/inovaCelula');
var inovaBilingue = require('./routes/inovaBilingue');
var inovaTalentos = require('./routes/inovaTalentos');
var inovaAcampa = require('./routes/inovaAcampa');
var regulamento = require('./routes/regulamento');
var inovaMusica = require('./routes/inovaMusica');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
// app.set 'layout', 'layout'       # use layout.html as the default layout 
// app.set ('partials', {'header': 'foo'});   // define partials available to all pages 
app.enable ('view cache');
app.engine ('hjs', require('hogan-express'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/inovaCelula', inovaCelula);
// app.use('/users', users);
app.use('/inovaBilingue', inovaBilingue);
app.use('/inovaTalentos', inovaTalentos);
app.use('/inovaAcampa', inovaAcampa);
app.use('/regulamento', regulamento);
app.use('/inovaMusica', inovaMusica);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// app.listen(3000);

module.exports = app;

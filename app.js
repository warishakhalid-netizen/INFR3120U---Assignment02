// Import the packages needed for the Express application
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//Import the route files used for page navigation
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

//This created the Express application
let app = express();

// view engine setup, Set up EJS to display pages from the views folder.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Log incoming HTTP requests for debugging
app.use(logger('dev'));
//Allow Express to read incoming request data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//Serve CSS, JavaScript, images and installed frontend packages
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//Connect the route files to the Express application
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler, handle requests for pages that do not exist
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler, displays info using the error.ejs page
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title: 'Error'});
});

//Export the application so server.js can start it
module.exports = app;

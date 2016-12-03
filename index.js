var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require("express-ejs-layouts");
var session = require('express-session');
var passport = require('./config/ppConfig');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var db = require('./models');
var methodOverride = require('method-override');
//  dotenv to load environment variables from a .env file
require('dotenv').config();
var app = express();

app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.static("static"));
app.use(methodOverride('_method'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  // forces re-saving of the session, even if nothing has changed.
  resave: false,
  // stores the session, even if we haven't stored any values to it yet
  saveUninitialized: true
}));
// connect-flash requires session, so you must load the express-session middleware
// first if you want to pass flash messages between pages.
app.use(flash());
// passport configuration below your session configuration.
// this ensures that Passport is aware that the session module exists.
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get("/", function(req, res) {
  res.render("index")
});

app.use('/', require('./controllers/auth'));

// any routes after this requires authorization
app.use(isLoggedIn);

var server = app.listen(process.env.PORT || 3000);

module.exports = server;

var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var methodOverride = require('method-override');

var app = express();
app.use(express.static("static"));
app.use(methodOverride('_method'));

app.use(isLoggedIn);

router.post('/polls/vote', function(req,res) {

});

router.delete('/polls/vote', function(req,res) {

});

module.exports = router;

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

router.get('/drops/:id', function(req,res) {
  db.drop.findOne({
    where: { id:req.params.id }
  }).then(function(drop) {
    res.render('drops/drop_details', {drop:drop})
  });
});

module.exports = router;

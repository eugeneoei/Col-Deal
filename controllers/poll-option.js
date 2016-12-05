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

// GET ALL USER'S POLLS
router.get('/user/polls', function(req,res) {
  db.user.findOne({
    where: {id: req.user.id}
  }).then(function(user) {
    user.getPolls({
      order: [['createdAt', 'DESC']]
    }).then(function(polls) {
      if (polls.length < 1) {
        // if user has not created any post, flash this message
        res.render('polls/poll_user', {message: 'Seems like you have not created any post yet.'})
      } else {
        res.render('polls/poll_user', {polls: polls, message: ''})
      }
    });
  });
});

// GET ALL USER'S OPTIONS
router.get('/user/options', function (req,res) {

});


// CREATE NEW POLL AND OPTION
router.post('/polls', function(req, res) {
  var communityId;
  db.community.findAll().then(function(communities) {
    for (var i = 0; i < communities.length; i++) {
      if (req.body.community == communities[i].name) {
        communityId = communities[i].id;
      }
    }
  }).then(function() {
    db.user.findOne({
      where:{id: req.user.id}
    }).then(function(user) {
      user.createPoll({
        name: req.body.poll,
        communityId: communityId
      }).then(function(poll) {
        poll.createOption({
          name: req.body.name,
          productUrl: req.body.productUrl,
          productImageUrl: req.body.productImageUrl,
          productDescription: req.body.productDescription,
          productRetailsPrice: req.body.productRetailsPrice,
          userId: req.user.id,
          votes: '1'
        }).then(function() {
          res.redirect('/home')
        });
      });
    });
  });
});

module.exports = router;

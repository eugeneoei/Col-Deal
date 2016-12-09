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

router.post('/polls/options/:id/vote', function(req,res) {
  // console.log('did vote route come in?');
  var newVotes;
  db.user.findOne({
    where: { id: req.user.id }
  }).then(function(user) {
    user.createVote({
      optionId: req.params.id
    }).then(function() {
      db.option.findOne({
        where: { id: req.params.id }
      }).then(function(option) {
        // var oldVotes = parseInt(option.numberOfVotes);
        var oldVotes = option.numberOfVotes;
        newVotes = oldVotes + 1;
      }).then(function() {
        db.option.update({
          numberOfVotes: newVotes.toString()
        }, {
          where: { id: req.params.id }
        }).then(function() {
          res.json({message:'vote success'});
        });
      });
    });
  });
});


router.delete('/polls/options/:id/vote', function(req,res) {
  console.log('delete vote route came in');
  var newVotes;
  db.vote.destroy({
    where: {
      userId: req.user.id,
      optionId: req.params.id
    }
  }).then(function() {
    db.option.findOne({
      where: { id:req.params.id }
    }).then(function(option) {
      // var oldVotes = parseInt(option.numberOfVotes);
      var oldVotes = option.numberOfVotes;
      newVotes = oldVotes - 1;
    }).then(function() {
      db.option.update({
        numberOfVotes: newVotes.toString()
      }, {
        where: { id: req.params.id }
      }).then(function() {
        res.json({message:'un-vote success'});
      });
    });
  });
});

module.exports = router;

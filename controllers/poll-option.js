var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var methodOverride = require('method-override');

var app = express();
app.use(express.static("static"));
app.use(methodOverride('_method'));

// app.use(isLoggedIn);

// GET USER'S PROFILE AND LOAD ALL OF USER'S POLLS AND OPTIONS
router.get('/profile', function(req,res) {
  db.user.findOne({
    where: {id: req.user.id}
  }).then(function(user) {
    user.getPolls({
      include: [db.option],
      order: [['createdAt', 'ASC']]
    }).then(function(polls) {
      console.log('see here for user profile', polls[0].options);
      if (polls.length < 1) {
        // if user has not created any post, flash this message
        res.render('profile', {message: 'Seems like you have not created any polls yet.'})
      } else {
        res.render('profile', {polls: polls, message: ''})
      }
    });
  });
});

// GET form to edit option
router.get('/options/:id/edit', function(req,res) {
  db.option.findOne({
    where: {id:req.params.id}
  }).then(function(option) {
    res.json(option);
  });
});

// UPDATE option
router.put('/options/:id', function(req,res) {
  db.option.update({
    productUrl: req.body.productUrl,
    productImageUrl: req.body.productImageUrl,
    productDescription: req.body.productDescription,
    productRetailsPrice: req.body.productRetailsPrice
  }, {
    where: { id: req.params.id }
  }).then(function() {
    res.redirect('/profile');
  });
});


// GET USER'S PROFILE AND LOAD ALL OF USER'S POLLS AND OPTIONS
// router.get('/profile', function(req,res) {
//   var result = [];
//   db.poll.findAll({
//     where: {userId:req.user.id}
//   }).then(function(polls) {
//     result.push(polls);
//     db.option.findAll({
//       where: {userId:req.user.id}
//     }).then(function(options) {
//       result.push(options);
//       res.render('profile', {result:result})
//     })
//   })
// });

// // GET ALL USER'S POLLS
// router.get('/user/polls', function(req,res) {
//   db.user.findOne({
//     where: {id: req.user.id}
//   }).then(function(user) {
//     user.getPolls({
//       order: [['createdAt', 'DESC']]
//     }).then(function(polls) {
//       if (polls.length < 1) {
//         // if user has not created any post, flash this message
//         res.render('polls/poll_user', {message: 'Seems like you have not created any post yet.'})
//       } else {
//         res.render('polls/poll_user', {polls: polls, message: ''})
//       }
//     });
//   });
// });

// // GET ALL USER'S OPTIONS
// router.get('/user/options', function (req,res) {
//   db.user.findOne({
//     where: {id: req.user.id}
//   }).then(function(user) {
//     user.getOptions({
//       include: [db.poll],
//       order: [['createdAt', 'DESC']]
//     }).then(function(options) {
//       if (options.length < 1) {
//         // if user has not created any post, flash this message
//         res.render('options/option_user', {message: 'Seems like you have not created any post yet.'})
//       } else {
//         res.render('options/option_user', {options: options, message: ''})
//       }
//     });
//   });
// });


// GET ONE POLL
router.get('/polls/:id', function(req,res) {
  db.poll.findOne({
    where: {id:req.params.id}
  }).then(function(poll) {
    poll.getOptions().then(function(options) {
      console.log('see here for one poll with all its options', options);
      res.render('polls/poll_details', {options:options});
    });
  });
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

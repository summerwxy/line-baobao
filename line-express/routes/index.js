var express = require('express');
var router = express.Router();

var Line = require('../src/line.js'); 
var Google = require('../src/google.js');
var mongoose = require('mongoose');

var line = new Line()
var google = new Google()


// schema
var Todo = mongoose.model('Todo');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
  // TODO: use it
  sig = req.header('X-Line-Signature'); 
  // get event json object
  var evts = req.body['events'];
  if (evts.length > 1) {
    console.log("TODO: multi events....finish the code");
  }
  var evt = evts[0];
  // isDev 
  var isDev = false;
  if (evt['source']['type'] == 'user' && evt['source']['userId'] == 'U3c9e167dae1f7fcfe210f68423c98400') {
    isDev = true;
  }

  // misc.....
  if (evt['type'] == 'message' && evt['message']['type'] == 'text') {
    var text = evt['message']['text'];
    line.replyText(req, "u says: " + text, isDev);

    /*
    new Todo({
      user_id: '0_o',
      content: text,
      updated_at: Date.now()
    }).save(function (err, todo, count){
      console.log(err);
      console.log(todo);
      console.log(count);
      //if(err) return next(err);
      //res.redirect( '/' );
    });
    */
  } else if (evt['type'] == 'message' && evt['message']['type'] == 'location') {
     
    var lat = evt['message']['latitude'];
    var lng = evt['message']['longitude'];

    google.nearBySearch(lat, lng, "pet");



  } else {
    console.log('===== unknow event =====');
    console.log(req.body);
    console.log('------------------------');
    console.log(evt);
    console.log('========================');
  }

  res.send('.'); 
});

module.exports = router;

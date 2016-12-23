var express = require('express');
var router = express.Router();

var request = require('request'); 



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
  // TODO: use it
  sig = req.header('X-Line-Signature'); 
  var evt = req.body['events'][0]
  
  // TODO: finish it
  if (evt['type'] == 'message' && evt['message']['type'] == 'text') {

    var myJSONObject = {
      'replyToken': evt['replyToken'],
      'messages': [{
        "type": "text",
        "text": "Hello, user"
      }] 
    };
    request({
      url: "https://api.line.me/v2/bot/message/reply",
      method: "POST",
      json: true,   // <--Very important!!!
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.ChannelAccessToken
      },      
      body: myJSONObject
    }, function (error, response, body){
      console.log(response);
    });


  } else {
    console.log('unknow event: ' + evt);
  }

  res.send('.'); 
});

module.exports = router;

var request = require('request'); 


module.exports = class Line {
  constructor() {
  }

  // default don't send message
  reply(jsonObj, isSend=false) {
    if (isSend) {
      request({
        url: "https://api.line.me/v2/bot/message/reply",
        method: "POST",
        json: true,   // <--Very important!!!
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + process.env.ChannelAccessToken
        },      
        body: jsonObj
      }, function (error, response, body){
        // console.log(response);
      });
    }
  }

  replyText(req, text, isSend=false) {
    var evt = req.body['events'][0]
    var json = {
      'replyToken': evt['replyToken'],
      'messages': [{
        "type": "text",
        "text": text
      }] 
    };
    this.reply(json, isSend); // call reply method
  }

    
    /*
    var json = {
      'replyToken': evt['replyToken'],
      'messages': [{
        "type": "template",
        "altText": "this is a confirm template",
        "template": {
          "type": "confirm",
          "text": "Are you sure?",
          "actions": [
            {
              "type": "message",
              "label": "Yes",
              "text": "yes"
            },
            {
              "type": "message",
              "label": "No",
              "text": "no"
            }
          ]
        }
      }] 
    };
    line.reply(json);
    */


}

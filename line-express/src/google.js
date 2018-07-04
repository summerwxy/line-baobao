var request = require('request'); 


module.exports = class Google {
  constructor() {
  }

  nearBySearch(lat, lng, kw) {
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" + process.env.GoogleApisKey + "&rankby=distance&location=" + lat + "," + lng + "&keyword=" + kw;

    request({
      url: url,
      method: 'GET',
      json: true
    }, function(error, response, body) {
      console.log(error);
      console.log('-------------');
      console.log(body);
    
    });

  }


  reply(jsonObj) {
    request({
      url: "https://api.line.me/v2/bot/message/reply",
      method: "POST",
      json: true,   // <--Very important!!!
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      },      
      body: jsonObj
    }, function (error, response, body){
      // console.log(response);
    });
  }



}

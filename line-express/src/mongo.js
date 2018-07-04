var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var Todo = new Schema({
  user_id: String,
  content: String,
  updated_at: Date
});
mongoose.model('Todo', Todo);


var Setting = new Schema({
  stype: String,
  sid: String,
  skey: String,
  sval: String,
  updated_at: Date
});
mongoose.model('Setting', Setting);



mongoose.connect(process.env.MONGODB_URI);


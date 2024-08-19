var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Security");

const userDet = mongoose.Schema({
  username:String,
  password:String,
  secret:String
});

userDet.plugin(plm);

module.exports = mongoose.model("Users",userDet);
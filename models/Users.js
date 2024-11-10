const mongoose = require('mongoose');
const Schema = mongoose.Schema; //property of mongoose

const userSchema =  new Schema({
  googleID : String
});

mongoose.model('users',userSchema);
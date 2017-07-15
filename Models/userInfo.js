const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = Schema({
  Username: String,
  Email: String,
  Password: String,
  ConfirmPassword: String
})
module.exports = mongoose.model('UserInfo', userSchema)

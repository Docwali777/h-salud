const mongoose = require('mongoose');
const {Schema} = mongoose

 export default const userSchema = Schema({
  Username: String,
  Email: String,
  Password: String,
  ConfirmPassword: String
})

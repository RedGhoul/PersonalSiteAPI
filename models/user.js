const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  username: String
});

// Add passport middleware to User Schema
userSchema.plugin(passportLocalMongoose, {
  session: false // Disable sessions as we'll use JWTs
});

const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    minlength: 11
  },
  emailAddress: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    unique: true
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
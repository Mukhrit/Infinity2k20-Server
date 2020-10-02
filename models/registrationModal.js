const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registration = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    org: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
var Registrations = mongoose.model('registration', registration);

module.exports = Registrations;

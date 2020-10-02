const express = require('express');
const bodyParser = require('body-parser');
const Registrations = require('../models/registrationModal');

const registrationrouter = express.Router();

registrationrouter.use(bodyParser.json());
registrationrouter.route('/').post((req, res, next) => {
  Registrations.create(req.body)
    .then(
      (reg) => {
        console.log('Registration Done ', reg);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reg);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
module.exports = registrationrouter;

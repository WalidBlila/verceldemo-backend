var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');
const {checkBody} = require('../modules/checkBody')

// POST SIGN UP
router.post('/signup', (req, res) => {
    // test champ vide
  if (!checkBody(req.body, ['name','email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
  } else {
    // test doublon
    User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') } }).then(existingUser => {
      if (existingUser === null) {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        newUser.save().then(() => {
          res.json({ result: true });
        });
      } else {
        res.json({ result: false, error: 'User already exists' });
      }
    });
  }
});

// POST SIGNIN
// POST SIGNIN
router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
  } else {
    User.findOne({ email: req.body.email, password: req.body.password }).then(data => {
      if (data) {
        res.json({ result: true });
      } else {
        res.json({ result: false, error: 'User not found' });
      }
    });
  }
});













module.exports = router;
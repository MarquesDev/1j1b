var express = require('express');
var router = express.Router();
var db = require('./../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.user
    .findAll()
    .then(function(users) {
      return res.json(users);
    })
});

router.post('/', function(req, res, next) {
  db.user
    .create({
      name: 'Marc',
      password: 'Hello'
    })
    .then(function(users) {
      return res.json(users);
    })
});

module.exports = router;

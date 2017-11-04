const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  res.render('show', {
    msg: 'LifeLogs'//#{title}として使う
  });
});

router.get('/all', function(req, res) {
  res.render('show', {
    msg: 'LifeLog'//#{title}として使う
  });
});


module.exports = router;

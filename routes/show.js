const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/show/', function(req, res) {
  res.render('show', {
    title: 'LifeLog'//#{title}として使う
  });
});

router.get('/show/', function(req, res) {
  res.render('show', {
    title: 'LifeLog'//#{title}として使う
  });
});


module.exports = router;

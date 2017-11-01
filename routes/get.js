const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/get/', function(req, res) {
  res.contentType('json');
  res.header("Content-Type", "application/json; charset=utf-8");
  collection(COLNAME).find().toArray(function(err, docs){
   res.send(docs);
 })
});

router.get('/get/', function(req, res) {
  res.render('get', {
    title: 'LifeLog' //#{title}として使う
  });
});


module.exports = router;

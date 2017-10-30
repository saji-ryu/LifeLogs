const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  console.log(collection);
  res.render('index', {
    title: 'LifeLog'
  }); //.ejsは省略できる　オブジジェクトを渡すこともできるよ
});

router.post('/', function(req, res) {
  console.log(req.body);
  //res.send(req.body);
  collection(COLNAME).insertOne(req.body).then(function(r) {
    res.send(r);
  });
});

module.exports = router;

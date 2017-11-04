const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  collection(COLNAME).find().toArray(function(err, docs) {
    console.log(docs);
    res.render('show', {
      msg: docs
    });
  })

});

router.get('/all', function(req, res) {
  res.render('show', {
    msg: 'LifeLog'
  });
});


module.exports = router;

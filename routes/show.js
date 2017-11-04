const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  collection(COLNAME).find({},{"_id" : 0}).toArray(function(err, docs) {
    res.render('show', {
      msg: docs
    });
  });

});

router.get('/:word', function(req, res) {
  collection(COLNAME).find({
  }).toArray(function(err, docs) {
    res.render('show', {
      msg: docs
    });
  });
});


module.exports = router;

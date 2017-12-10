const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  let id;
  res.header("Content-Type", "application/json; charset=utf-8");
  collection(COLNAME).find(req.query).toArray(function(err, docs) {
    id = docs._id
    if (Object.keys(docs).length != 0) {
      res.send(docs);
    }else {
      res.send('no match data');
    }
  });
  collection(COLNAME).deleteOne({
    '_id': id
  });
});


router.get('/:key_type', function(req, res) {
  res.header("Content-Type", "application/json; charset=utf-8");
  collection(COLNAME).find({
    type: req.params.key_type
  }).toArray(function(err, docs) {
    res.send(docs);
  });
});



module.exports = router;

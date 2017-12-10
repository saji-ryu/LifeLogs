const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  let id;
  res.header("Content-Type", "application/json; charset=utf-8");
  collection(COLNAME).find({
    $and: [
      req.query,
      {istaken : false}
    ]}
  ).toArray(function(err, docs) {
    docs.istaken = true;
    if (Object.keys(docs).length != 0) {
      res.send(docs);
    }else {
      res.send('no match data');
    }
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

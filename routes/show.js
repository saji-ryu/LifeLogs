const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  collection(COLNAME).find().toArray(function(err, docs) {
    res.render('show', {
      msg: docs
    });
  });

});

router.get('/:word', function(req, res) {
  collection(COLNAME).find().toArray(function(err, docs) {
    res.render('show', {
      msg: docs
    });
  });
});

router.get('/edit/:dataId', function(req, res) {
  let id = ObjectID(req.params.dataId)
  collection(COLNAME).find({
    '_id': id
  }, {
    _id: 0
  }).toArray(function(err, docs) {
    console.log(docs);
    res.render('edit', {
      msg: docs
    });
  });
});

router.get('/delete/:dataId', function(req, res) {
  let id = ObjectID(req.params.dataId)
  collection(COLNAME).deleteOne({
    '_id': id
  }).then(function(r) {
    res.render('delete', {
    });
  });
});


module.exports = router;

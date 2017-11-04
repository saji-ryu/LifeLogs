const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  console.log(Object.keys(req.query).length);
  if (Object.keys(req.query).length == 0) {
    res.render('post', {
      msg: 'パラメーターが空です'
    });
  }else{
    collection(COLNAME).insertOne(req.query).then(function(r) {
      res.render('post', {
        msg: '受け取りました'
      });
    })

  }
});


module.exports = router;

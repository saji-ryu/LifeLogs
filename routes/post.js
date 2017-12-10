const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  console.log(Object.keys(req.query).length);
  //console.log(req.query);
  if (Object.keys(req.query).length == 0) {
    res.render('post', {
      msg: 'パラメーターが空です'
    });
  }else{
    let data = req.query;
    data.time = Date.now();
    data.istaken = false;
    //console.log(data);
    collection(COLNAME).insertOne(data).then(function(r) {
      res.render('post', {
        msg: '受け取りました'
      });
    })

  }
});


module.exports = router;

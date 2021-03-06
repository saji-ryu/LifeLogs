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
    let data = req.query;
    data.time = Date.now();
    data.istaken = false;
    req.app.io.emit('stream',data);
    collection(COLNAME).insertOne(data,function(r) {
      res.render('post', {
        msg: '受け取りました'
      });
    });
  }
});


module.exports = router;

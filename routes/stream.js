const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';


router.get('/', function(req, res) {
  req.app.io.on('connection',function(socket){
    console.log('a user connected');  
  });
  res.header("Content-Type", "application/json; charset=utf-8");
  collection(COLNAME).find(req.query).sort({time:-1}).limit(100).toArray(function(err, docs) {
    res.send(docs);
  })
});



module.exports = router;

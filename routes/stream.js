const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';


router.get('/', function(req, res) {
  req.app.io.on('connection',function(socket){
    console.log('a user connected');
    let msg = 'test'
    req.app.io.emit('test',msg);
  });
  res.render('stream');
});

module.exports = router;

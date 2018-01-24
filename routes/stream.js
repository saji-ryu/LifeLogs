const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';


router.get('/', function(req, res) {
  res.render('stream');
  // req.app.io.sockets.on('connection',function(socket){
  //   console.log('a user connected');
    // socket.on('want',function functionName(data) {
    //   req.app.io.emit('test',msg);
    // });

  // });
});


module.exports = router;

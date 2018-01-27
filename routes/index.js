const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';


router.get('/', function(req, res) {
  console.log(collection);
  res.render('index', {
    title: 'LifeLogs'
  });
});

router.post('/', function(req, res) {
  console.log(req.body);
  let data = req.body;
  data.time = Date.now();
  data.istaken = false;
  collection(COLNAME).insertOne(data,function(r) {
    req.app.io.emit('test',data);
    res.send(req.body);
  });
});

module.exports = router;

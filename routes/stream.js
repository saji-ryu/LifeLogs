const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';


router.get('/', function(req, res) {
  res.render('stream');
});


module.exports = router;

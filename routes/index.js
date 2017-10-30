const express = require('express');
let router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require( '../mongo' );
const COLNAME = 'rawdatae';

router.get('/', function(req, res) {
  res.render('index', { title: 'LifeLog' }); //.ejsは省略できる　オブジジェクトを渡すこともできるよ
});

router.post( '/', function ( req, res ) {
  collection(COLNAME).insertOne( req.body ).then(function(r) {
    res.send(r);
  });
});

module.exports = router;

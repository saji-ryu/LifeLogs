const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;
// MongoDB用ファイルを指定
const collection = require( '../mongo' );
const COL = 'restapi';

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' }); //.ejsは省略できる　オブジジェクトを渡すこともできるよ
});

router.post( '/', function ( req, res ) {
  collection(COL).insertOne( req.body ).then(function(r) {
    res.send(r);
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  collection(COLNAME).find(req.query).sort({time:-1}).limit(100).toArray(function(err, docs) {
    res.render('show', {
      msg: docs
    });
  });
});

router.get('/edit/:dataId', function(req, res) {
  let id = ObjectID(req.params.dataId)
  collection(COLNAME).find({
    '_id': id
  }).toArray(function(err, docs) {
    //console.log(docs);
    res.render('edit', {
      msg: docs
    });
  });
});

router.post('/update/:dataId', function(req, res) {
  let _time = req.body.time
  let id = ObjectID(req.params.dataId);
  let updateData = JSON.parse(req.body.con);
  updateData.time = Number(_time);
  //console.log(updateData);

  collection(COLNAME).deleteOne({'_id': id},function(err,result) {
    collection(COLNAME).insertOne(updateData,function(err,result) {
      console.log('update!');
      res.redirect('/show');
    });
  });

});

router.get('/delete/:dataId', function(req, res) {
  let id = ObjectID(req.params.dataId)
  collection(COLNAME).deleteOne({
    '_id': id
  }).then(function(r) {
    // res.render('delete', {
    // });
    res.redirect('back');
  });
});


module.exports = router;

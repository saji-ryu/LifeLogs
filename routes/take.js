const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  let updateid = null;
  res.header("Content-Type", "application/json; charset=utf-8");
  collection(COLNAME).find({
    $and: [
      req.query,
      {istaken : false}
    ]
  }).sort({time:-1}).limit(1).toArray(function(err, docs) {
    updateid = ObjectID(docs[0]._id);
    if (Object.keys(docs).length != 0) {
      console.log(updateid);
      collection(COLNAME).update({
        _id : updateid
      },{
        $set:
         {istaken : true}
      })
      res.send(docs);
    }else {
      res.send('no match data');
    }
  })
});


module.exports = router;

let db;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const settings = require('./settings.js');

const url = 'mongodb://+' + settings.dbhost + '/' + settings.db;

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, mongodb) {
  //assert.equal(null, err);
  console.log("Connected correctly to db");
  db = mongodb;
});

let collection = function(name) {
  return db.collection(name);
}

module.exports = collection;

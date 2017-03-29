var config = require('./config'),
    assert = require('assert'),
    // MongoClient = require('mongodb').MongoClient;
    mongoose = require('mongoose');

module.exports = function() {

  var db = mongoose.connect(config.db);

  var connection = db.connection;

  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', function() {
    console.log('connected to MongoDB');
  });

  require('../models/bookmark.model');
  require('../models/ebook.model');

  return db;

}

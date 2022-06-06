#! /usr/bin/env node

console.log('This script is for trying things out');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Book = require('./models/book')
var Author = require('./models/author')
var Genre = require('./models/genre')
var BookInstance = require('./models/bookinstance')


//Import the mongoose module
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://charles:G%40jo8160@cluster0.ziptndy.mongodb.net/?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var authors = []
var genres = []
var books = []
var bookinstances = []

// Define functions to try here


async.series([
  // Call them here
  
],
// Optional callback
function(err, results) {
  if (err) {
      console.log('FINAL ERR: '+err);
  }
  else {
      console.log('BOOKInstances: '+bookinstances);
      
  }
  // All done, disconnect from database
  mongoose.connection.close();
});
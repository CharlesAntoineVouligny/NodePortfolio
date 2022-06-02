var express = require('express');
const book = require('../models/book');
var router = express.Router();

//Search item
// router.get('/search/:key', book.search);

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});



module.exports = router;

var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController');

// //Implement dummy search page
router.get('/search', book_controller.search);

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});



module.exports = router;

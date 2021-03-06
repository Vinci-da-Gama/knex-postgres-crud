const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const authHelpers = require('../auth/_helpers');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});

module.exports = router;

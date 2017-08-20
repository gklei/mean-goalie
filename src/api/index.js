'use strict';

var express = require('express');
var router = express.Router();
var tasks = require('../../public/mock/tasks.json');

router.get('/tasks', function (req, res) {
  res.json({
    tasks : tasks
  });
});

module.exports = router;
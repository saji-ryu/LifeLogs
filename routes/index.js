const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' }); //.ejsは省略できる　オブジジェクトを渡すこともできるよ
});

module.exports = router;

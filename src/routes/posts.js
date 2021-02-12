const express = require('express');
const Posts = require('../controllers/Posts');

const router = express.Router();

router.get('/', Posts.index);

module.exports = router;

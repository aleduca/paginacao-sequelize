const express = require('express');
const SearchPosts = require('../controllers/SearchPosts');

const router = express.Router();

router.get('/posts', SearchPosts.index);

module.exports = router;

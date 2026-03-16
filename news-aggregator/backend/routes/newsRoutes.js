const express = require('express');
const router = express.Router();
const { getNews } = require('../controllers/newsController');

// @route   GET /api/news
// @desc    Proxy to NewsAPI
// @access  Public (could be made private if we want to restrict to only logged in users)
router.get('/', getNews);

module.exports = router;

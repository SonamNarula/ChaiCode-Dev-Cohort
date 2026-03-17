const express = require('express');
const router = express.Router();
const { getNews } = require('../controllers/newsController');

// GET /api/news?category=technology&search=AI
router.get('/', getNews);

module.exports = router;

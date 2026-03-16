const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { 
  registerUser, 
  loginUser, 
  getMe, 
  saveArticle, 
  unsaveArticle 
} = require('../controllers/userController');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes (require auth token)
router.get('/me', auth, getMe);
router.post('/save-article', auth, saveArticle);
router.delete('/unsave-article', auth, unsaveArticle);

module.exports = router;

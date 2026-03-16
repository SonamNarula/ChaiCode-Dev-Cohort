const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Helper to generate JWT
const generateToken = (userId) => {
  return jwt.sign(
    { user: { id: userId } },
    process.env.JWT_SECRET || 'fallback_dev_secret',
    { expiresIn: '7d' }
  );
};

// @route   POST /api/users/register
// @desc    Register a user
exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ email, password });
    await user.save();

    const token = generateToken(user._id);
    res.status(201).json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   POST /api/users/login
// @desc    Authenticate user & get token
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const token = generateToken(user._id);
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET /api/users/me
// @desc    Get user data
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   POST /api/users/save-article
// @desc    Save an article for user
exports.saveArticle = async (req, res) => {
  try {
    const { title, description, url, urlToImage, publishedAt, sourceName } = req.body;
    
    const user = await User.findById(req.user.id);
    
    // Check if article already saved checking URL
    const alreadySaved = user.savedArticles.some(article => article.url === url);
    
    if (alreadySaved) {
      return res.status(400).json({ message: 'Article already saved' });
    }

    user.savedArticles.unshift({
      title, description, url, urlToImage, publishedAt, sourceName
    });

    await user.save();
    res.json(user.savedArticles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   DELETE /api/users/unsave-article
// @desc    Remove an article from saved
exports.unsaveArticle = async (req, res) => {
  try {
    const { url } = req.body; // or could be an ID if provided
    
    const user = await User.findById(req.user.id);
    user.savedArticles = user.savedArticles.filter(article => article.url !== url);
    
    await user.save();
    res.json(user.savedArticles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

const axios = require('axios');

// @route   GET /api/news
// @desc    Get news via external NewsAPI
exports.getNews = async (req, res) => {
  try {
    const { category, search } = req.query;
    
    // Check if we have an API key. If not, we will inform the frontend so it can use mock data.
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return res.status(503).json({ 
        message: 'News API key not configured. Please use mock data on frontend.',
        articles: [] 
      });
    }

    let url = 'https://newsapi.org/v2/';
    const params = {
      apiKey: apiKey,
      language: 'en',
    };

    if (search) {
      url += 'everything';
      params.q = search;
      // Sort by relevancy or recency for better search results
      params.sortBy = 'relevancy'; 
    } else {
      url += 'top-headlines';
      // Default to US news or general category
      params.country = 'us';
      if (category && category !== 'General') {
        params.category = category.toLowerCase();
      }
    }

    const response = await axios.get(url, { params });
    res.json(response.data);
    
  } catch (error) {
    console.error('Error fetching from NewsAPI:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error fetching news' });
  }
};

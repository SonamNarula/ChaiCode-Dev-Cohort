const axios = require('axios');

// ─── GET /api/news ──────────────────────────────────────────
// Proxy to GNews API – supports ?category= and ?search= query params
exports.getNews = async (req, res) => {
  try {
    const { category, search, country, page } = req.query;

    const apiKey = process.env.GNEWS_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        message: 'GNews API key not configured. Frontend will use mock data.',
        articles: [],
      });
    }

    let url = 'https://gnews.io/api/v4/';
    const params = {
      apikey: apiKey,
      lang: 'en',
      max: 10,
    };

    // Add pagination
    if (page) {
      params.page = page;
    }

    // Add country filter (GNews expects 2-letter codes like 'in', 'us', 'gb'. We use 'global' to mean 'any')
    if (country && country.toLowerCase() !== 'global') {
      params.country = country.toLowerCase();
    }

    if (search) {
      // ── Search endpoint ──────────────────────────────────
      url += 'search/titles';
      params.q = search;
    } else {
      // ── Top Headlines endpoint ───────────────────────────
      url += 'top-headlines';
      if (category && category.toLowerCase() !== 'general') {
        params.topic = category.toLowerCase();
      }
    }

    const response = await axios.get(url, { params });

    // Normalize GNews response to a consistent shape
    const articles = (response.data.articles || []).map((a) => ({
      title: a.title,
      description: a.description,
      content: a.content,
      url: a.url,
      image: a.image,
      publishedAt: a.publishedAt,
      source: {
        name: a.source?.name || 'Unknown',
        url: a.source?.url || '',
      },
    }));

    res.json({ totalArticles: articles.length, articles });
  } catch (error) {
    console.error(
      '❌ Error fetching from GNews:',
      error.response?.data || error.message
    );
    res.status(500).json({ message: 'Error fetching news', articles: [] });
  }
};

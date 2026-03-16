const sendJson = (res, statusCode, body) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end(JSON.stringify(body));
};

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.end();
    return;
  }

  if (req.method !== 'GET') {
    sendJson(res, 405, { message: 'Method not allowed', articles: [] });
    return;
  }

  const apiKey = process.env.GNEWS_API_KEY;
  if (!apiKey) {
    sendJson(res, 503, {
      message: 'GNews API key not configured. Frontend will use mock data.',
      articles: [],
    });
    return;
  }

  try {
    const requestUrl = new URL(req.url, `https://${req.headers.host}`);
    const category = requestUrl.searchParams.get('category');
    const search = requestUrl.searchParams.get('search');
    const country = requestUrl.searchParams.get('country');
    const page = requestUrl.searchParams.get('page');

    const apiUrl = new URL(search ? 'https://gnews.io/api/v4/search' : 'https://gnews.io/api/v4/top-headlines');
    apiUrl.searchParams.set('apikey', apiKey);
    apiUrl.searchParams.set('lang', 'en');
    apiUrl.searchParams.set('max', '10');

    if (page) {
      apiUrl.searchParams.set('page', page);
    }

    if (country && country.toLowerCase() !== 'global') {
      apiUrl.searchParams.set('country', country.toLowerCase());
    }

    if (search) {
      apiUrl.searchParams.set('q', search);
    } else if (category && category.toLowerCase() !== 'general') {
      apiUrl.searchParams.set('topic', category.toLowerCase());
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorText = await response.text();
      sendJson(res, response.status, {
        message: `GNews request failed: ${errorText}`,
        articles: [],
      });
      return;
    }

    const data = await response.json();
    const articles = (data.articles || []).map((article) => ({
      title: article.title,
      description: article.description,
      content: article.content,
      url: article.url,
      image: article.image,
      publishedAt: article.publishedAt,
      source: {
        name: article.source?.name || 'Unknown',
        url: article.source?.url || '',
      },
    }));

    sendJson(res, 200, {
      totalArticles: articles.length,
      articles,
    });
  } catch (error) {
    sendJson(res, 500, {
      message: `Error fetching news: ${error.message}`,
      articles: [],
    });
  }
};

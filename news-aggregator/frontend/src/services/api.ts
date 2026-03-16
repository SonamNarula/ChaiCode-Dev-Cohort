import axios from 'axios';
import type { Article } from '../utils/mockData';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  timeout: 10000,
});

interface NewsResponse {
  totalArticles: number;
  articles: Article[];
  message?: string;
}

/**
 * Fetch news articles from the backend API.
 * Returns { articles, usedMock } — usedMock is true when backend is unavailable
 * and the caller should fall back to mock data.
 */
export async function fetchNews(
  category?: string,
  search?: string,
  country?: string,
  page?: number
): Promise<{ articles: Article[]; usedMock: boolean }> {
  try {
    const params: Record<string, string | number> = {};
    if (category && category.toLowerCase() !== 'general') {
      params.category = category;
    }
    if (search) {
      params.search = search;
    }
    if (country && country.toLowerCase() !== 'global') {
      params.country = country.toLowerCase();
    }
    if (page) {
      params.page = page;
    }

    const { data } = await api.get<NewsResponse>('/news', { params });

    // If backend returned 503 (no API key), it still returns articles: []
    if (data.articles && data.articles.length > 0) {
      return { articles: data.articles, usedMock: false };
    }

    // Backend returned empty → caller should use mock
    return { articles: [], usedMock: true };
  } catch {
    // Backend unavailable → caller uses mock data
    return { articles: [], usedMock: true };
  }
}

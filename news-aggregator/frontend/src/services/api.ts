import axios from 'axios';
import type { Article, NewsCategory } from '../components/NewsCard';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';

type MockArticle = Article & { category: NewsCategory };

const normalizeArticle = (article: Partial<Article>, fallbackCategory: NewsCategory): Article => ({
  title: article.title?.trim() || 'Untitled article',
  description: article.description?.trim() || 'No description available for this article yet.',
  url: article.url?.trim() || '#',
  urlToImage: article.urlToImage?.trim() || '',
  publishedAt: article.publishedAt || new Date().toISOString(),
  source: {
    id: article.source?.id || null,
    name: article.source?.name?.trim() || 'Unknown source',
  },
  author: article.author?.trim() || null,
  category: article.category || fallbackCategory,
});

const filterMockNews = (category: NewsCategory, search?: string): Article[] => {
  const normalizedSearch = search?.trim().toLowerCase();

  return mockArticles
    .filter((article) => {
      if (normalizedSearch) {
        return [article.title, article.description, article.source.name, article.author || '']
          .join(' ')
          .toLowerCase()
          .includes(normalizedSearch);
      }

      return category === 'Latest' ? true : article.category === category;
    })
    .map(({ category: articleCategory, ...article }) => normalizeArticle(article, articleCategory));
};

export const newsService = {
  async getTopHeadlines(category: NewsCategory = 'Latest'): Promise<Article[]> {
    try {
      const response = await axios.get(`${API_URL}/news`, {
        params: {
          category: category === 'Latest' ? 'General' : category,
        },
      });

      const articles = Array.isArray(response.data?.articles) ? response.data.articles : [];
      return articles.map((article: Partial<Article>) => normalizeArticle(article, category));
    } catch (error) {
      console.error('Error fetching news:', error);
      return filterMockNews(category);
    }
  },

  async searchNews(query: string): Promise<Article[]> {
    try {
      const response = await axios.get(`${API_URL}/news`, {
        params: { search: query },
      });

      const articles = Array.isArray(response.data?.articles) ? response.data.articles : [];
      return articles.map((article: Partial<Article>) => normalizeArticle(article, 'Latest'));
    } catch (error) {
      console.error('Error searching news:', error);
      return filterMockNews('Latest', query);
    }
  },
};

const mockArticles: MockArticle[] = [
  {
    title: 'AI copilots are reshaping how software teams ship products',
    description:
      'Engineering teams are blending AI assistants into planning, coding, and testing workflows to reduce repetitive work and ship updates faster.',
    url: '#',
    urlToImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    publishedAt: new Date().toISOString(),
    source: { id: 'tech-desk', name: 'Tech Desk' },
    author: 'Nisha Rao',
    category: 'Technology',
  },
  {
    title: 'Global markets open higher as investors watch rate signals',
    description:
      'Business analysts say steady inflation data is helping investors rotate back into growth sectors and large-cap stocks.',
    url: '#',
    urlToImage:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200',
    publishedAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
    source: { id: 'market-watch', name: 'Market Watcher' },
    author: 'Arjun Mehta',
    category: 'Business',
  },
  {
    title: 'Championship race heats up after dramatic weekend comeback',
    description:
      'A late turnaround shifted the standings and set up a tightly contested finish heading into the next round of fixtures.',
    url: '#',
    urlToImage:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&q=80&w=1200',
    publishedAt: new Date(Date.now() - 1000 * 60 * 95).toISOString(),
    source: { id: 'sports-hub', name: 'Sports Hub' },
    author: 'Kabir Singh',
    category: 'Sports',
  },
  {
    title: 'Doctors highlight small daily habits that improve long-term health',
    description:
      'Experts are emphasizing sleep quality, hydration, and regular movement as the biggest drivers of sustainable wellness.',
    url: '#',
    urlToImage:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    source: { id: 'health-line', name: 'Health Line' },
    author: 'Rhea Kapoor',
    category: 'Health',
  },
  {
    title: 'Streaming platforms bet big on live events and creator-led shows',
    description:
      'Entertainment companies are experimenting with hybrid programming to keep younger audiences engaged across devices.',
    url: '#',
    urlToImage:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
    source: { id: 'screen-talk', name: 'Screen Talk' },
    author: 'Mira Dutt',
    category: 'Entertainment',
  },
  {
    title: 'Morning briefing: the five stories driving today’s conversation',
    description:
      'From policy shifts to product launches, here is a fast roundup of the headlines shaping the day across sectors.',
    url: '#',
    urlToImage:
      'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1200',
    publishedAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
    source: { id: 'daily-wire', name: 'Daily Wireframe' },
    author: 'Editorial Desk',
    category: 'Latest',
  },
];

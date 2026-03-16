import axios from 'axios';
import { Article } from '../components/NewsCard';

const API_URL = 'http://localhost:5000/api';

export const newsService = {
  getTopHeadlines: async (category: string = 'General'): Promise<Article[]> => {
    try {
      const response = await axios.get(`${API_URL}/news`, {
        params: { category }
      });
      return response.data.articles || [];
    } catch (error) {
      console.error('Error fetching news:', error);
      // Fallback mock data when API is down or Key missing
      return mockData;
    }
  },

  searchNews: async (query: string): Promise<Article[]> => {
    try {
      const response = await axios.get(`${API_URL}/news`, {
        params: { search: query }
      });
      return response.data.articles || [];
    } catch (error) {
      console.error('Error searching news:', error);
      return mockData.filter(a => a.title.toLowerCase().includes(query.toLowerCase()));
    }
  }
};

const mockData: Article[] = [
  {
    title: "The Future of MERN Stack in 2026: Why React and Node are Here to Stay",
    description: "An in-depth look at how the MongoDB, Express, React, and Node.js stack continues to absolute dominate enterprise and startup ecosystems.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    publishedAt: new Date().toISOString(),
    source: { id: "tech-news", name: "Tech Insider" },
    author: "Sonam Narula"
  },
  {
    title: "Global Markets Rally as Tech Stocks Hit All-Time Highs",
    description: "Investors are optimistic as major technology firms report earnings that absolutely blew past Q3 expectations.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    source: { id: "business", name: "Financial Times" },
    author: "Sarah Jenkins"
  },
  {
    title: "New AI Models Capable of Writing Entire E-Commerce Platforms from Scratch",
    description: "Generative models have crossed a new threshold, capable of scaffolding full backend databases and frontend React components autonomously.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    source: { id: "ai", name: "AI Weekly" },
    author: "David Chen"
  }
];

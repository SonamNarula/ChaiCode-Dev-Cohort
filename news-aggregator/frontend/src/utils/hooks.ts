import { useState, useEffect } from 'react';
import type { Article } from './mockData';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Article[]>(() => {
    const saved = localStorage.getItem('bookmarks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (article: Article) => {
    setBookmarks((prev) => {
      const exists = prev.some((a) => a.url === article.url);
      if (exists) {
        return prev.filter((a) => a.url !== article.url);
      }
      return [article, ...prev];
    });
  };

  const isBookmarked = (url: string) => {
    return bookmarks.some((a) => a.url === url);
  };

  return { bookmarks, toggleBookmark, isBookmarked };
}

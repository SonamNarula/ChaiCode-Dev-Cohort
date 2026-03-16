import { useDeferredValue, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BookmarkCheck, Newspaper, SearchX } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { NewsCard, type Article, type NewsCategory } from '../components/NewsCard';
import { newsService } from '../services/api';

const BOOKMARKS_KEY = 'smart-news-bookmarks';
const THEME_KEY = 'smart-news-theme';

const getInitialBookmarks = (): Article[] => {
  const stored = window.localStorage.getItem(BOOKMARKS_KEY);
  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored) as Article[];
  } catch {
    return [];
  }
};

const getInitialTheme = () => window.localStorage.getItem(THEME_KEY) === 'dark';

export const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<NewsCategory>('Latest');
  const [searchInput, setSearchInput] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const [bookmarks, setBookmarks] = useState<Article[]>(() => getInitialBookmarks());
  const [isDarkMode, setIsDarkMode] = useState(() => getInitialTheme());
  const deferredSearch = useDeferredValue(submittedSearch);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    window.localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const { data: articles = [], isLoading, isError, isFetching } = useQuery({
    queryKey: ['news', currentCategory, deferredSearch],
    queryFn: () =>
      deferredSearch.trim()
        ? newsService.searchNews(deferredSearch.trim())
        : newsService.getTopHeadlines(currentCategory),
  });

  const bookmarkedUrls = new Set(bookmarks.map((article) => article.url));

  const handleSearchSubmit = () => {
    setSubmittedSearch(searchInput.trim());
  };

  const handleCategorySelect = (category: NewsCategory) => {
    setCurrentCategory(category);
    setSubmittedSearch('');
    setSearchInput('');
  };

  const toggleBookmark = (article: Article) => {
    setBookmarks((currentBookmarks) => {
      const exists = currentBookmarks.some((item) => item.url === article.url);
      if (exists) {
        return currentBookmarks.filter((item) => item.url !== article.url);
      }

      return [article, ...currentBookmarks];
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar
        currentCategory={currentCategory}
        isDarkMode={isDarkMode}
        bookmarkCount={bookmarks.length}
        searchValue={searchInput}
        onCategorySelect={handleCategorySelect}
        onSearchChange={setSearchInput}
        onSearchSubmit={handleSearchSubmit}
        onThemeToggle={() => setIsDarkMode((value) => !value)}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="hero-panel animate-fade-in overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm dark:bg-slate-950/60 dark:text-slate-200">
                <Newspaper className="h-4 w-4" />
                Smart News Aggregator
              </p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                {submittedSearch
                  ? `Search results for "${submittedSearch}"`
                  : `${currentCategory} headlines in one clean feed`}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                Browse the latest stories, jump between categories, search by keyword, and save articles you want to revisit later.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl bg-white/80 p-5 shadow-sm backdrop-blur dark:bg-slate-950/55">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Visible articles</p>
                <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">{articles.length}</p>
              </div>
              <div className="rounded-3xl bg-white/80 p-5 shadow-sm backdrop-blur dark:bg-slate-950/55">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Saved bookmarks</p>
                <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">{bookmarks.length}</p>
              </div>
              <div className="rounded-3xl bg-white/80 p-5 shadow-sm backdrop-blur dark:bg-slate-950/55">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Current view</p>
                <p className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                  {submittedSearch ? 'Search' : currentCategory}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Top stories</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {submittedSearch
                  ? 'Showing keyword-based matches from the latest feed.'
                  : `Showing live ${currentCategory.toLowerCase()} coverage.`}
              </p>
            </div>
            {isFetching ? (
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 dark:bg-slate-900/80 dark:text-slate-300">
                Refreshing feed...
              </span>
            ) : null}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="glass-card h-[390px] animate-pulse overflow-hidden rounded-[1.75rem]"
                >
                  <div className="h-52 bg-slate-200 dark:bg-slate-800" />
                  <div className="space-y-4 p-6">
                    <div className="h-4 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div className="h-6 w-full rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div className="h-6 w-4/5 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div className="h-4 w-full rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div className="h-4 w-5/6 rounded-full bg-slate-200 dark:bg-slate-800" />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {isError ? (
            <div className="glass-card rounded-[1.75rem] border border-rose-200 bg-rose-50/80 p-8 text-center dark:border-rose-900/50 dark:bg-rose-950/20">
              <h3 className="text-xl font-semibold text-rose-700 dark:text-rose-300">Unable to load news right now</h3>
              <p className="mt-2 text-sm leading-6 text-rose-600 dark:text-rose-200">
                The app tried to fetch the latest feed but hit a problem. If your backend is off, the built-in mock feed should appear once the request falls back successfully.
              </p>
            </div>
          ) : null}

          {!isLoading && !isError && articles.length === 0 ? (
            <div className="glass-card rounded-[1.75rem] p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <SearchX className="h-7 w-7 text-slate-500 dark:text-slate-300" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950 dark:text-white">No matching articles found</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                Try a different keyword or switch back to a category feed to browse the latest headlines.
              </p>
            </div>
          ) : null}

          {!isLoading && !isError && articles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article, index) => (
                <div
                  key={`${article.url}-${index}`}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <NewsCard
                    article={article}
                    isBookmarked={bookmarkedUrls.has(article.url)}
                    onToggleBookmark={toggleBookmark}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </section>

        {bookmarks.length > 0 ? (
          <section className="mt-12 rounded-[2rem] border border-white/40 bg-white/65 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/45 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Bookmarked articles</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Quick access to the stories you saved.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {bookmarks.slice(0, 3).map((article, index) => (
                <div key={`${article.url}-bookmark-${index}`} className="animate-fade-in">
                  <NewsCard
                    article={article}
                    isBookmarked
                    onToggleBookmark={toggleBookmark}
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
};

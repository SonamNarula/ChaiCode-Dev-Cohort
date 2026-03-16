import { useState, useEffect, useCallback, useRef } from 'react';
import { Wifi, WifiOff, RefreshCw, AlertCircle, Bookmark, Loader2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { NewsCard } from '../components/NewsCard';
import { Loader } from '../components/Loader';
import { Ticker } from '../components/Ticker';
import { ScrollToTop } from '../components/ScrollToTop';
import { fetchNews } from '../services/api';
import { useTheme, useBookmarks } from '../utils/hooks';
import type { Article, Category } from '../utils/mockData';
import {
  filterMockByCategory,
  searchMockArticles,
  MOCK_ARTICLES,
} from '../utils/mockData';

export function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<Category>('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState('global');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [usingMock, setUsingMock] = useState(false);
  const [showingBookmarks, setShowingBookmarks] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();

  // Reset pagination when filters change
  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [category, searchQuery, country]);

  // ─── Fetch articles whenever category, search, country, or page changes ──
  const loadArticles = useCallback(async () => {
    const isLoadMore = page > 1;
    if (!isLoadMore) {
      setLoading(true);
      setArticles([]);
    }
    setError('');

    try {
      const { articles: data, usedMock } = await fetchNews(
        searchQuery ? undefined : category,
        searchQuery || undefined,
        country,
        page
      );

      if (usedMock) {
        setUsingMock(true);
        setHasMore(false); // mock doesn't paginate
        if (!isLoadMore) {
          if (searchQuery) {
            setArticles(searchMockArticles(searchQuery));
          } else {
            setArticles(filterMockByCategory(category));
          }
        }
      } else if (data.length === 0) {
        setHasMore(false);
        if (!isLoadMore) setArticles([]);
      } else {
        setUsingMock(false);
        setArticles(prev => isLoadMore ? [...prev, ...data] : data);
        // We set backend max=10 for demo pagination
        setHasMore(data.length === 10);
      }
    } catch {
      setUsingMock(true);
      setHasMore(false);
      if (!isLoadMore) {
        setArticles(searchQuery ? searchMockArticles(searchQuery) : MOCK_ARTICLES);
        setError('Could not connect to server. Showing demo articles.');
      }
    } finally {
      setLoading(false);
    }
  }, [category, searchQuery, country, page]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  // ─── Infinite Scroll Observer ────────────────────────────
  const observerRef = useRef<IntersectionObserver | null>(null);
  const bottomBoundaryRef = useCallback(
    (node: HTMLDivElement | null) => {
      // Don't observe if we are actively loading anew, have no more items, viewing bookmarks, or using mock data
      if (loading || !hasMore || showingBookmarks || usingMock) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore, showingBookmarks, usingMock]
  );

  // ─── Event handlers ──────────────────────────────────────
  const handleCategoryChange = (cat: Category) => {
    setSearchQuery('');
    setCategory(cat);
    setShowingBookmarks(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCountryChange = (c: string) => {
    setCountry(c);
    setShowingBookmarks(false);
  };

  // ─── Header info text ────────────────────────────────────
  const headingText = showingBookmarks
    ? 'Saved Articles'
    : searchQuery
    ? `Search results for "${searchQuery}"`
    : `${category} Headlines ${country !== 'global' ? `(${country.toUpperCase()})` : ''}`;

  // ─── Displayed Articles ──────────────────────────────────
  const displayedArticles = showingBookmarks
    ? searchQuery
      ? bookmarks.filter(
          (a) =>
            a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : bookmarks
    : articles;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        theme={theme}
        toggleTheme={toggleTheme}
        showingBookmarks={showingBookmarks}
        onShowBookmarks={() => setShowingBookmarks((prev) => !prev)}
        bookmarkCount={bookmarks.length}
        selectedCountry={country}
        onCountryChange={handleCountryChange}
      />

      {/* ─── Trending Ticker ────────────────────────────── */}
      {!showingBookmarks && !loading && articles.length > 0 && page === 1 && (
        <Ticker articles={articles.slice(0, 5)} />
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        {/* ─── Status Bar ────────────────────────────────── */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground transition-all">
              {headingText}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              {showingBookmarks ? (
                <span className="inline-flex items-center gap-1.5 text-xs text-primary">
                  <Bookmark className="w-3.5 h-3.5" />
                  Local Storage
                </span>
              ) : usingMock ? (
                <span className="inline-flex items-center gap-1.5 text-xs text-accent-warm">
                  <WifiOff className="w-3.5 h-3.5" />
                  Demo Mode
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-success">
                  <Wifi className="w-3.5 h-3.5" />
                  Live
                </span>
              )}
              <span className="text-xs text-foreground-muted">
                {displayedArticles.length} article{displayedArticles.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          <button
            id="refresh-button"
            onClick={() => { setPage(1); loadArticles(); }}
            disabled={loading && page === 1}
            className="p-2.5 rounded-xl bg-surface/50 border border-border text-foreground-muted hover:text-foreground hover:border-primary/30 transition-all disabled:opacity-40"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading && page === 1 && !showingBookmarks ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* ─── Error Banner ──────────────────────────────── */}
        {error && page === 1 && (
          <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-200">{error}</p>
          </div>
        )}

        {/* ─── Content ───────────────────────────────────── */}
        {loading && page === 1 && !showingBookmarks ? (
          <Loader />
        ) : displayedArticles.length > 0 ? (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedArticles.map((article, i) => (
                <NewsCard 
                  key={article.url + i} 
                  article={article} 
                  index={i % 10} // reset animation index for new pages
                  isBookmarked={isBookmarked(article.url)}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            </div>
            
            {/* Infinite Scroll trigger / Loading indicator */}
            {!showingBookmarks && hasMore && !usingMock && (
              <div 
                ref={bottomBoundaryRef}
                className="w-full py-8 flex items-center justify-center text-foreground-muted"
              >
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            )}
            
            {!showingBookmarks && !hasMore && !usingMock && articles.length > 0 && (
               <div className="w-full py-8 flex items-center justify-center text-sm text-foreground-muted">
                 No more articles to load.
               </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-surface/50 flex items-center justify-center mb-4">
              {showingBookmarks && !searchQuery ? (
                <Bookmark className="w-8 h-8 text-foreground-muted" />
              ) : (
                <span className="text-4xl">🔍</span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {showingBookmarks && !searchQuery ? "No bookmarks yet" : "No articles found"}
            </h3>
            <p className="text-sm text-foreground-muted text-center max-w-sm">
              {showingBookmarks && !searchQuery 
                ? "Articles you save will appear here." 
                : "Try a different search term or browse another category."}
            </p>
          </div>
        )}
      </main>

      {/* ─── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-border mt-auto w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-muted">
            © 2026 NewsHub — Smart News Aggregator
          </p>
          <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
            <span>Powered by</span>
            <a
              href="https://gnews.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors"
            >
              GNews API
            </a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

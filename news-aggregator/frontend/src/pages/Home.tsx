import { useQuery } from '@tanstack/react-query';
import { Navbar } from '../components/Navbar';
import { NewsCard } from '../components/NewsCard';
import { AuthModal } from '../components/AuthModal';
import { newsService } from '../services/api';
import { useState } from 'react';

export const Home = () => {
  const [currentCategory, setCurrentCategory] = useState('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Use React Query for awesome fetching, caching, and state management
  const { data: articles, isLoading, isError } = useQuery({
    queryKey: ['news', currentCategory, searchQuery],
    queryFn: () => {
      if (searchQuery) {
        return newsService.searchNews(searchQuery);
      }
      return newsService.getTopHeadlines(currentCategory);
    },
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentCategory('Search Results');
  };

  const handleCategorySelect = (category: string) => {
    setCurrentCategory(category);
    setSearchQuery(''); // Clear search when switching categories
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar 
        onSearch={handleSearch} 
        onCategorySelect={handleCategorySelect}
        currentCategory={currentCategory} 
        onAuthClick={() => setIsAuthOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {searchQuery ? `Results for "${searchQuery}"` : `${currentCategory} News`}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Fetching the latest headlines from trusted sources around the globe.
          </p>
        </div>

        {/* Loading State Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card animate-pulse h-[400px]">
                <div className="h-56 bg-slate-200 dark:bg-slate-700 w-full"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="glass-card p-10 text-center animate-fade-in border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Failed to load news</h2>
            <p className="text-slate-600 dark:text-slate-300">
              Please check your connection or try again later. If the backend is not running, 
              mock data should have been displayed automatically.
            </p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && articles?.length === 0 && (
          <div className="glass-card p-16 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">📭</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">No articles found</h2>
            <p className="text-slate-500 max-w-md">
              We couldn't find any news matching your criteria. Try adjusting your search terms or selecting a different category.
            </p>
          </div>
        )}

        {/* Success Grid view */}
        {!isLoading && !isError && articles && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <div 
                key={`${article.url}-${idx}`} 
                className="animate-slide-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <NewsCard 
                  article={article} 
                  onSave={() => setIsAuthOpen(true)} 
                />
              </div>
            ))}
          </div>
        )}
      </main>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={() => console.log('Successfully authenticated')}
      />
    </div>
  );
};

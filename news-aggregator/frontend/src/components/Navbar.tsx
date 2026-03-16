import { Menu, Moon, Search, SunMedium, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils/cn';
import type { NewsCategory } from './NewsCard';

export const NEWS_CATEGORIES: NewsCategory[] = [
  'Latest',
  'Technology',
  'Business',
  'Sports',
  'Health',
  'Entertainment',
];

interface NavbarProps {
  currentCategory: NewsCategory;
  isDarkMode: boolean;
  bookmarkCount: number;
  searchValue: string;
  onCategorySelect: (category: NewsCategory) => void;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
  onThemeToggle: () => void;
}

export const Navbar = ({
  currentCategory,
  isDarkMode,
  bookmarkCount,
  searchValue,
  onCategorySelect,
  onSearchChange,
  onSearchSubmit,
  onThemeToggle,
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit();
    setIsMobileMenuOpen(false);
  };

  const handleCategoryClick = (category: NewsCategory) => {
    onCategorySelect(category);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleCategoryClick('Latest')}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white shadow-lg shadow-slate-950/20 dark:bg-white dark:text-slate-950">
            SN
          </div>
          <div className="hidden sm:block">
            <p className="text-lg font-bold tracking-tight text-slate-950 dark:text-white">
              Smart News
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Aggregator
            </p>
          </div>
        </button>

        <form onSubmit={handleSubmit} className="hidden flex-1 md:block">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search by keyword, topic, or source"
              className="w-full rounded-full border border-slate-200 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-slate-800 dark:bg-slate-900/90 dark:text-white"
            />
          </label>
        </form>

        <div className="hidden items-center gap-3 md:flex">
          <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
            Bookmarks {bookmarkCount}
          </div>
          <button
            type="button"
            onClick={onThemeToggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 md:hidden dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="hidden border-t border-white/20 px-4 py-3 md:block dark:border-slate-800/80">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {NEWS_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition',
                currentCategory === category
                  ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                  : 'bg-white/70 text-slate-600 hover:bg-slate-950 hover:text-white dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/20 px-4 py-4 md:hidden dark:border-slate-800/80">
          <form onSubmit={handleSubmit}>
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchValue}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search news..."
                className="w-full rounded-2xl border border-slate-200 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-slate-800 dark:bg-slate-900/90 dark:text-white"
              />
            </label>
          </form>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {NEWS_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  'rounded-2xl px-4 py-3 text-left text-sm font-medium transition',
                  currentCategory === category
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'bg-white/80 text-slate-600 dark:bg-slate-900/80 dark:text-slate-300',
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 dark:bg-slate-900/80">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Bookmarks {bookmarkCount}
            </span>
            <button
              type="button"
              onClick={onThemeToggle}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

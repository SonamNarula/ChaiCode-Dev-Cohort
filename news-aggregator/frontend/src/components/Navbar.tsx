import { useState, useEffect, useRef } from 'react';
import { Search, Newspaper, X, Moon, Sun, Bookmark, Globe } from 'lucide-react';
import type { Category } from '../utils/mockData';
import { CATEGORIES } from '../utils/mockData';

const COUNTRIES = [
  { code: 'global', label: 'Global' },
  { code: 'in', label: 'India' },
  { code: 'us', label: 'US' },
  { code: 'gb', label: 'UK' },
  { code: 'au', label: 'Australia' },
];

interface NavbarProps {
  selectedCategory: Category;
  onCategoryChange: (cat: Category) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onShowBookmarks: () => void;
  showingBookmarks: boolean;
  bookmarkCount: number;
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

export function Navbar({
  selectedCategory,
  onCategoryChange,
  onSearch,
  searchQuery,
  theme,
  toggleTheme,
  onShowBookmarks,
  showingBookmarks,
  bookmarkCount,
  selectedCountry,
  onCountryChange,
}: NavbarProps) {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounce search input
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(localQuery);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [localQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  const clearSearch = () => {
    setLocalQuery('');
    onSearch('');
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ─── Top Row: Logo + Search ─────────────────────── */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Newspaper className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              NewsHub
            </h1>
          </div>

          {/* Actions: Search, Theme, Bookmarks */}
          <div className="flex items-center gap-3 flex-1 justify-end max-w-md">
            {/* Search Bar */}
            <div className="relative flex-1 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted pointer-events-none" />
              <input
                id="search-input"
                type="text"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-surface/50 border border-border text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
              />
              {localQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Country Dropdown */}
            <div className="relative hidden sm:block">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted pointer-events-none" />
              <select
                value={selectedCountry}
                onChange={(e) => onCountryChange(e.target.value)}
                className="appearance-none pl-9 pr-8 py-2.5 rounded-xl bg-surface/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all cursor-pointer"
                title="Filter by Country"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bookmarks Toggle */}
            <button
              onClick={onShowBookmarks}
              className={`relative p-2.5 rounded-xl border transition-all ${
                showingBookmarks
                  ? 'bg-primary/10 border-primary/30 text-primary'
                  : 'bg-surface/50 border-border text-foreground-muted hover:text-foreground hover:border-primary/30'
              }`}
              title="Saved Articles"
            >
              <Bookmark className={`w-5 h-5 ${showingBookmarks ? 'fill-current' : ''}`} />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-surface/50 border border-border text-foreground-muted hover:text-foreground hover:border-primary/30 transition-all"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ─── Category Pills ────────────────────────────── */}
        <nav className="flex gap-1.5 pb-3 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`category-${cat.toLowerCase()}`}
                onClick={() => {
                  setLocalQuery('');
                  onSearch('');
                  onCategoryChange(cat);
                }}
                className={`
                  shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    isActive && !showingBookmarks
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                      : 'text-foreground-muted hover:text-foreground hover:bg-surface-light'
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </nav>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </header>
  );
}

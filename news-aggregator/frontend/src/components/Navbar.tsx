import { Search, Menu, X, Bell } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils/cn';

const CATEGORIES = ['General', 'Technology', 'Business', 'Sports', 'Science', 'Health', 'Entertainment'];

interface NavbarProps {
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
  currentCategory: string;
  onAuthClick?: () => void;
}

export const Navbar = ({ onSearch, onCategorySelect, currentCategory, onAuthClick }: NavbarProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => onCategorySelect('General')}>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground hidden sm:block">
              NewsCore
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-full leading-5 bg-slate-50 dark:bg-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                  placeholder="Search articles..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500">
              <Bell className="h-5 w-5" />
            </button>
            <div 
              onClick={onAuthClick}
              className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center font-semibold cursor-pointer shadow-sm hover:opacity-90 transition-opacity"
            >
              U
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Bar (Desktop) */}
      <div className="hidden md:block border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto py-3 custom-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className={cn(
                  "whitespace-nowrap py-1 px-3 rounded-md text-sm font-medium transition-all duration-200",
                  currentCategory === category
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10"
                )}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Search articles..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </form>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategorySelect(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium text-left transition-colors",
                    currentCategory === category
                      ? "bg-primary text-white"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

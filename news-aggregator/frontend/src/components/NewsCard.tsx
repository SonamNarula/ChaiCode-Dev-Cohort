import { Bookmark, BookmarkCheck, CalendarDays, ExternalLink } from 'lucide-react';

export type NewsCategory =
  | 'Latest'
  | 'Technology'
  | 'Business'
  | 'Sports'
  | 'Health'
  | 'Entertainment';

export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  category?: NewsCategory;
}

interface NewsCardProps {
  article: Article;
  onToggleBookmark: (article: Article) => void;
  isBookmarked: boolean;
}

export const NewsCard = ({ article, onToggleBookmark, isBookmarked }: NewsCardProps) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(article.publishedAt));

  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden">
      <div className="relative h-52 overflow-hidden bg-slate-200/70 dark:bg-slate-800/70">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
          {article.source.name}
        </div>
        <button
          type="button"
          onClick={() => onToggleBookmark(article)}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-slate-950/35 text-white backdrop-blur-sm transition hover:bg-slate-950/55"
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {isBookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
          {article.category ? <span>{article.category}</span> : null}
        </div>

        <h2 className="line-clamp-2 text-xl font-semibold leading-tight text-slate-950 transition-colors group-hover:text-primary dark:text-white">
          {article.title}
        </h2>

        <p className="line-clamp-3 mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {article.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-4 dark:border-slate-800">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
              {article.author || 'Staff Writer'}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Trusted source link</p>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white"
          >
            Open
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

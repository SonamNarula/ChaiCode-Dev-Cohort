import { Bookmark, ExternalLink, Calendar } from 'lucide-react';

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
}

interface NewsCardProps {
  article: Article;
  onSave?: (article: Article) => void;
  isSaved?: boolean;
}

export const NewsCard = ({ article, onSave, isSaved = false }: NewsCardProps) => {
  // Format the date nicely
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(article.publishedAt));

  return (
    <article className="glass-card flex flex-col overflow-hidden group h-full relative">
      <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback for broken images
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <span>No Image Available</span>
          </div>
        )}
        
        {/* Source Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 text-xs font-semibold bg-white/90 dark:bg-slate-900/90 text-primary rounded-full shadow-sm backdrop-blur-sm">
            {article.source.name}
          </span>
        </div>

        {/* Save Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            if (onSave) onSave(article);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors backdrop-blur-sm shadow-sm"
          title={isSaved ? "Remove from saved" : "Save article"}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-primary text-primary' : ''}`} />
        </button>
      </div>

      <div className="flex 1 flex-col p-5 sm:p-6 flex-grow">
        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </span>
          {article.author && (
            <>
              <span>•</span>
              <span className="truncate max-w-[120px]">{article.author}</span>
            </>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-6 flex-grow">
          {article.description || 'No description provided for this article.'}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            Read full article
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

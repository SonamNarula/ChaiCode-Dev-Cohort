import { ExternalLink, Clock, Bookmark, Share2, BookOpen } from 'lucide-react';
import type { Article } from '../utils/mockData';

interface NewsCardProps {
  article: Article;
  index: number;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function getReadingTime(text: string): string {
  if (!text) return '1 min read';
  const words = text.trim().split(/\s+/).length;
  const mins = Math.ceil(words / 200); // assume 200 wpm
  return `${mins} min read`;
}

export function NewsCard({ article, index, isBookmarked, onToggleBookmark }: NewsCardProps) {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    const shareData = {
      title: article.title,
      text: article.description,
      url: article.url,
    };
    
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(article.url);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing', err);
    }
  };

  return (
    <article
      className="glass-card overflow-hidden flex flex-col animate-fade-in"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* Image */}
      {article.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1504711434969-e33886168d9c?w=600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Source badge overlaid on image */}
          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary/80 backdrop-blur text-white shadow-lg">
            {article.source.name}
          </span>
          {/* Top Right Actions: Share & Bookmark */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-glass border border-glass-border hover:bg-surface/90 transition-all shadow-lg group/share"
              title="Share Article"
            >
              <Share2 className="w-4 h-4 text-foreground-muted group-hover/share:text-foreground transition-colors" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleBookmark(article);
              }}
              className="p-2 rounded-full bg-glass border border-glass-border hover:bg-surface/90 transition-all shadow-lg group/btn"
              title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
            >
              <Bookmark
                className={`w-4 h-4 transition-colors ${
                  isBookmarked ? 'fill-accent text-accent' : 'text-foreground-muted group-hover/btn:text-foreground'
                }`}
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <span className="text-4xl opacity-30">📰</span>
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-glass border border-glass-border hover:bg-surface/90 transition-all shadow-lg group/share"
              title="Share Article"
            >
              <Share2 className="w-4 h-4 text-foreground-muted group-hover/share:text-foreground transition-colors" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleBookmark(article);
              }}
              className="p-2 rounded-full bg-glass border border-glass-border hover:bg-surface/90 transition-all shadow-lg group/btn"
              title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
            >
              <Bookmark
                className={`w-4 h-4 transition-colors ${
                  isBookmarked ? 'fill-accent text-accent' : 'text-foreground-muted group-hover/btn:text-foreground'
                }`}
              />
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col gap-3">
        <h3 className="text-base font-semibold leading-snug text-foreground line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-foreground-muted leading-relaxed line-clamp-3 flex-1">
          {article.description || 'No description available.'}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
              <Clock className="w-3.5 h-3.5" />
              <span>{timeAgo(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground-muted border-l border-border pl-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{getReadingTime(article.description || article.title)}</span>
            </div>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-light transition-colors"
          >
            Read More
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

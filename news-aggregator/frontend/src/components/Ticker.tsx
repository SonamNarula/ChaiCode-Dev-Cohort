import { Zap } from 'lucide-react';
import type { Article } from '../utils/mockData';

interface TickerProps {
  articles: Article[];
}

export function Ticker({ articles }: TickerProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="w-full bg-surface-light border-b border-border py-2 overflow-hidden flex items-center">
      <div className="flex-none px-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent border-r border-border bg-surface-light z-10 relative shadow-[10px_0_15px_-5px_rgba(0,0,0,0.1)]">
        <Zap className="w-3.5 h-3.5 fill-current" />
        Trending
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <div className="animate-ticker flex whitespace-nowrap items-center hover:[animation-play-state:paused] cursor-pointer">
          {/* We duplicate the list to create a seamless infinite loop */}
          {[...articles, ...articles].map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 text-sm text-foreground hover:text-primary transition-colors border-r border-border/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 block" />
              {article.title}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

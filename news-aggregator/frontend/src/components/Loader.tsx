export function Loader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="glass-card overflow-hidden animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
          {/* Image skeleton */}
          <div className="skeleton h-48 rounded-none" />
          {/* Content skeleton */}
          <div className="p-5 space-y-3">
            <div className="skeleton h-5 w-3/4" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-5/6" />
            <div className="flex justify-between pt-3">
              <div className="skeleton h-3 w-16" />
              <div className="skeleton h-3 w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

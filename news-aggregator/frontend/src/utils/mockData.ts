export interface Article {
  title: string;
  description: string;
  content?: string;
  url: string;
  image: string | null;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export const CATEGORIES = [
  'General',
  'Technology',
  'Business',
  'Sports',
  'Health',
  'Entertainment',
  'Science',
] as const;

export type Category = (typeof CATEGORIES)[number];

// ─── Mock Data for demo without API key ─────────────────────
export const MOCK_ARTICLES: Article[] = [
  {
    title: 'AI Revolution: How Machine Learning Is Transforming Healthcare Diagnostics',
    description:
      'New AI models can detect diseases from medical imaging with 97% accuracy, outperforming many experienced radiologists in early-stage cancer detection.',
    url: 'https://example.com/ai-healthcare',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
    publishedAt: '2026-03-16T10:30:00Z',
    source: { name: 'TechCrunch', url: 'https://techcrunch.com' },
  },
  {
    title: 'Global Markets Rally as Central Banks Signal Rate Cuts',
    description:
      'Stock markets worldwide surged after the Federal Reserve and ECB hinted at potential interest rate reductions in the coming quarter.',
    url: 'https://example.com/markets-rally',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    publishedAt: '2026-03-16T09:15:00Z',
    source: { name: 'Bloomberg', url: 'https://bloomberg.com' },
  },
  {
    title: 'SpaceX Successfully Launches Crew to International Space Station',
    description:
      'The Crew Dragon spacecraft carried four astronauts to the ISS in a flawless launch from Kennedy Space Center, marking the 15th crewed mission.',
    url: 'https://example.com/spacex-launch',
    image: 'https://images.unsplash.com/photo-1541185933-55f48f8dfb49?w=600&q=80',
    publishedAt: '2026-03-16T08:00:00Z',
    source: { name: 'Reuters', url: 'https://reuters.com' },
  },
  {
    title: 'Premier League Title Race Heats Up With Dramatic Weekend Results',
    description:
      'A stunning last-minute goal and multiple upsets have tightened the Premier League standings with only six games remaining in the season.',
    url: 'https://example.com/premier-league',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    publishedAt: '2026-03-15T22:00:00Z',
    source: { name: 'ESPN', url: 'https://espn.com' },
  },
  {
    title: 'New Study Reveals Coffee May Reduce Risk of Type 2 Diabetes',
    description:
      'Researchers at Harvard found that moderate coffee consumption is associated with a 30% lower risk of developing Type 2 diabetes over a 20-year period.',
    url: 'https://example.com/coffee-diabetes',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    publishedAt: '2026-03-15T16:45:00Z',
    source: { name: 'Health Today', url: 'https://healthtoday.com' },
  },
  {
    title: 'Oscar-Winning Director Announces Next Sci-Fi Epic',
    description:
      'Christopher Nolan reveals his upcoming film exploring parallel universes, set for a 2027 IMAX release with a star-studded ensemble cast.',
    url: 'https://example.com/nolan-scifi',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80',
    publishedAt: '2026-03-15T14:30:00Z',
    source: { name: 'Variety', url: 'https://variety.com' },
  },
  {
    title: 'Electric Vehicle Sales Surpass 50% Market Share in Europe',
    description:
      'For the first time, EVs accounted for more than half of all new vehicle registrations across European markets in the first quarter.',
    url: 'https://example.com/ev-europe',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
    publishedAt: '2026-03-15T12:00:00Z',
    source: { name: 'The Guardian', url: 'https://theguardian.com' },
  },
  {
    title: 'India Launches Its Most Advanced Weather Satellite',
    description:
      'ISRO successfully deployed a next-generation weather monitoring satellite that will improve cyclone prediction accuracy by up to 40%.',
    url: 'https://example.com/isro-satellite',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80',
    publishedAt: '2026-03-15T10:30:00Z',
    source: { name: 'NDTV', url: 'https://ndtv.com' },
  },
  {
    title: 'Breakthrough Gene Therapy Shows Promise for Alzheimer\'s Treatment',
    description:
      'A clinical trial of a new gene therapy approach has shown significant cognitive improvement in early-stage Alzheimer\'s patients.',
    url: 'https://example.com/gene-therapy',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
    publishedAt: '2026-03-14T18:00:00Z',
    source: { name: 'Nature', url: 'https://nature.com' },
  },
  {
    title: 'World\'s Largest Coral Reef Restoration Project Begins in Australia',
    description:
      'Scientists have launched a $500 million initiative to restore damaged sections of the Great Barrier Reef using lab-grown coral techniques.',
    url: 'https://example.com/reef-restoration',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&q=80',
    publishedAt: '2026-03-14T15:00:00Z',
    source: { name: 'BBC News', url: 'https://bbc.com' },
  },
  {
    title: 'Japan\'s Bullet Train Network Expands to New Northern Routes',
    description:
      'The Shinkansen high-speed railway opens three new stations in Hokkaido, cutting travel time between Tokyo and Sapporo to under three hours.',
    url: 'https://example.com/shinkansen',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    publishedAt: '2026-03-14T11:00:00Z',
    source: { name: 'NHK World', url: 'https://nhk.or.jp' },
  },
  {
    title: 'Quantum Computing Milestone: Google Achieves 1000-Qubit Processor',
    description:
      'Google\'s quantum team announces a 1000-qubit processor that could solve complex optimization problems millions of times faster than classical computers.',
    url: 'https://example.com/quantum-google',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
    publishedAt: '2026-03-14T08:00:00Z',
    source: { name: 'Wired', url: 'https://wired.com' },
  },
];

// Filter mock articles by a rough category mapping
export function filterMockByCategory(category: Category): Article[] {
  const categoryMap: Record<string, string[]> = {
    technology: ['AI', 'Quantum', 'Electric Vehicle', 'SpaceX'],
    science: ['Quantum', 'Gene Therapy', 'Coral Reef', 'ISRO', 'Satellite'],
    business: ['Markets', 'EV Sales', 'Market Share'],
    sports: ['Premier League', 'Title Race'],
    health: ['Coffee', 'Diabetes', 'Alzheimer', 'Gene Therapy'],
    entertainment: ['Oscar', 'Nolan', 'Film'],
  };

  if (category.toLowerCase() === 'general') return MOCK_ARTICLES;

  const keywords = categoryMap[category.toLowerCase()] || [];
  return MOCK_ARTICLES.filter((a) =>
    keywords.some(
      (kw) =>
        a.title.toLowerCase().includes(kw.toLowerCase()) ||
        a.description.toLowerCase().includes(kw.toLowerCase())
    )
  );
}

// Filter mock articles by search keyword
export function searchMockArticles(query: string): Article[] {
  const q = query.toLowerCase().trim();
  if (!q) return MOCK_ARTICLES;
  return MOCK_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.source.name.toLowerCase().includes(q)
  );
}

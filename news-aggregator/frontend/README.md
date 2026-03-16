# Smart News Aggregator Frontend

A responsive React + TypeScript news application built with Vite. The app fetches the latest headlines from the backend, supports category-based browsing, keyword search, article bookmarks, and dark mode.

## Features

- Latest news feed from the backend news API
- Category filters for `Latest`, `Technology`, `Business`, `Sports`, `Health`, and `Entertainment`
- Search flow for finding articles by keyword
- News card UI with image, title, description, publish date, source, and article link
- Responsive layout for mobile and desktop
- Local bookmarks stored in `localStorage`
- Dark mode with persisted theme preference
- Mock article fallback when the backend or News API key is unavailable

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- Axios
- Lucide React

## Project Structure

```text
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── NewsCard.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
└── package.json
```

## Getting Started

### 1. Install dependencies

From the `frontend` folder:

```bash
npm install
```

### 2. Optional environment variable

Create a `.env` file inside `frontend/` if you want to override the backend base URL:

```env
VITE_API_URL=http://localhost:5000/api
```

If you skip this, the frontend uses `http://localhost:5000/api` by default.

### 3. Run the frontend

```bash
npm run dev
```

The Vite development server will usually start on `http://localhost:5173`.

## Backend Connection

This frontend expects the Express backend to be running on port `5000` unless `VITE_API_URL` is changed.

Backend notes:

- Health endpoint: `GET /api/health`
- News endpoint: `GET /api/news`
- Search support: `GET /api/news?search=keyword`
- Category support: `GET /api/news?category=Technology`

If the backend is down or the backend cannot return live news, the frontend falls back to mock article data so the UI still works.

## Available Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Full Project Run

If you want to run frontend and backend together from the project root:

```bash
cd ..
npm install
npm run dev
```

That uses the root `news-aggregator/package.json` scripts to start both services together.

## Notes

- Bookmarks are stored only in the browser, not in the database
- Theme preference is stored in `localStorage`
- Live news depends on the backend News API configuration

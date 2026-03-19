# ChaiCode Dev Cohort

Living technical notebook for the cohort — build small, think clearly, ship often.

---

## What’s inside
- **Prime project:** `news-aggregator/` (NeuroNews) — React + Vite + TypeScript frontend with an Express proxy.
- **JavaScript Lab:** `JAVASCRIPT/` console-first fundamentals and drills.
- **UI drills:** Mintlify/Cursor recreations and other perception exercises.
- **Commerce + Conversational:** Nike Store (cart/checkout logic) and SwiftMind (chat-style UI).

Repo map (high level):
```
news-aggregator/
  backend/       Express proxy + GNews integration
  frontend/      React/Vite client
JAVASCRIPT/
  BASICS - 1/    drills, labs, PDFs
  JS_Learn_Everything.pdf
...
```

---

## NeuroNews (news-aggregator)
**Stack:** React, Vite, TypeScript, Tailwind, Express proxy, Axios, Concurrent dev runner  
**Core behavior:** search, categories, bookmarks, dark mode, rate-limit-safe API handling with proxy fallback.

### Run it locally
Prereqs: Node 20+, npm.

```bash
cd news-aggregator
npm install                 # root (installs concurrently)
npm install --prefix backend
npm install --prefix frontend

# backend env
cat > backend/.env <<'EOF'
PORT=5001
GNEWS_API_KEY=YOUR_GNEWS_KEY_HERE
EOF

# start both servers (proxy 5001, Vite 5173/5174)
npm run dev
```

Health checks:
- Backend: `curl http://localhost:5001/api/news?query=ai`
- Frontend: open `http://localhost:5173` (or 5174)

Troubleshooting:
- Port in use → adjust `PORT` in `backend/.env` and Vite port via `frontend/vite.config`.
- 429/limit hit → proxy will fall back to local JSON mocks; confirm in network tab.

### Architecture highlights
- Express proxy centralizes API key usage and CORS.
- Axios instances with global timeout/retry envelope.
- Mock data path for rate-limit resilience.
- Planned: Redis caching layer and sentiment tagging (see Roadmap).

---

## JavaScript Lab (console-first)
- Open `JAVASCRIPT/index.html` directly or with Live Server; watch DevTools Console.
- Drills: `JAVASCRIPT/BASICS - 1/script.js`, closure demo in `day2.js`, hoisting demo in `brain.js`.
- Topics: variables/scope, data types, operators, control flow, loops, functions & closures, arrays, objects.
- Notes: `JAVASCRIPT/JS_Learn_Everything.pdf` for theory dumps.

Quick run example (from repo root):
```bash
node "JAVASCRIPT/BASICS - 1/day2.js"
```

---

## Learning tracks (how to practice)
- **Fundamentals:** Console-first JavaScript; rewrite drills without looking; explain each log.
- **UI perception:** Recreate tiny sections of Mintlify/Cursor until pixel-perfect.
- **Commerce flows:** Nike Store cart math, checkout states, edge cases (empty cart, rapid add/remove).
- **Conversational UI:** SwiftMind — handle message timing, loading states, keyboard focus.

---

## Tech stack
- Frontend → React, Vite, TypeScript, Tailwind
- Backend → Node.js, Express
- Data → MongoDB (planned), mock JSON, future Redis cache
- Tooling → npm, Concurrently, Git, Docker, Postman
- Languages → JavaScript, TypeScript, C++

---

## Roadmap
- Add Redis caching + sentiment tagging to NeuroNews.
- JS performance labs: event loop tracing, async patterns, GC hygiene.
- Stabilize a light/dark design system shared across projects.

---

## Working style
- Prefer small commits with a single concern.
- Keep console instrumentation until behavior is stable, then trim.
- When something breaks: reproduce → log state/inputs → fix → write down why.

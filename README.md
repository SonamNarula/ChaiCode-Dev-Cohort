# ✨ ChaiCode Dev Cohort
Living technical notebook for focused builds, clear thinking, and fast iteration.

[![Build Small](https://img.shields.io/badge/strategy-build_small-blueviolet?style=flat-square)]()
[![Stack](https://img.shields.io/badge/frontend-React%2FVite%2FTS-0ea5e9?style=flat-square)]()
[![Stack](https://img.shields.io/badge/backend-Express-orange?style=flat-square)]()
[![Style](https://img.shields.io/badge/console-first-green?style=flat-square)]()

---

## 🔎 What’s inside
- **Prime project:** `news-aggregator/` (NeuroNews) — React + Vite + TypeScript + Express proxy.
- **JavaScript Lab:** `JAVASCRIPT/` console-first fundamentals & drills.
- **UI drills:** Mintlify/Cursor recreations for perception training.
- **Commerce + Conversational:** Nike Store (cart/checkout logic) and SwiftMind (chat-style UI).

Repo map
```
news-aggregator/
  backend/   Express proxy + GNews integration
  frontend/  React/Vite client
JAVASCRIPT/
  BASICS - 1/    drills, labs, PDFs
  JS_Learn_Everything.pdf
...
```

---

## 🚀 NeuroNews (news-aggregator)
**Stack:** React · Vite · TypeScript · Tailwind · Express proxy · Axios · Concurrent dev runner  
**Behavior:** search, categories, bookmarks, dark mode, rate-limit-safe via proxy + mock fallback.

### Quickstart
```bash
cd news-aggregator
npm install                 # root (concurrently)
npm install --prefix backend
npm install --prefix frontend

cat > backend/.env <<'EOF'
PORT=5001
GNEWS_API_KEY=YOUR_GNEWS_KEY_HERE
EOF

npm run dev                  # proxy 5001, Vite 5173/5174
```

Health checks:
- Backend → `curl http://localhost:5001/api/news?query=ai`
- Frontend → open `http://localhost:5173`

Troubleshooting:
- Port clash? change `PORT` in `backend/.env` and Vite port in `frontend/vite.config`.
- 429/limit? proxy auto-falls back to local JSON mocks (see Network tab).

### Architecture hits
- Express proxy centralizes keys + CORS and guards rate limits.
- Axios instance with shared timeout/retry envelope.
- Mock data path keeps UI alive when API is down.
- Roadmap: Redis cache + sentiment tagging.

---

## 🧪 JavaScript Lab (console-first)
- Open `JAVASCRIPT/index.html` directly or with Live Server; watch DevTools Console.
- Drills: `JAVASCRIPT/BASICS - 1/script.js`, closures in `day2.js`, hoisting in `brain.js`.
- Topics: variables/scope, data types, operators, control flow, loops, functions & closures, arrays, objects.
- Notes: `JAVASCRIPT/JS_Learn_Everything.pdf`.

Quick run:
```bash
node "JAVASCRIPT/BASICS - 1/day2.js"
```

---

## 🎯 Learning tracks
- Fundamentals → redo drills blind, narrate each log.
- UI perception → pixel-match small sections of Mintlify/Cursor.
- Commerce → Nike Store cart math & edge cases (empty cart, rapid add/remove).
- Conversational UI → SwiftMind typing/latency/keyboard-focus polish.

---

## 🛠️ Tech stack
- Languages: <img src="https://skillicons.dev/icons?i=cpp,js,ts,html,css" />
- Frontend: <img src="https://skillicons.dev/icons?i=react,vite,tailwind" />
- Backend: <img src="https://skillicons.dev/icons?i=nodejs,express" />
- Data: <img src="https://skillicons.dev/icons?i=mongodb,firebase,redis" />
- Tooling: <img src="https://skillicons.dev/icons?i=npm,git,github,postman,docker" />

---

## 🗺️ Roadmap
- [ ] Redis caching + sentiment tagging (NeuroNews)
- [ ] JS performance labs: event loop traces, async patterns, GC hygiene
- [ ] Shared light/dark design system across projects

---

## 🧭 Working style
- Small, single-purpose commits.
- Keep console instrumentation until behavior is stable, then trim.
- When it breaks: reproduce → log inputs/state → fix → note the root cause.

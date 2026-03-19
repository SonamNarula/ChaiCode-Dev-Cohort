# ChaiCode Dev Cohort

An ongoing technical notebook: focused practice, measured builds, and the thinking behind them.

---

## Snapshot
- **Prime project:** NeuroNews — React/Vite/TypeScript frontend with an Express proxy that sanitizes GNews responses, supports search, categories, bookmarks, dark mode, and a rate‑limit‑safe demo path.
- **Learning tracks:** JS fundamentals (console-first chapter pack), UI perception drills, commerce flows, and conversational UI experiments.
- **Philosophy:** Precision over flash. Small reproducible experiments that scale into reliable products.

---

## Run NeuroNews (current split)
```bash
npm install                      # root dependencies
cat > backend/.env <<'EOF'
PORT=5001
GNEWS_API_KEY=YOUR_GNEWS_KEY_HERE
EOF
npm run dev                      # backend on 5001, frontend on 5173 (or 5174 if 5173 is busy)
```

Health check: `curl http://localhost:5001/api/news?query=ai` should return JSON before opening the UI.

Legacy snapshot lives in `news-aggregator/` (`npm install && npm run dev` there) if you need the original monorepo layout.

---

## JS Lab (fundamentals)
Open `JAVASCRIPT/index.html` (or Live Server) and watch DevTools ➜ Console:
- 01 Variables & scope
- 02 Data types
- 03 Operators
- 04 Control flow
- 05 Loops
- 06 Functions & closures
- 07 Arrays
- 08 Objects
- BASICS‑1: incremental var/let/const drills (`JAVASCRIPT/BASICS - 1/script.js`)
Source notes: `JAVASCRIPT/JS_Learn_Everything.pdf`

---

## Projects
- **NeuroNews:** news ingestion, filtered search, bookmarks, glassmorphic UI, proxy‑secured API.
- **Nike Store:** commerce flows with cart and transactional UI.
- **Swiftmind:** conversational interface experiments.
- **Perception drills:** Mintlify and Cursor landing recreations for visual accuracy.

---

## Stack at a glance
React • Vite • TypeScript • Node.js • Express • MongoDB • Tailwind • C++ (for DSA) • Git • Docker (workbench).

---

## Roadmap (near term)
- Sentiment tagging and Redis caching for NeuroNews.
- Add performance micro-labs to JS Lab (event loop, GC, async patterns).
- Theme-stable design tokens for light/dark without brittle overrides.

---

If you skimmed: run `npm run dev`, open the JS lab console, and tell me what breaks. I optimize from there.

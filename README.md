# ✨ ChaiCode Dev Cohort
Living technical notebook for focused builds, clear thinking, and fast iteration.

[![Build Small](https://img.shields.io/badge/strategy-build_small-blueviolet?style=flat-square)]()
[![Stack](https://img.shields.io/badge/frontend-React%2FVite%2FTS-0ea5e9?style=flat-square)]()
[![Stack](https://img.shields.io/badge/backend-Express-orange?style=flat-square)]()
[![Style](https://img.shields.io/badge/console-first-green?style=flat-square)]()

---

## 🔎 What’s inside
- **Prime project:** `news-aggregator/` (NeuroNews) — React + Vite + TypeScript + Express proxy.
- **JavaScript Lab:** `JAVASCRIPT/` console-first fundamentals & drills (Closures, Hoisting, Scope).
- **HTML & CSS Foundations:** `HTML/` and `CSS/` modules with comprehensive practice sets.
- **Assignments:** `ASSIGNMENT-1/` (HTML Resume) and `ASSIGNMENT-2/` (Portfolio/CV).
- **UI drills:** Mintlify/Cursor recreations for perception training.
- **Commerce + Conversational:** Nike Store (cart/checkout logic), SwiftMind (chat UI), and Bharat_CV.

Repo map
```
news-aggregator/    React/Vite + Express Proxy
JAVASCRIPT/         Basics, Functions, Closures, Hoisting
HTML/               Lessons 01-08 (Semantic, Tables, Forms)
CSS/                Flexbox, Grid, Practice Sets 1-5
ASSIGNMENT-1/       HTML Resume Assignment
ASSIGNMENT-2/       Personal Portfolio/CV
nike-store/         Tailwind-based Commerce Store
swiftmind/          Conversational AI Chat UI
Bharat_CV/          Premium Personal CV Portfolio
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

---

## 🎨 HTML & CSS Foundations
- **HTML Lab:** Lessons covering `structure_and_meta`, `semantic_web`, `tables_complex`, and `forms_complete`.
- **CSS Lab:** Deep dives into `flexbox`, `grid`, `selectors`, and `background` properties.
- **Practice Sets:** 5 comprehensive CSS practice sets from layout design to advanced styling.

---

## 🧪 JavaScript Lab (console-first)
- Open `JAVASCRIPT/index.html` directly or with Live Server; watch DevTools Console.
- **Drills:** `JAVASCRIPT/BASICS - 1/script.js`, functions warm-up in `functions.js`, closures in `day2.js`, hoisting in `brain.js`.
- **Topics:** variables/scope, data types, operators, control flow, loops, functions, closures, hoisting, arrays, objects.
- **Notes:** `JAVASCRIPT/JS_Learn_Everything.pdf`.

Quick run:
```bash
node "JAVASCRIPT/BASICS - 1/day2.js"
node "JAVASCRIPT/BASICS - 1/functions.js"
```

---

## 🎯 Learning tracks
- **Fundamentals:** Redo drills blind, narrate each log. [HTML/CSS/JS]
- **UI perception:** Pixel-match sections of Mintlify/Cursor clones.
- **Commerce:** Nike Store cart logic & edge cases.
- **Conversational UI:** SwiftMind typing/latency/keyboard-focus polish.
- **Personal Branding:** `ASSIGNMENT-2` and `Bharat_CV` implementations.

---

## 🛠️ Tech stack
- Languages: <img src="https://skillicons.dev/icons?i=cpp,js,ts,html,css" />
- Frontend: <img src="https://skillicons.dev/icons?i=react,vite,tailwind" />
- Backend: <img src="https://skillicons.dev/icons?i=nodejs,express" />
- Data: <img src="https://skillicons.dev/icons?i=mongodb,firebase,redis" />
- Tooling: <img src="https://skillicons.dev/icons?i=npm,git,github,postman,docker" />

---

## 🗺️ Roadmap
- [x] HTML & CSS Fundamentals
- [x] JavaScript Basics & Closures
- [ ] Redis caching + sentiment tagging (NeuroNews)
- [ ] JS performance labs: event loop traces, async patterns, GC hygiene
- [ ] Shared light/dark design system across projects

---

## 🧭 Working style
- Small, single-purpose commits.
- Keep console instrumentation until behavior is stable, then trim.
- When it breaks: reproduce → log inputs/state → fix → note root cause.

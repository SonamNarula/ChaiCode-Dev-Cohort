# ChaiCode Dev Cohort

A living technical notebook — focused builds, clear thinking, and iterative improvement.

---

## Snapshot

- **Prime Project — NeuroNews**  
  React + Vite + TypeScript frontend with an Express proxy  
  Features: search, categories, bookmarks, dark mode, rate-limit-safe API handling  

- **Learning Tracks**  
  JavaScript fundamentals (console-first), UI perception drills, commerce flows, conversational UI experiments  

- **Approach**  
  Keep things simple. Build small. Understand deeply. Scale gradually  

---

## Run NeuroNews

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5001
GNEWS_API_KEY=YOUR_GNEWS_KEY_HERE
```

Run the project:

```bash
npm run dev
```

- Backend → http://localhost:5001  
- Frontend → http://localhost:5173 (or 5174)

Health check:

```bash
curl http://localhost:5001/api/news?query=ai
```

---

## JavaScript Lab

Open `JAVASCRIPT/index.html` (or use Live Server) and check DevTools Console.

### Core topics

- Variables & Scope  
- Data Types  
- Operators  
- Control Flow  
- Loops  
- Functions & Closures  
- Arrays  
- Objects  

### Extras

- Incremental drills → `JAVASCRIPT/BASICS - 1/script.js`  
- Notes → `JAVASCRIPT/JS_Learn_Everything.pdf`  

---

## Projects

- **NeuroNews** → News ingestion, filtering, bookmarks, proxy-secured API  
- **Nike Store** → Full-stack commerce flow with cart & UI logic  
- **SwiftMind** → Conversational UI experiments  
- **Perception Drills** → Mintlify & Cursor UI recreations  

---

## Tech Stack

- Frontend → React, Vite, TypeScript, Tailwind  
- Backend → Node.js, Express  
- Database → MongoDB  
- Tools → Git, Docker, Postman  
- DSA → C++  

---

## Roadmap

- Sentiment tagging + Redis caching (NeuroNews)  
- JS performance labs (event loop, async, GC)  
- Stable design system for light/dark themes  

---

## Notes

If you're exploring this:

- run the project  
- open the JS lab  
- break something  
- understand why it broke  

that’s the point.

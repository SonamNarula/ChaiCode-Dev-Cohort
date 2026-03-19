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

```bash
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5001
GNEWS_API_KEY=YOUR_GNEWS_KEY_HERE
```

Then run:

```bash
npm run dev
```

* Backend → http://localhost:5001
* Frontend → http://localhost:5173 (or 5174)

### Health check

```bash
curl http://localhost:5001/api/news?query=ai
```

---

## JavaScript Lab

Open `JAVASCRIPT/index.html` (or use Live Server) and check DevTools Console.

### Core topics

* Variables & Scope
* Data Types
* Operators
* Control Flow
* Loops
* Functions & Closures
* Arrays
* Objects

### Extras

* Incremental drills → `JAVASCRIPT/BASICS - 1/script.js`
* Notes → `JAVASCRIPT/JS_Learn_Everything.pdf`

---

## Projects

* **NeuroNews** → News ingestion, filtering, bookmarks, proxy-secured API
* **Nike Store** → Full-stack commerce flow with cart & UI logic
* **SwiftMind** → Conversational UI experiments
* **Perception Drills** → Mintlify & Cursor UI recreations

---



## tech stack
---

### languages  
<div>
<img src="https://skillicons.dev/icons?i=cpp" />
<img src="https://skillicons.dev/icons?i=js" />
<img src="https://skillicons.dev/icons?i=ts" />
<img src="https://skillicons.dev/icons?i=html" />
<img src="https://skillicons.dev/icons?i=css" />
</div>

---

### frontend  
<div>
<img src="https://skillicons.dev/icons?i=react" />
<img src="https://skillicons.dev/icons?i=tailwind" />
<img src="https://skillicons.dev/icons?i=vite" />
</div>

---

### backend  
<div>
<img src="https://skillicons.dev/icons?i=nodejs" />
<img src="https://skillicons.dev/icons?i=express" />
</div>

---

### database  
<div>
<img src="https://skillicons.dev/icons?i=mongodb" />
<img src="https://skillicons.dev/icons?i=firebase" />
</div>

---

### tools  
<div>
<img src="https://skillicons.dev/icons?i=git" />
<img src="https://skillicons.dev/icons?i=github" />
<img src="https://skillicons.dev/icons?i=postman" />
<img src="https://skillicons.dev/icons?i=docker" />
</div>

---

## Roadmap

* Sentiment tagging + Redis caching (NeuroNews)
* JS performance labs (event loop, async, GC)
* Stable design system for light/dark themes

---

## Notes

If you're exploring this:

* run the project
* open the JS lab
* break something
* understand why it broke

that’s the point.

---

## ✅ This is FINAL FINAL

- proper `.md`  
- no syntax issues  
- clean formatting  
- GitHub ready  

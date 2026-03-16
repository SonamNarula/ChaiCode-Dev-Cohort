# 🚀 NeuroNews: Advanced Aggregator Matrix 📡

[![MERN Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node%20%7C%20Express%20%7C%20Tailwind-61DAFB?style=for-the-badge&logo=react)](#)
[![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite)](#)
[![GNews API](https://img.shields.io/badge/Data-GNews%20API-FF5A5F?style=for-the-badge)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)

*An optimized, glassmorphic full-stack news telemetry platform engineered for high-bandwidth information consumption.*

> "Why scrape the web when you can orchestrate its raw data streams via normalized RESTful topologies?" 🧠

## 🔬 System Overview
**NeuroNews** is a highly performant, real-time news aggregation engine. Designed with a robust **Node.js/Express** middleware layer that proxies and normalizes payloads from the external **GNews API**, it delivers them asynchronously to a hyper-optimized **React/Vite** client. The frontend architecture employs strict Component-Driven Design, leveraging advanced React hooks, custom state management semantics, and native device APIs (Web Share, IntersectionObserver).

The UI isn't just a skeleton; it's a living membrane of **glassmorphism**, dynamic CSS Custom Properties (CSS variables), and GPU-accelerated micro-animations that respond fluidly to human interaction.

---

## ⚡ Core Heuristics & Features

### 📡 Data Layer & Pagination
* **Asynchronous Telemetry:** Axios intercepts and streams payloads from the Express proxy, abstracting away external rate limits and CORS policies.
* **Infinite Scroll (IntersectionObserver API):** No arbitrary pagination limits. As the user's viewport intersects with the synthetic boundary `<div ref={bottomBoundaryRef} />`, state is mutated and subsequent `page++` queries are silently executed. 
* **Graceful Mock Fallback:** If the external API key hits a rate limit (HTTP 429) or is entirely absent, the system autonomously transitions into an offline **Demo Mode** leveraging statically imported dummy metrics without dropping frames.

### 🧬 UI/UX Paradigms
* **Semantic Light/Dark Mode:** Dynamic theme hydration. Toggle seamlessly between localized CSS maps `(var(--background), var(--surface-light))` instantly. State logic persists strictly via `localStorage`.
* **Sub-millisecond Search Debouncing:** A custom React `useRef` timer traps keystrokes, ensuring network bottlenecks aren't provoked by rapid search typing.
* **Algorithmic Reading Time Estimation:** Why guess? The `NewsCard` parses the DOM node string matrix and computes a temporal reading duration based on a fixed ~200 WPM heuristic.

### 💾 Local Data Retention (Bookmarks)
Say goodbye to volatile memory. The platform implements discrete `useEffect` lifecycle tracking attached to an immutable Array map mapped directly to persistent `localStorage`. Toggle articles into your personal cognitive vault.

### 🌍 Geolocation Filtering
Advanced `Country` and `Category` query parameter parsing allows granular scoping of API queries. Extract real-time nodes from regional data silos (`IN`, `US`, `GB`, etc.).

### 📲 Native Web Share API Hooks
Instead of rudimentary `navigator.clipboard` fallbacks (though gracefully retained as a polyfill), the client triggers the OS-level `navigator.share()` API on compliant devices, bridging the gap between web applications and native device telemetry.

---

## 🛠 Compilation & Deployment Protocol

### Environment Substructures
Clone the repository and provision the `.env` dependencies.

```bash
# In /backend, synthesize the .env
PORT=5001
GNEWS_API_KEY=YOUR_GNEWS_KEY_HERE
```

### Execution Directives
This architecture utilizes a monorepo-style process execution protocol via `concurrently`.

```bash
# 1. Install dependencies aggressively
npm install && cd backend && npm install && cd ../frontend && npm install

# 2. Ignite both servers simultaneously from root
npm run dev
```

The Express API initializes on `http://localhost:5001`, feeding the Vite HMR server on `http://localhost:5173`. 

---

## 📐 Architecture Topology (ASCII)

```text
[Client Viewport] (React / Vite)
       │    ▲ (JSON Payloads)
       ▼    │
[Frontend Service Layer] (Axios /api.ts)
       │    ▲ 
       ▼    │ (HTTP / GET)
[Node.js Proxy Server] (Express /port 5001)
       │    ▲
       ▼    │ (REST / GNews JSON)
[External GNews API Endpoint]
```

## 🧠 Intellectual Debt & Future Matrices
This build is stable at v1.3. Future scalability projections include WebSockets for live breaking news sockets, Redis caching layers on the Express proxy to mitigate duplicate API queries, and a sentiment analysis sub-module analyzing text positivity.

*Engineered with precision for the ChaiCode Dev Cohort.*

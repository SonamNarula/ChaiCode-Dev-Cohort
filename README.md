<div align="center">

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║        ☕  C H A I C O D E   D E V   C O H O R T  ☕           ║
║                                                                  ║
║              by  S O N A M   N A R U L A  🦋                    ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

*"Long story short, I compile."*

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

## 🌸 `$ whoami`

> A developer who views the DOM as a spatial geometry puzzle, treats memory allocation with reverence, and understands that every clean application is just chaos tightly bound by logic.
>
> This repository is my living architectural blueprint. It is a strict log of a mind learning to dismantle systemic entropy. I don't just build UI; I map abstractions to pixels and handle edge-case permutations until the output reaches deterministic perfection.
>
> *(Also, I occasionally cry over a trailing JSON comma, but we don't document that part of the lifecycle.)* 🦋

---

## 🗂️ System Architecture (`ls -la | grep "roots"`)

```
ChaiCode-Dev-Cohort/
│
├── 📂 HTML/                    ← structural taxonomy. semantic nodes.
├── 📂 CSS/                     ← painting the z-axis. coordinate matrices.
├── 📂 JAVASCRIPT/              ← lexical environments & garbage collection ⚡
│   ├── BASICS-1/
│   └── BASICS-2/
│
├── 📂 ASSIGNMENT-1/            ← O(n^2) battle scars
├── 📂 ASSIGNMENT-2/            ← slightly less inefficient battle scars
├── 📂 SELF PRACTICE/           ← where edge cases go to be tested
│   ├── Amazon Clone/
│   ├── Netflix Clone/
│   └── CSS/
│
├── 📂 mintlify_clone/          ← light mode. minimal component footprint.
├── 📂 cursor_landing_clone/    ← dark mode. complex background layering.
├── 📂 nike-store/              ← full stack. context API. database seeding.
├── 📂 swiftmind/               ← AI prompt-engineering meets React state 🦋
├── 📂 news-aggregator/         ← MERN stack microservices proxy & RESTful APIs 🌍
│
└── 📂 Bharat_CV/               ← the genesis block. the most important code here 🤍
```

---

## 📡 Kernel Initialization — The Learning Phases

### `[PHASE 01]` ⚡ JavaScript — The V8 Engine Logic

> *"Teaching silicon shards to think by trapping electric currents in conditional statements."*

The foundation. Before the abstraction of React or the rendering engines of the browser, there exists raw execution logic. 

| Primitive Operations | Core Concepts Mastered |
|---|---|
| 🔢 **Lexical Scope** | `var` vs `let/const` — the temporal dead zone and execution context stack. |
| 🔬 **Type Coercion** | Resolving the deep architectural mysteries of why `0 == "0"` but `0 !== []`. |
| ⚙️ **Event Loops** | Call stacks, micro-task queues, and why `setTimeout(fn, 0)` is a lie. |
| 🔄 **Control Flow** | Deterministic state-machines (Rock-Paper-Scissors built without UI). |
| 🔁 **Iteration Models** | `for`, `while`, `do...while` — traversing Abstract Syntax Trees manually. |
| 🧠 **Closures** | Functions retaining lexical scope references long after parent termination. |

<details>
<summary>💭 <em>A diagnostic note on JavaScript (click to expand)</em></summary>

<br>

JavaScript is the only high-level runtime where `[] + []` returns `""`, `[] + {}` returns `"[object Object]"`, and `{} + []` returns `0`. And yet, here we are — powering global infrastructure with it.

I respect its neuroses.

</details>

---

### `[PHASE 02]` 🎨 CSS — The Render Tree Mathematics

> *"CSS is not styling. CSS is linear algebra applied to floating rectangles."*

| Protocol | Implementation Details |
|---|---|
| 📐 **Flexbox** | 1D axis mastery. Fixing 90% of layout engine calculation errors with `justify-content`. |
| 🗺️ **Grid** | 2D plane architecture. Utilizing fractional `fr` scaling for mathematically perfect ratios. |
| 📌 **Stacking Context** | Controlling the z-index coordinate plane without mutating position defaults. |
| 🧪 **Custom Properties** | Implementing `--var` root tokens for deeply scalable design systems. |

---

### `[PHASE 03]` 🖼️ UI Architecture — Subsystem Clones

> Cloning is reverse-engineering. It is tearing apart enterprise-grade design choices to understand state architecture and interaction latency.

| Repository Node | Client Rendering Strategy | Target Audience |
|---|---|---|
| 🔵 **[Mintlify Clone](./mintlify_clone)** | High text-to-code ratio. Semantic typography. | Developer Operations |
| ⚫ **[Cursor Landing](./cursor_landing_clone)** | GPU-accelerated gradients. Complex `-webkit-clip`. | AI Engineers |
| 🛒 **[Amazon Clone](./SELF%20PRACTICE/Amazon%20Clone)** | Highly dense DOM tree. Complex event bubbling. | Enterprise Retail |
| 🎬 **[Netflix Clone](./SELF%20PRACTICE/Netflix%20Clone)** | Viewport scaling (`vw/vh`). Lazy-loaded media grids. | Streaming Media |

---

### `[PHASE 04]` 🏗️ Full Stack Engineering — MERN Topologies

> *Moving beyond static files. Implementing bi-directional communication streams between stateful client caches and persistent databases.*

---

#### 🦋 `swiftmind/` — LLM-Powered Conversational UI

*"We don't just fetch REST APIs here; we stream generative intelligence."* ✨

SwiftMind is a decoupled React node parsing non-deterministic responses from **Google Gemini AI**. You input natural language mood strings. The system processes the inference and outputs JSON, gracefully handled by React component trees.

```
Client Inference  ────►  Express Route Handler  ────►  Gemini LLM (Prompt Eng.)
                                                           │
                        Client Rendering  ◄────  Parse JSON Vector
```

**Architecture:** React (Vite) + Tailwind CSS + Node.js + Express + Google Generative AI API

**Technical Deep Dive:**
- 🛡️ **Graceful Graceful Degradation**: Built a failover pipeline. If the `GEMINI_API_KEY` is missing or rate-limited, the application seamlessly routes to an onboard mocked heuristic engine.
- ✨ **Hardware Accelerated Layers**: Implemented GPU-bound `backdrop-blur` algorithms, complex `keyframes`, and animated state updates without causing layout thrash.

---

#### 👟 `nike-store/` — Transactional E-Commerce Prototype

A classic Model-View-Controller topology mapped into a modern Single Page Application (SPA).

```
React Context Sync  ◄────  REST API JSON Payload  ◄────  Express + Mongoose Models
```

**Architecture:** React Router DOM V6 + Node.js Context API + Express + MongoDB

**Technical Deep Dive:**
- 🌐 **Global Propagation Context**: Architected a custom Cart state using `useContext` + `useReducer`. Avoided the prop-drilling trap and side-stepped Redux bloat for maximum `O(1)` runtime efficiency.
- 🌱 **Database Seeding Automations**: Scripted repeatable database reset commands. Drops schemas and repopulates the local binary tree, making the dev environment pristine reproducible.

---

#### 📰 `news-aggregator/` — Asynchronous Real-Time Feeds

A deeply cache-optimized news client relying on external third-party streaming data.

```
Client Poller  ────►  Backend API Proxy  ────►  NewsAPI Endpoint
                              │
                        JWT Hash Validator
                              │
                        MongoDB Cluster
```

**Architecture:** React + React Query + Tailwind CSS V4 + Node.js + Express + Mongoose

**Technical Deep Dive:**
- 🔄 **Cache Invalidation & Request Deduping**: Deprecated `useEffect` network calls in favor of **React Query**, bringing `stale-while-revalidate` rendering efficiency to the client.
- 🔐 **Bypass Proxying**: Designed a proxy resolver on the Express router to handle NewsAPI traffic, entirely obfuscating the root credentials from the client-side bundle.
- 🎨 **Alpha-Channel Glassmorphism**: Tailored deeply semantic dark modes utilizing multi-layer opacity inheritance against dynamic background sources.

---

### `[PHASE 05]` 🤍 Sincerity — Genesis Function

```
📂 Bharat_CV/
```

My father is a Chemistry teacher. For over 20 years, he has executed his life loop — pouring knowledge constants into highly variable students, computing grades late into the night, and never failing to compile. 

I wrote his CV.

Clean `<text />` nodes. Proper semantic hierarchy. Print-optimized CSS variables. His entire runtime history, finally formatted with the respect it commands.

This folder is not a deployment test. It is a thank-you protocol. It is the closest I can come to saying: *"I see the architecture you built my life upon, and I am learning from it."*

> *Some systems you build for production. Some you build for the people who provided the raw materials.*

---

## 🔬 Telemetry & Diagnostics Log

```
DAEMON STATUS — Sonam Narula.exe
──────────────────────────────────────────────────────────
[SUCCESS] Daily login frequency confirmed
[SUCCESS] Commit payload dispatched consistently  
[SUCCESS] Parses stack traces natively; does not ignore stderr
[SUCCESS] Understands the underlying DOM tree it mutates
[SUCCESS] ChatGPT reliance parameters within acceptable limits
[WARNING] SyntaxError rate lowering, but semicolon detection sub-optimal
[WARNING] Imposter_Syndrome.js throwing occasional unhandled promise rejections
[CRITICAL] Caffeine intake exceeding safe hardware limits ☕
──────────────────────────────────────────────────────────
CURRENT HEURISTIC: Expanding capability matrix.
TRAJECTORY: Exponential curve.
GROUNDING PRINCIPLE: There are no bugs; only features we haven't read the documentation for yet.
```

---

## 💭 The Final Build Philosophy

I am not rushing compilation. I am not taking `any` shortcuts. This is not a hackathon sprint — it is the initialization of a deeply robust, fault-tolerant career.

The empirical truth: I don't always know if the logic is `O(1)` or `O(n^2)` just yet. But I know that I show up. I step through the debugger line-by-line instead of giving up. I read the MDN documentation as if it were scripture. I ensure that when a promise fails, I **understand** why before I attempt to resolve it.

The delta between `Not found` and `200 OK` is bridged entirely through persistence — commit after commit, recursion after recursion, until the code becomes an extension of thought.

> *"Omit needless code."*
> *"Let the compiler speak."*

---

<div align="center">

```
╔══════════════════════════════════════════════════════╗
║                                                      ║
║   Compiled with ☕ chai, 🦋 logic,                   ║
║   and a healthy respect for maximum call stacks      ║
║                                                      ║
║     © 2026  Sonam Narula | ChaiCode Dev Cohort       ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

![Profile Views](https://komarev.com/ghpvc/?username=SonamNarula&color=blueviolet&style=flat-square)

*Executed with precision, late nights, and the occasional existential panic over CORS policies.*

</div>

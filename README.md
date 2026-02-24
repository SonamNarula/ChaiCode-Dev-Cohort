# The ChaiCode Developer Cohort
> *"Long story short, I code."* 🦋

---

## ▎System Initialization

Welcome to my digital workspace. 

I approach software engineering with a simple philosophy: **quiet, absolute focus.** I prefer my commit history to speak for my discipline, and my code to demonstrate my understanding.

Growth happens in the quiet, late-night hours of debugging a flawed algorithm or rebuilding a broken layout from scratch. It is about showing up daily and meticulously building a resilient architecture—one line, one function, one module at a time. This repository is the live documentation of that relentless work. 🛠️

---

## ▎Curriculum & Execution Phases

My technical growth is structured into foundational phases. Below is the systematic index of all modules deployed in this repository.

```mermaid
graph TD
    classDef js fill:#f7df1e,stroke:#000,stroke-width:2px,color:#000,rx:5px,ry:5px;
    classDef css fill:#1572b6,stroke:#fff,stroke-width:2px,color:#fff,rx:5px,ry:5px;
    classDef arc fill:#8a2be2,stroke:#fff,stroke-width:2px,color:#fff,rx:5px,ry:5px;
    classDef sin fill:#f8f9fa,stroke:#333,stroke-width:2px,color:#333,rx:5px,ry:5px;

    A[Phase 01<br/>Core Logic: JS]:::js --> B[Phase 02<br/>Structural Layouts: CSS]:::css
    B --> C[Phase 03<br/>UI Integration]:::arc
    C --> D[Phase 04<br/>Sincerity: Deployment]:::sin
```

<br>

### Phase 01: Core Logic (JavaScript)
The heartbeat of the system. This phase is a rigorous deep dive into the invisible logic that drives applications.

```mermaid
flowchart LR
    classDef m fill:#ff6b6b,stroke:#fff,stroke-width:2px,color:#fff,rx:3px,ry:3px;
    classDef dm fill:#feca57,stroke:#333,stroke-width:2px,color:#333,rx:3px,ry:3px;
    classDef fe fill:#1dd1a1,stroke:#fff,stroke-width:2px,color:#fff,rx:3px,ry:3px;
    classDef cf fill:#5f27cd,stroke:#fff,stroke-width:2px,color:#fff,rx:3px,ry:3px;
    classDef i fill:#54a0ff,stroke:#fff,stroke-width:2px,color:#fff,rx:3px,ry:3px;

    M[Memory]:::m --> D[Data Mechanics]:::dm
    D --> F[Function Execution]:::fe
    F --> C[Control Flow]:::cf
    C --> I[Iteration]:::i
```

| Conceptual Focus | Modules & Scripts | Technical Implementations |
| :--- | :--- | :--- |
| **Memory & Syntax** | [Advanced Console Logging](./JAVASCRIPT/BASICS%20-%202/01-console.js)<br>[Variables Intro](./JAVASCRIPT/BASICS%20-%202/02-variables.js)<br>[Console Methods Demo](./JAVASCRIPT/console.js) | Lexical environments, strict `var/let/const` memory allocation, structured console APIs (`table`, `time`, `group`). |
| **Data Mechanics** | [Data Types Advanced](./JAVASCRIPT/BASICS%20-%202/03-datatypes.js) | Primitive vs reference types, `typeof` identification, execution of 11 distinct operator categories (`??`, `?.`, `...`). |

<br>

### Phase 02: Structural Layouts (CSS)
Diving into spatial geometry and layout matrix computing, strictly without pre-built UI library assistance.

```mermaid
flowchart TD
    classDef main fill:#2d3436,stroke:#dfe6e9,stroke-width:2px,color:#dfe6e9,rx:4px,ry:4px;
    classDef flex fill:#e17055,stroke:#fff,stroke-width:2px,color:#fff,rx:4px,ry:4px;
    classDef grid fill:#00b894,stroke:#fff,stroke-width:2px,color:#fff,rx:4px,ry:4px;

    A[Layout Matrix Computing]:::main
    A -->|1D Vector| B(Flexbox Protocol):::flex
    A -->|2D Plane| C(Grid Architecture):::grid
```

| Layout Protocol | Modules & Deployments | Technical Implementations |
| :--- | :--- | :--- |
| **1D Alignment** | [Flexbox Laboratory](./SELF%20PRACTICE/CSS/flexbox.html) | Single-axis management, spatial distribution (`justify-content`), cross-axis positioning. |
| **2D Architecture** | [Grid System](./SELF%20PRACTICE/CSS/grid.html) | Complex multi-axis alignment, explicit grid tracks, responsive fractions (`fr`), template areas. |
| **Spatial Overrides** | [CSS Positions](./SELF%20PRACTICE/CSS/level3.html)<br>[Sticky/Fixed Playground](./SELF%20PRACTICE/CSS/Practice%20Set%20-%205/index.html) | Explicit layout manipulation via `static`, `relative`, `absolute`, `fixed`, and `sticky` positioning techniques. |

<br>

### Phase 03: UI Integration (Architecture)
Integration testing via high-fidelity interface cloning. Demands strict structural validation and pixel-perfect rendering.

```mermaid
flowchart LR
    classDef base fill:#2c3e50,stroke:#34495e,stroke-width:2px,color:#fff,rx:4px,ry:4px;
    classDef ui fill:#8e44ad,stroke:#fff,stroke-width:2px,color:#fff,rx:4px,ry:4px;
    classDef logic fill:#d35400,stroke:#fff,stroke-width:2px,color:#fff,rx:4px,ry:4px;

    S[Semantic HTML]:::base --> C[CSS Layout Array]:::base
    C --> I{High-Fidelity<br/>UI Clone}:::ui
    L[JS DOM Logic]:::logic -.-> I
```

| Project Clone | Focus Area | Technical Implementations |
| :--- | :--- | :--- |
| **[Mintlify Clone](./mintlify_clone/)** | Desktop-First Light UI | Advanced CSS layouts (Grid, Flexbox), custom CSS variables, complex background integrations. |
| **[Cursor Landing Page](./cursor_landing_clone/)** | Dark-Mode Premium UI | Custom `-webkit-background-clip` text gradients, glassmorphism UI, semantic HTML5. |
| **[Amazon Interface](./SELF%20PRACTICE/Amazon%20Clone/)** | E-Commerce Layouts | Complex component structuring, responsive headers, multi-tier navigation logic. |
| **[Netflix Interface](./SELF%20PRACTICE/Netflix%20Clone/)** | Fluid Media Grids | Dynamic `vw/vh` scaling, responsive image grids, absolute/relative element stacking. |

<br>

### Phase 04: Sincerity (Special Project)
Technical skills require meaningful application. 

| Project | Purpose & Execution |
| :--- | :--- |
| **[Bharat CV](./Bharat_CV/)** | Engineered for my father, a Chemistry teacher of 20+ years. Built with clean typography and print-optimized structure. It is an exercise in sincere gratitude—giving back to the person who gave me everything. 🤍 |

---

## ▎Developer Diagnostics

I am building this path step by step. I am not rushing the process, nor am I taking shortcuts. 

```mermaid
flowchart TD
    classDef code fill:#0984e3,stroke:#fff,stroke-width:2px,color:#fff,rx:5px,ry:5px;
    classDef err fill:#d63031,stroke:#fff,stroke-width:2px,color:#fff,rx:5px,ry:5px;
    classDef debug fill:#fdcb6e,stroke:#2d3436,stroke-width:2px,color:#2d3436,rx:5px,ry:5px;
    classDef pass fill:#00b894,stroke:#fff,stroke-width:2px,color:#fff,rx:5px,ry:5px;

    A[Write Architecture]:::code --> B{Compile & Test}:::code
    B -->|UnhandledException| C[SyntaxError / Bug]:::err
    C --> D[Rigorous Debugging]:::debug
    D --> A
    B -->|HTTP 200 OK| E[Robust Deployment]:::pass
```

| Diagnostic Metric | Current State |
| :--- | :--- |
| **Vulnerability** | Wondering if my current technical stack is deep enough for the ambitions I carry. |
| **Grounding Reality** | Incremental optimization. Showing up. Pushing commits. Proving dedication through consistent work. |
| **Core Algorithm** | Every failed build and `SyntaxError` I wrestle with teaches me how to write a more robust system. Breaking the code is the only way I learn how to build it. |

<br>

### ▎Execution Log 

<div align="center">
  <br>

  <!-- Animated Diagnostic Loader -->
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=16&pause=1000&color=7eb6ff&center=true&vCenter=true&width=435&lines=Initializing+Developer+Diagnostics...;Fetching+Live+Execution+Metrics...;Processing+Commit+History..." alt="Diagnostics Loader" />

  <br><br>

  <!-- Animated Contribution Activity Graph -->
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=SonamNarula&bg_color=00000000&color=7eb6ff&line=a8a2d2&point=ffffff&hide_border=true" width="100%" alt="Activity Graph" />

  <br><br>

  <!-- Streaks & Language Compute -->
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=SonamNarula&theme=dark&hide_border=true&background=00000000&ring=7eb6ff&fire=a8a2d2&currStreakLabel=a8a2d2&sideLabels=9f94cf&dates=9f94cf&currStreakNum=ffffff&sideNums=ffffff" alt="Streak Stats" height="170" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=SonamNarula&theme=dark&hide_border=true&layout=compact&bg_color=00000000&title_color=a8a2d2&text_color=9f94cf&icon_color=7eb6ff" alt="Top Languages" height="170" />
  
  <br><br>
  
  <!-- Execution Trophies -->
  <img src="https://github-profile-trophy.vercel.app/?username=SonamNarula&theme=darkhub&no-bg=true&no-frame=true&margin-w=15&column=6" alt="Trophies" />

</div>

<br>

*(c) 2026 Sonam Narula. Let the execution speak.* 🏏

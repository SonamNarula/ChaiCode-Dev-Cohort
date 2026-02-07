# Mintlify Clone - The Intelligent Knowledge Platform

A pixel-perfect, desktop-first recreation of the [Mintlify](https://mintlify.com/) homepage, built entirely with **HTML5** and **Vanilla CSS**. This project demonstrates mastery of modern CSS layout techniques (Grid, Flexbox), semantic HTML structure, and high-fidelity UI implementation without the use of frameworks or JavaScript.

![Mintlify Clone Preview](./screenshot.png)
*(Note: Add a screenshot of the hero section here)*

## 🚀 Project Overview

The goal of this assignment was to rebuild the Mintlify documentation landing page with a focus on:
-   **Structural Accuracy**: Matching the DOM structure to the semantic needs of the content.
-   **Visual Fidelity**: replicating fonts, colors, spacing, and shadows to match the original "Verse" (Light Mode) aesthetic.
-   **CSS Proficiency**: Using advanced CSS features like CSS Variables, Backdrop Filters, Gradients, and complex positioning.

## ✨ Key Features

### 1. **Premium Hero Section**
-   **Visuals**: Features a "Teal/Blue Sky" radial gradient background (`#f1f8f5` to `#ffffff`) that mimics the airy feel of the original site.
-   **3D Code Window**: A custom-built CSS-only representation of a code editor window using 3D transforms (`perspective`, `rotateX`) to create a floating effect.
-   **Syntax Highlighting**: Hand-coded HTML/CSS syntax highlighting for the JSON config snippet.

### 2. **Interactive Documentation Preview**
-   **Floating Card Layout**: A complex grid-based component ("Quickstart Guide") that overlaps the hero section using negative margins (`margin-top: -80px`) and z-index layering.
-   **Full UI Simulation**: Includes a sidebar with hoverable items, a top navigation bar with breadcrumbs, a "Command+K" search badge, and simulated code blocks.
-   **Auto-Height**: The container uses `min-height` to gracefully expand based on content volume.

### 3. **Trusted By Logos**
-   **SVG Integration**: Uses inline SVGs for company logos (Anthropic, Cursor, Vercel, etc.).
-   **Theme Adaptation**: Logos are filled with a dark slate color (`#334155`) to ensure perfect contrast against the light background.

### 4. **Feature & Enterprise Sections**
-   **CSS Grid Layouts**: Utilizes `grid-template-columns` for the 3-column "Enterprise" and "Case Studies" sections, ensuring equal spacing and alignment.
-   **Alternating Layouts**: The "Features" section uses Flexbox with `flex-direction: row-reverse` classes to create a dynamic zig-zag visual flow.
-   **Card Hover Effects**: Subtle `transform: translateY` and shadow intensification on hover for interactive feedback.

### 5. **Clean Typography**
-   **Font Stack**:
    -   **Primary**: `Inter` (Google Fonts) for UI text, headings, and body.
    -   **Monospace**: `JetBrains Mono` for code snippets and technical badges.
-   **Hierarchy**: Clear distinction between section titles (`2.5rem`), subheadings, and body text (`text-muted`).

## 🛠️ Technical Implementation

### Technologies Used
-   **HTML5**: Semantic tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) for accessibility and structure.
-   **CSS3**:
    -   **CSS Variables (`:root`)**: For consistent theming (colors, spacing, fonts).
        ```css
        :root {
            --color-primary: #15bd83;
            --color-bg: #ffffff;
            --color-text-main: #0f172a;
        }
        ```
    -   **Flexbox & Grid**: Used extensively for layouts.
    -   **Backdrop Filter**: Used on the sticky navbar (`backdrop-filter: blur(12px)`) for a frosted glass effect.
    -   **Gradients**: Radial and linear gradients for backgrounds and text clipping.

### Constraints & Challenges
-   **No Frameworks**: All styles are written from scratch in `styles.css`. No Tailwind, Bootstrap, or utility classes.
-   **No JavaScript**: Interactivity (hover states, focus rings) is handled purely via CSS pseudo-classes (`:hover`, `:focus`).
-   **Light Mode Refactor**: The project was refactored from a dark theme to a light "Verse" theme, requiring a complete inversion of color variables and shadow adjustments.

## 📂 Project Structure

```bash
mintlify_clone/
├── index.html      # Main HTML structure
├── styles.css      # All styling rules
└── README.md       # Project documentation
```

## 🎨 Design System

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#15bd83` | Brand Green (Buttons, Accents) |
| **Dark Green** | `#0f4c3a` | Hover states, Badges |
| **Background** | `#ffffff` | Main page background |
| **Surface** | `#f8fafc` | Secondary backgrounds (Sidebar, Cards) |
| **Text Main** | `#0f172a` | Headings, Primary text |
| **Text Muted** | `#64748b` | Subtitles, footer text |
| **Border** | `#e2e8f0` | Dividers, Card borders |

## 👨‍💻 Author

**Sonam Narula**
-   *Cohort*: ChaiCode Dev Cohort
-   *Assignment*: Clone Assignment 2 (Mintlify)

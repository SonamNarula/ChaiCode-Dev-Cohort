# ChaiCode Dev Cohort 🚀

Welcome to my official portfolio for the **ChaiCode Dev Cohort**! This repository documents my journey from foundational HTML/CSS to building high-fidelity clones of modern web applications.

## 🌟 Featured Projects

### 1. [Mintlify Clone (Light Mode)](./mintlify_clone/)
**Status:** ⭐ *High Fidelity* | **Theme:** "Verse" (Light/Teal)
A pixel-perfect recreation of the Mintlify intelligent documentation platform.
-   **Key Tech**: CSS Grid, Sticky Navbar with Backdrop Filter, 3D Transforms (Code Window), Complex Positioning.
-   **Highlight**: Features a completely custom-built "Floating Documentation Preview" and a 3D-tilted code editor window, all done with pure CSS.
-   **Refactor**: Originally built in dark mode, fully refactored to a premium "Verse" light theme.

### 2. [Cursor Landing Page](./cursor_landing_clone/)
**Status:** ✅ *Completed* | **Theme:** Dark Mode
A clone of the AI Code Editor "Cursor" landing page.
-   **Key Tech**: Flexbox layouts, Gradient Text, Dark UI patterns.
-   **Highlight**: Implements the modern, developer-centric aesthetic with glowing gradients and clean typography.

### 3. [HTML Resume (Assignment 1)](./ASSIGNMENT-1/)
**Status:** ✅ *Completed*
A semantic HTML document structuring a professional resume.
-   **Focus**: Proper use of semantic tags (`<section>`, `<article>`, `<ul>`), accessibility, and document outline.

---

## 📂 Complete Coursework

| Directory | Description | Key Learnings |
|-----------|-------------|---------------|
| `mintlify_clone/` | **Assignment 2 (Advanced)** | Advanced CSS Layouts, Theming, 3D Transforms, Responsive Design. |
| `cursor_landing_clone/` | **Cursor Clone** | Dark UI Design, Flexbox centering, Gradient effects. |
| `ASSIGNMENT-1/` | **Resume Assignment** | Semantic HTML, Document Structure. |
| `ASSIGNMENT-2/` | **Basic Cursor Layout** | Initial practice with landing page structures. |
| `CLASS-02/` | **Navigation & Flexbox** | Building flexible navbars, understanding `justify-content` and `align-items`. |
| `CSS/` | **CSS Experiments** | Playground for testing CSS properties and layout ideas. |
| `HTML-CLASS-01/` | **HTML Fundamentals** | Forms, Tables, Multimedia tags, Internal vs External CSS. |
| `SELF PRACTICE/` | **HTML Playground** | **New!** A dedicated sandbox for mastering HTML5 semantics, lists (ordered, unordered, nested), and media integration. |

### 4. [Self Practice Sandbox](./SELF%20PRACTICE/)
**Status:** 🚧 *Active Learning*
A raw, hands-on environment where I experiment with core HTML structures. This sandbox serves as a testing ground for understanding the browser's default rendering behavior and the document object model (DOM) hierarchy.

-   **Features Explored**:
    -   **Semantic Headings**: Hierarchy testing from `<h1>` to `<h6>`.
    -   **List Structures**:
        -   *Ordered Lists* (`<ol>`) for sequential data.
        -   *Unordered Lists* (`<ul>`) for bulleted items.
        -   *Nested Lists*: Complex indentation combining ordered and unordered lists to represent deeper data relationships.
    -   **Media Integration**:
        -   *Local Assets*: Hosting and referencing images stored within the project directory.
        -   *Remote Assets*: Embedding high-resolution images via absolute URLs (e.g., Pexels).
    -   **Hyperlinks**: external navigation anchors.

-   **DOM Structure Visualization**:
    ```mermaid
    graph TD;
      root[Stickman Window] --> html;
      html --> head;
      head --> meta_charset;
      head --> meta_viewport;
      head --> title;
      html --> body;
      body --> Headings[H1 - H6];
      body --> Paragraphs;
      body --> Lists;
      Lists --> Ordered_List;
      Lists --> Unordered_List;
      Lists --> Nested_List;
      Nested_List --> Parent_Item;
      Parent_Item --> Child_List;
      body --> Media;
      Media --> Local_Image;
      Media --> Remote_Image;
      body --> Links;
    ```
-   **Key Concepts**: Nesting intricate lists, semantic hierarchy, relative vs absolute paths, and attribute handling (`src`, `alt`, `href`, `target`).

## 🛠️ Tech Stack & Tools

-   **Languages**: HTML5, CSS3 (Variables, Flexbox, Grid, Animations)
-   **Version Control**: Git & GitHub
-   **Design References**: Mintlify, Cursor.com
-   **Editor**: VS Code

## 💡 About the Cohort

The **ChaiCode Dev Cohort** is an intensive bootcamp focused on building a strong foundation in full-stack web development. This repository serves as a growing archive of my progress, challenges, and solutions.

---

*Coding with chai, one line at a time.* ☕💻  
**– Sonam Narula**

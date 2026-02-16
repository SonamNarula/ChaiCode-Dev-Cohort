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

### 4. [Bharat CV (Special Project)](./Bharat_CV/)
**Status:** ✅ *In Production* | **Theme:** "Compact Terra Cotta" (Print-Optimized)
A professional, print-ready CV designed for my father, **Bharat Narula** (Senior Chemistry Faculty).
-   **Goal**: To create a definitive, high-quality resume that reflects 20+ years of teaching excellence with a sophisticated, subtle aesthetic.
-   **Key Tech**: CSS Print Media Queries (`@media print`), Layout Optimization, Custom Typography.
-   **Features**:
    -   **Print-First Design**: Ensures perfect A4 formatting with background graphics implementation for print.
    -   **Theme**: A unique "Compact Terra Cotta" palette that stands out while remaining sincere and professional.
    -   **Smart Layout**: Balanced usage of white space, sidebar-based information architecture, and a dedicated "Key Achievements" highlight box (Top Rankers in NEET & IIT-JEE).
    -   **Interactive Elements**: Floating "Download/Print" button that auto-hides during actual printing.

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

### 5. [Self Practice Sandbox](./SELF%20PRACTICE/)
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
    -   **Hyperlinks**: external navigation anchors and internal page linking (`about.html`).
    -   **Forms & Inputs**:
        -   *Input Types*: Text, Email, Password, Date, Color, Range, File, Radio, Checkbox.
        -   *Form Structure*: Labels, inputs, and submission buttons.
    -   **CSS Integration**:
        -   *Inline CSS*: Styling elements directly within HTML tags.
        -   *Internal CSS*: Using `<style>` blocks in the `<head>`.
        -   *External CSS*: Linking to separate `.css` files for modular styling.
        -   *Selectors*: Experimenting with Universal (`*`), Element (`h1`, `p`), ID (`#heading-one`), and Class selectors.
        -   *Properties & Typography*: deeply exploring text styling:
            -   `text-align` (left, right, center, justify).
            -   `text-decoration` (underline, wavy).
            -   `font-weight` (light, normal, bold, numeric values).
            -   `line-height` and `font-family`.
        -   *Box Model & Layout*: Mastering the core layout engine:
            -   `height` & `width` dimensions.
            -   `padding` (internal spacing) vs `margin` (external spacing).
            -   `border` (solid, dotted) and `border-radius` (rounded corners, circles).


            -   Styling `<div>` blocks.
            -   `display` property: Understanding `block`, `inline`, and `inline-block` behavior.
            -   `visibility`: Hiding elements while preserving layout space (`hidden`).
            -   **Level 3**: CSS Positioning (`static`, `relative`, `absolute`, `fixed`, `sticky`).
            -   **Level 4**: Background Properties (`size`, `position`, `repeat`, `attachment`, `gradient`).
            -   **Level 5**: Flexbox Layout (`direction`, `justify-content`, `align-items`, `flex-wrap`, `align-content`).

        -   *Practice Sets*:
            -   **Set 1**: Isolation of styles.
            -   **Set 2**: Box Model exercises.
            -   **Set 3**: Navbar implementation using ID selectors.
            -   **Set 4**: Debugging Navbar layout & Footer visibility.
            -   **Set 5**: Fixed Positioning & Background Image.

### 6. [Basic HTML Project](./SELF%20PRACTICE/basic%20html%20project/)
**Status:** 🚧 *Prototype*
A multi-page personal portfolio website built entirely with raw HTML.
-   **Key Features**:
    -   **Multi-page Navigation**: Linking between `index.html` (Home) and `AnotherPage.html`.
    -   **Social Media Integration**: deeply nested links to external profiles (Instagram, LinkedIn, Twitter, GitHub).
    -   **Media Gallery**: A section displaying a curated collection of images using both hosted URLs and Base64 data URIs.
    -   **Semantic Structure**: Use of `<header>`, `<nav>`, `<section>` for proper document outlining.

-   **DOM Structure Visualization**:
    ```mermaid
    graph TD;
      root[Stickman Window] --> html;
      html --> head;
      head --> meta_tags;
      head --> title;
      html --> body;
      
      %% Content Sections
      body --> Headings[H1 - H6];
      body --> Paragraphs;
      
      %% Lists
      body --> Lists;
      Lists --> Ordered_List;
      Lists --> Unordered_List;
      Lists --> Nested_List;
      Nested_List --> Parent_Item;
      Parent_Item --> Child_List;
      
      %% Media
      body --> Media;
      Media --> Local_Image;
      Media --> Remote_Image;
      
      %% Navigation & Forms
      body --> Navigation;
      Navigation --> External_Link[Netflix];
      Navigation --> Internal_Link[About Page];
      
      body --> Forms;
      Forms --> Inputs;
      Inputs --> Text_Fields;
      Inputs --> Selection_Controls;
      Inputs --> Special_Types[Color/Date/File];
    ```
-   **Key Concepts**: Nesting intricate lists, semantic hierarchy, relative vs absolute paths, form handling, and attribute manipulation (`src`, `alt`, `href`, `target`, `type`).

### 7. [Amazon Clone](./SELF%20PRACTICE/Amazon%20Clone/)
**Status:** 🚧 *In Progress*
-   **Description**: A clone of the Amazon homepage using HTML and CSS (Flexbox).
-   **Features**:
    -   Responsive Navbar with search bar and icons.
    -   Hero section with background image.
    -   Product grid layout mimicking Amazon's design.
    -   Footer with links and copyright.

### 8. [Netflix Clone](./SELF%20PRACTICE/Netflix%20Clone/)
**Status:** 🚧 *In Progress*
-   **Description**: A responsive clone of the Netflix India landing page.
-   **Features**:
    -   **Hero Section**: Background image with dark overlay, logo, and "Sign In" button.
    -   **Feature Blocks**: Alternating layout sections (text + image/video) mimicking the original design.
    -   **FAQ Accordion**: Interactive questions section.
    -   **Responsive Design**: optimized for desktop, tablet, and mobile views using Media Queries.
    -   **Assets**: Integrated local video and image assets.

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

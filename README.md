# ChaiCode Dev Cohort 🚀

Welcome to my journey through the **ChaiCode Dev Cohort**! This repository is where I document my learning, projects, and experiments as I level up my development skills.

## 📂 Repository Structure

Here's what you'll find inside:

### 1. **HTML-CLASS-01**
   - **Focus**: Getting started with HTML5 structure.
   - **Key Files**:
     - `Contact.html`: A sample contact form layout (updated).
     - `Contact2.html`: Demonstration of Internal CSS using `<style>` tags.
     - `index.html`: Main entry point with foundational structure.
     - `Index2.html`: Mixed styling examples including Inline and External CSS.
     - `File2.html`: Experiments with basic tags.
     - `style.css`: Main External CSS file for the project.
     - `atomic.css`: Utility-first External CSS examples.
     - `MyFile.html`: Initial HTML document structure test.
     - `dark.css`: Stylesheet for dark theme styling.
     - `dark.css`: Stylesheet for dark theme styling.

### 2. **CLASS-02**
   - **Focus**: Flexbox and Navigation.
   - **Key Files**:
     - `FlexBox.html`: Learning Flexbox layout properties.
     - `nav.html`: Creating a navigation bar structure.
     - `Style.css`: CSS for Flexbox and navigation examples.

### 3. **Flexbox Architecture 📦**
Flexbox (Flexible Box Layout) is a one-dimensional layout method for laying out items in rows or columns.

#### **Key Concepts Diagram**
```mermaid
graph TD
    subgraph FlexContainer ["Flex Container (Parent)"]
        direction LR
        Item1[Item 1]
        Item2[Item 2]
        Item3[Item 3]
    end
    
    style FlexContainer fill:#f9f,stroke:#333,stroke-width:2px,color:black
    style Item1 fill:#ff9,stroke:#333,stroke-width:1px,color:black
    style Item2 fill:#9f9,stroke:#333,stroke-width:1px,color:black
    style Item3 fill:#99f,stroke:#333,stroke-width:1px,color:black

    axisMain[Main Axis (justify-content)] --> FlexContainer
    axisCross[Cross Axis (align-items)] -.-> FlexContainer
```

#### **Core Properties**
- **`display: flex;`**: Activates flexbox on the container.
- **`justify-content`**: Aligns items along the **Main Axis** (e.g., `center`, `space-between`).
- **`align-items`**: Aligns items along the **Cross Axis** (e.g., `center`, `flex-start`).
- **`flex-direction`**: Defines the direction of the Main Axis (`row` or `column`).

### 4. **CSS Styling Techniques**
This project explores the three main ways to apply CSS to HTML:

1.  **Inline CSS**
    - **What it is**: Styles applied directly to an element using the `style` attribute.
    - **Where to find it**: See `Index2.html` (e.g., `<button style="...">`).
    - **Pros/Cons**: Good for quick tests, but hard to maintain.

2.  **Internal CSS**
    - **What it is**: Styles defined within a `<style>` block in the `<head>` of the HTML document.
    - **Where to find it**: See `Contact2.html`.
    - **Pros/Cons**: Good for single-page styles, but not reusable across pages.

3.  **External CSS**
    - **What it is**: Styles defined in a separate `.css` file and linked using the `<link>` tag.
    - **Where to find it**: `style.css` and `atomic.css` (linked in `Index2.html`).
    - **Pros/Cons**: Best practice! Keeps structure (HTML) and style (CSS) separate and reusable.

### 4. **ASSIGNMENTS**
   - **Focus**: Practical application of concepts.
   - **Key Files**:
     - `HTML Resume Page Assignment.html`: A structured resume created using pure HTML.
     - **Previews**: Screenshots of the rendered output.

*(More modules to be added as the cohort progresses)*

## 🛠️ Built With
- **HTML5**
- **Git & GitHub**

## 🏃‍♂️ How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/SonamNarula/ChaiCode-Dev-Cohort.git
   ```
2. Open any `.html` file in your browser to see the results!

## 🌟 About the Cohort
The **ChaiCode Dev Cohort** is an intensive development program designed to build strong foundations in web development. It covers everything from HTML/CSS to advanced backend concepts. This repo serves as my personal log of assignments, challenges, and growth throughout the program.

## ✍️ Sign-off
*Coding with chai, one line at a time.* ☕💻  
**– Sonam Narula**

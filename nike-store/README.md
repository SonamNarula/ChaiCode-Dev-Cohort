# Nike Store E-commerce Platform 🛒👟

A premium, full-stack e-commerce web application built using the complete MERN stack (MongoDB, Express.js, React, Node.js). This project is designed to emulate the sleek, dynamic aesthetic of high-end sports apparel brands while delivering robust backend performance.

---

## ▎Tech Stack

### Frontend (Client)
* **Framework:** React.js (Bootstrapped with Vite for instant server start & lightning-fast HMR)
* **Routing:** `react-router-dom` for seamless Single Page Application (SPA) navigation
* **Styling:** Custom Vanilla CSS strictly avoiding external UI libraries to demonstrate complete mastery over layout matrices, typography, and advanced animations (glassmorphism, micro-interactions, keyframes).
* **Icons:** `lucide-react` for modern, scalable SVG icons.

### Backend (Server)
* **Runtime:** Node.js
* **Framework:** Express.js (REST API architecture)
* **Database:** MongoDB (Local/Atlas)
* **ODM:** Mongoose for strict data modeling and schema validation
* **Environment Management:** `dotenv` for configuration decoupling
* **CORS Management:** Handled via `cors` middleware for cross-origin requests

---

## ▎Core Features

1. **RESTful Product API:** Express controllers set up to handle data requests efficiently, querying the MongoDB database for product arrays, single product details, and category sorting.
2. **Database Seeding:** Dedicated `seeder.js` script to instantly wipe and populate the MongoDB instance with rich, mock athletic footwear data.
3. **Premium UI/UX:**
   * Dynamic Hero section featuring scroll-triggered floating animations.
   * Product grid with hover interactions and transform-based scaling.
   * Responsive navigation bar with frosted glass (backdrop-filter) effects.
4. **Data Hydration:** React components fetch and consume data asynchronously on mount, presenting loaders during network wait times.

---

## ▎Local Setup & Installation

Follow these steps to spin up the development environment locally.

### 1. Clone & Navigate
```bash
git clone https://github.com/SonamNarula/ChaiCode-Dev-Cohort.git
cd ChaiCode-Dev-Cohort/nike-store
```

### 2. Backend Environment
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/nike-store
```

### 3. Database Initialization
Ensure your local MongoDB instance is running, then seed the mock data:
```bash
# While inside the server directory:
npm run data:import

# To start the backend development server:
npm run dev
```

### 4. Frontend Environment
Open a new terminal window:
```bash
cd client
npm install

# Start the React Vite development server
npm run dev
```

The app will instantly be available at `http://localhost:5173/`, dynamically communicating with the API at `http://localhost:5000/`.

---

> *"Engineered for everyday comfort and engineered for performance."*

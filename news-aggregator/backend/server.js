require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ─────────────────────────────────────────────
app.use(express.json());
app.use(cors());

// ─── Health Check ───────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', message: 'News Aggregator API is running 🚀' });
});

// ─── Routes ─────────────────────────────────────────────────
app.use('/api/news', require('./routes/newsRoutes'));

// ─── Start Server ───────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

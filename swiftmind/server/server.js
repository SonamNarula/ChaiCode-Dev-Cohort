import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import aiRoutes from './routes/aiRoutes.js';

dotenv.config();

// connectDB(); // Will enable when DB is ready

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ai', aiRoutes);
// app.use('/api/songs', songRoutes);

app.get('/', (req, res) => {
    res.send('SwiftMind API is humming...');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

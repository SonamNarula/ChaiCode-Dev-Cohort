import express from 'express';
import { chatWithTaylorAI, recommendByMood, analyzeLyrics } from '../controllers/aiController.js';

const router = express.Router();

router.post('/chat', chatWithTaylorAI);
router.post('/mood', recommendByMood);
router.post('/lyrics', analyzeLyrics);

export default router;

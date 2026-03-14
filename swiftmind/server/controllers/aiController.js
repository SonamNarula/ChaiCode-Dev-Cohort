import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const isApiKeyValid = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_API_KEY_HERE';
let model = null;

if (isApiKeyValid) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

// 1. Chatbot Controller
export const chatWithTaylorAI = async (req, res) => {
    try {
        const { question } = req.body;
        if (!question) return res.status(400).json({ error: "Question is required" });

        if (!isApiKeyValid) {
            // Mock Response for "blingy" mode
            await new Promise(r => setTimeout(r, 1500)); // simulate delay
            return res.json({ answer: "✨ Oh my gosh, I love that you asked that! ✨ Since we're still setting things up here in the SwiftMind universe, I can't connect to the main brain right now. But keep sparkling, because 'it's been a long time coming!' 💖" });
        }

        const prompt = `You are a deeply knowledgeable Taylor Swift expert. You understand her songs, eras, lyrics, and symbolism perfectly.
        User question: ${question}
        Give a detailed, friendly, and simple explanation fitting for a Swiftie.`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        res.json({ answer: responseText });
    } catch (error) {
        console.error("AI Chat Error:", error);
        res.status(500).json({ error: "Failed to communicate with Taylor AI" });
    }
};

// 2. Mood Recommender Controller
export const recommendByMood = async (req, res) => {
    try {
        const { mood } = req.body;
        if (!mood) return res.status(400).json({ error: "Mood is required" });

        if (!isApiKeyValid) {
            await new Promise(r => setTimeout(r, 1500));
            const mockRecs = [
                { title: "Sparkly (Taylor's Version)", era: "Fearless", reason: "Because you deserve to shine! ✨" },
                { title: "Bejeweled", era: "Midnights", reason: "When you walk in the room, you can still make the whole place shimmer! 💎" },
                { title: "Mirrorball", era: "Folklore", reason: "I'll show you every version of yourself tonight. 🪩" }
            ];
            return res.json({ recommendations: mockRecs });
        }

        const prompt = `Suggest exactly 5 Taylor Swift songs for someone feeling ${mood}. 
        Format your response as a JSON array of objects, where each object has "title", "era", and "reason" keys.
        Do not use markdown blocks or backticks, just raw JSON.`;

        const result = await model.generateContent(prompt);
        let responseText = result.response.text();
        responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const recommendations = JSON.parse(responseText);
        res.json({ recommendations });
    } catch (error) {
        console.error("Mood Recommender Error:", error);
        res.status(500).json({ error: "Failed to generate recommendations" });
    }
};

// 3. Lyrics Analyzer Controller
export const analyzeLyrics = async (req, res) => {
    try {
        const { lyrics } = req.body;
        if (!lyrics) return res.status(400).json({ error: "Lyrics are required" });

        if (!isApiKeyValid) {
            await new Promise(r => setTimeout(r, 1500));
            return res.json({ analysis: "✨ *Sparkles intensify* ✨\n\nWow, that lyric is absolute pure gold! It perfectly captures the glittering, chaotic, tragic romance of the era. 'Long story short, it was a bad time', but the poetry is flawless. 💖🎶" });
        }

        const prompt = `You are a Taylor Swift lyrics analyzer. 
        Analyze the following lyric: "${lyrics}"
        Explain the emotional context, hidden symbolism, and connection to its specific era. 
        Keep it insightful and engaging.`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        res.json({ analysis: responseText });
    } catch (error) {
        console.error("Lyrics Analyzer Error:", error);
        res.status(500).json({ error: "Failed to analyze lyrics" });
    }
};

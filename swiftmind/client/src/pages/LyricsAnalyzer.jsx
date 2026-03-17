import { useState } from 'react';
import { Search, Loader, Sparkles, Music } from 'lucide-react';
import axios from 'axios';

const LyricsAnalyzer = () => {
    const [lyrics, setLyrics] = useState('');
    const [analysis, setAnalysis] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAnalyze = async () => {
        if (!lyrics.trim()) return;

        setIsLoading(true);
        setAnalysis('');

        try {
            const res = await axios.post('http://localhost:5001/api/ai/lyrics', { lyrics });
            setAnalysis(res.data.analysis || "Unable to analyze.");
        } catch (error) {
            console.error("Lyrics error", error);
            setAnalysis("Oops! Something went wrong while analyzing the lyrics. 🎸 Is the server running?");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in relative min-h-[calc(100vh-140px)]">
            <div className="absolute top-20 left-10 text-5xl animate-float opacity-30 pointer-events-none">📖</div>
            <div className="absolute bottom-20 right-10 text-5xl animate-float opacity-30 pointer-events-none" style={{ animationDelay: '1s' }}>✨</div>

            <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 -rotate-3 animate-float">
                    <Music className="w-10 h-10" />
                </div>
                <h1 className="text-5xl font-serif font-black shiny-text mb-4 drop-shadow-md">Lyrics Deep Dive</h1>
                <p className="text-gray-800 font-medium max-w-lg mx-auto text-lg leading-relaxed">Paste a line from any Taylor Swift song to uncover its hidden meanings, emotional context, and symbolism.</p>
            </div>

            <div className="glass-panel rounded-3xl p-2 shadow-2xl overflow-hidden border border-white/50 mb-12">
                <textarea
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                    placeholder="e.g., 'And you call me up again just to break me like a promise...'"
                    className="w-full h-40 p-6 bg-transparent text-gray-800 font-serif text-xl focus:outline-none resize-none placeholder-gray-500"
                ></textarea>
                <div className="bg-white/40 p-4 border-t border-white/50 flex justify-end">
                    <button
                        onClick={handleAnalyze}
                        disabled={isLoading || !lyrics.trim()}
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <Loader className="animate-spin w-5 h-5" /> : <Search className="w-5 h-5" />}
                        {isLoading ? 'Analyzing...' : 'Analyze Lyric'}
                    </button>
                </div>
            </div>

            {analysis && (
                <div className="glass-panel p-8 rounded-3xl shadow-xl animate-fade-in border border-white/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Sparkles size={100} /></div>
                    <h3 className="text-3xl font-serif font-black text-purple-900 mb-6 flex items-center gap-2">
                        <Sparkles className="text-pink-500 animate-pulse" /> The Hidden Meaning
                    </h3>
                    <div className="prose prose-lg max-w-none text-gray-800 font-medium leading-relaxed whitespace-pre-wrap relative z-10">
                        {analysis}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LyricsAnalyzer;

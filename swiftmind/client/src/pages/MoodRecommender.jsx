import { useState } from 'react';
import { Heart, Loader, Sparkles, Music } from 'lucide-react';
import axios from 'axios';

const moods = [
    { label: 'Heartbroken', color: 'from-red-500 to-rose-700', shadow: 'shadow-red-500/40' },
    { label: 'Nostalgic', color: 'from-indigo-400 to-purple-600', shadow: 'shadow-purple-500/40' },
    { label: 'Vengeful', color: 'from-gray-800 to-black', shadow: 'shadow-black/40' },
    { label: 'In Love', color: 'from-pink-400 to-rose-400', shadow: 'shadow-pink-500/40' },
    { label: 'Happy', color: 'from-yellow-300 to-orange-400', shadow: 'shadow-yellow-500/40' },
];

const MoodRecommender = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleMoodSelect = async (mood) => {
        setSelectedMood(mood);
        setIsLoading(true);
        setRecommendations([]);

        try {
            const res = await axios.post('http://localhost:5001/api/ai/mood', { mood: mood.label });
            setRecommendations(res.data.recommendations || []);
        } catch (error) {
            console.error("Mood error", error);
            alert("Failed to fetch recommendations. Is the server running?");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in min-h-[calc(100vh-140px)] relative">
            <div className="absolute top-10 left-0 text-5xl animate-float opacity-30 pointer-events-none">💔</div>
            <div className="absolute top-1/2 right-10 text-5xl animate-float opacity-30 pointer-events-none" style={{ animationDelay: '1s' }}>💖</div>

            <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/30 rotate-3 animate-float">
                    <Heart className="w-10 h-10 animate-pulse" fill="currentColor" />
                </div>
                <h1 className="text-5xl font-serif font-black shiny-text mb-4 drop-shadow-md">How are you feeling today?</h1>
                <p className="text-gray-800 font-medium max-w-lg mx-auto text-lg">Select a mood and let our AI curate the perfect Taylor Swift playlist for exactly what you're going through.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {moods.map((mood, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleMoodSelect(mood)}
                        className={`bg-gradient-to-r ${mood.color} text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-xl ${mood.shadow} flex items-center gap-2 ${selectedMood?.label === mood.label ? 'ring-4 ring-offset-4 ring-white/80 scale-105' : ''}`}
                    >
                        {mood.label} {selectedMood?.label === mood.label && <Sparkles size={18} className="animate-pulse" />}
                    </button>
                ))}
            </div>

            {isLoading && (
                <div className="flex flex-col items-center justify-center py-12 text-pink-500">
                    <Loader size={64} className="animate-spin mb-6 drop-shadow-lg" />
                    <p className="font-bold text-2xl animate-pulse font-serif">Consulting the archives...</p>
                </div>
            )}

            {!isLoading && recommendations.length > 0 && (
                <div className="animate-fade-in">
                    <h2 className="text-3xl font-serif font-black mb-8 text-center shiny-text decoration-pink-300 underline underline-offset-8">Your Perfect Playlist</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {recommendations.map((song, idx) => (
                            <div key={idx} className="glass-panel p-6 rounded-3xl shadow-lg flex flex-col md:flex-row gap-6 items-start md:items-center hover:scale-[1.02] hover:bg-white/60 transition-all cursor-crosshair">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-white font-serif font-black text-3xl shrink-0 shadow-inner">
                                    <Music size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">{song.title}</h3>
                                    <span className="inline-block bg-gradient-to-r from-pink-200 to-purple-200 text-purple-900 border border-purple-300 text-xs px-3 py-1 rounded-full font-bold mb-3 uppercase tracking-widest">{song.era}</span>
                                    <p className="text-gray-800 leading-relaxed font-medium text-lg">{song.reason}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoodRecommender;

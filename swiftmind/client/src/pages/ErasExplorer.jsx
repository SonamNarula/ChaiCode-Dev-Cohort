import { useState } from 'react';
import { Music, Star, Sparkles } from 'lucide-react';

const erasData = [
    { id: 'debut', name: 'Taylor Swift', year: '2006', color: 'from-green-300 to-green-500', bg: 'bg-green-500', vibe: 'Country roots, curly hair, teardrops.' },
    { id: 'fearless', name: 'Fearless', year: '2008', color: 'from-yellow-300 to-yellow-500', bg: 'bg-yellow-500', vibe: 'Fairy tales, high school romance, sparkling guitars.' },
    { id: 'speaknow', name: 'Speak Now', year: '2010', color: 'from-purple-400 to-purple-600', bg: 'bg-purple-500', vibe: 'Self-written confessions, theatrical romance, wonderstruck.' },
    { id: 'red', name: 'Red', year: '2012', color: 'from-red-500 to-red-700', bg: 'bg-red-600', vibe: 'Heartbreak, autumn leaves, sonic transitions.' },
    { id: '1989', name: '1989', year: '2014', color: 'from-blue-300 to-blue-500', bg: 'bg-blue-400', vibe: 'Synth-pop perfection, New York City, polaroids.' },
    { id: 'reputation', name: 'reputation', year: '2017', color: 'from-gray-800 to-black', bg: 'bg-black', vibe: 'Snakes, media blackout, finding true love in the dark.' },
    { id: 'lover', name: 'Lover', year: '2019', color: 'from-pink-300 to-pink-500', bg: 'bg-pink-400', vibe: 'Pastels, daylight, pure unadulterated romance.' },
    { id: 'folklore', name: 'folklore', year: '2020', color: 'from-gray-400 to-gray-500', bg: 'bg-gray-500', vibe: 'Cabin in the woods, indie folk, storytelling.' },
    { id: 'evermore', name: 'evermore', year: '2020', color: 'from-amber-700 to-orange-900', bg: 'bg-amber-800', vibe: 'Winter woodlands, continuing the folklore mythos.' },
    { id: 'midnights', name: 'Midnights', year: '2022', color: 'from-indigo-800 to-blue-900', bg: 'bg-indigo-900', vibe: 'Sleepless nights, 70s aesthetics, shimmering synths.' },
    { id: 'ttpd', name: 'TTPD', year: '2024', color: 'from-gray-100 to-gray-300', bg: 'bg-gray-100', text: 'text-gray-900', vibe: 'Academia, madness, prolific poetry.' }
];

const ErasExplorer = () => {
    const [selectedEra, setSelectedEra] = useState(erasData[erasData.length - 1]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in relative min-h-[calc(100vh-140px)]">
            <div className="absolute top-0 right-20 text-5xl animate-float opacity-30 pointer-events-none">✨</div>
            <div className="text-center mb-16">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/30 animate-float">
                    <Star className="w-10 h-10 animate-pulse" fill="currentColor" />
                </div>
                <h1 className="text-5xl font-serif font-black shiny-text mb-4 drop-shadow-md">The Eras Tour</h1>
                <p className="text-gray-800 font-medium max-w-lg mx-auto text-lg">Journey through the musical Evolution. Select an era to explore its distinct vibe.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Timeline */}
                <div className="w-full lg:w-1/3 glass-panel p-6 rounded-3xl shadow-xl border border-white/50 h-[600px] overflow-y-auto custom-scrollbar">
                    <h2 className="text-2xl font-serif font-black text-gray-900 mb-8 flex items-center gap-2 sticky top-0 bg-white/80 p-4 rounded-xl backdrop-blur-md z-10 shadow-sm border border-white/60">
                        <Music className="w-6 h-6 text-pink-500" /> Discography Timeline
                    </h2>
                    <div className="space-y-4 px-2">
                        {erasData.map((era) => (
                            <button
                                key={era.id}
                                onClick={() => setSelectedEra(era)}
                                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-4 group ${selectedEra.id === era.id ? 'shadow-lg scale-[1.02] bg-pink-100/50' : 'hover:bg-white/60 glass-panel border-transparent'}`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-inner ${selectedEra.id === era.id ? 'bg-gradient-to-br from-pink-400 to-rose-500 text-white' : `${era.bg} ${era.text || 'text-white'}`}`}>
                                    {era.year.slice(2)}
                                </div>
                                <div>
                                    <h3 className={`font-black text-xl ${selectedEra.id === era.id ? 'text-pink-600' : 'text-gray-900'}`}>{era.name}</h3>
                                    <p className={`text-sm font-medium ${selectedEra.id === era.id ? 'text-pink-400' : 'text-gray-500'}`}>{era.year}</p>
                                </div>
                                {selectedEra.id === era.id && <Sparkles className="ml-auto w-6 h-6 animate-pulse text-pink-500" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Era Details */}
                <div className="w-full lg:w-2/3">
                    <div className={`rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col transform transition-all duration-500 border-2 border-white/50 bg-gradient-to-br ${selectedEra.color}`}>
                        <div className={`p-16 flex-1 flex flex-col justify-center ${selectedEra.text || 'text-white'} bg-black/10 backdrop-blur-sm relative`}>
                            <Sparkles className="absolute top-10 right-10 w-24 h-24 opacity-20 animate-pulse" />

                            <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold uppercase tracking-widest mb-6 self-start border border-white/30 shadow-sm">
                                Released {selectedEra.year}
                            </div>

                            <h2 className="text-7xl font-serif font-black mb-8 drop-shadow-xl tracking-tighter">{selectedEra.name}</h2>

                            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-xl">
                                <h3 className="text-2xl font-bold mb-4 opacity-90 flex items-center gap-2">
                                    <Star className="w-6 h-6" /> The Aesthetic & Vibe
                                </h3>
                                <p className="text-2xl font-serif leading-relaxed font-medium italic">
                                    "{selectedEra.vibe}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErasExplorer;

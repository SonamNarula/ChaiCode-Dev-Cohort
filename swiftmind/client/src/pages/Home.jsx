import { Link } from 'react-router-dom'
import { ArrowRight, Music, Heart, MessageSquare, Sparkles } from 'lucide-react'

const Home = () => {
    return (
        <div className="animate-fade-in pb-20 overflow-hidden relative">
            {/* Blingy Floating Elements */}
            <div className="absolute top-20 left-10 text-4xl animate-float opacity-50 pointer-events-none">✨</div>
            <div className="absolute top-40 right-20 text-3xl animate-float opacity-40" style={{ animationDelay: '1s' }}>💖</div>
            <div className="absolute bottom-20 left-1/4 text-5xl animate-float opacity-30" style={{ animationDelay: '2s' }}>💎</div>
            <div className="absolute top-1/2 right-1/4 text-4xl animate-float opacity-50" style={{ animationDelay: '1.5s' }}>🪩</div>

            {/* Hero Section */}
            <section className="relative pt-24 pb-32 flex flex-col items-center justify-center text-center px-4">
                <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_center,_rgba(255,192,203,0.4)_0%,_transparent_70%)]"></div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-swiftie-red font-bold text-sm mb-6 animate-pulse">
                    <Sparkles size={16} /> Welcome to the Eras Tour
                </div>

                <h1 className="text-6xl md:text-8xl font-serif font-black text-swiftie-black mb-6 tracking-tighter drop-shadow-lg">
                    Welcome to the <br />
                    <span className="shiny-text">SwiftMind</span> Universe.
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    Ask anything about Taylor Swift, explore deep lyrics meanings, and find your perfect era mood with the power of AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                    <Link to="/chat" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-all shadow-xl shadow-pink-500/30 flex items-center justify-center gap-2 animate-bounce">
                        Talk to AI <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link to="/eras" className="glass-panel text-swiftie-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/60 transition-all shadow-lg flex items-center justify-center gap-2">
                        Explore Eras
                    </Link>
                </div>
            </section>

            {/* Features Preview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif mb-3 text-pink-900">AI Chatbot</h3>
                        <p className="text-gray-700 mb-6 font-medium text-lg">Ask any question about Taylor's discography, hidden messages, or lore and get intelligent answers instantly.</p>
                        <Link to="/chat" className="text-pink-600 font-bold flex items-center gap-1 hover:gap-3 transition-all text-lg">Try it out ✨ <ArrowRight className="w-5 h-5" /></Link>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg -rotate-3">
                            <Music className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif mb-3 text-purple-900">Lyrics Analyzer</h3>
                        <p className="text-gray-700 mb-6 font-medium text-lg">Paste a lyric and our AI will break down its emotional context, symbolism, and connection to specific eras.</p>
                        <Link to="/lyrics" className="text-purple-600 font-bold flex items-center gap-1 hover:gap-3 transition-all text-lg">Analyze Lyrics 📖 <ArrowRight className="w-5 h-5" /></Link>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif mb-3 text-blue-900">Mood Matcher</h3>
                        <p className="text-gray-700 mb-6 font-medium text-lg">Feeling heartbroken? Nostalgic? Let the AI recommend the perfect Taylor Swift songs for your current mood.</p>
                        <Link to="/mood" className="text-blue-600 font-bold flex items-center gap-1 hover:gap-3 transition-all text-lg">Find a Playlist 💿 <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

import { Link } from 'react-router-dom'
import { Sparkles, Music, MessageCircle, Heart } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="glass-panel sticky top-4 z-50 mx-4 mt-4 rounded-full px-4 border-white/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <Sparkles className="text-pink-500 w-7 h-7 group-hover:rotate-12 transition-transform group-hover:text-yellow-400" />
                        <span className="font-serif font-black text-2xl tracking-tight shiny-text">SwiftMind</span>
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <Link to="/chat" className="text-gray-800 hover:text-pink-600 transition-colors flex items-center gap-1 font-bold text-lg hover:-translate-y-1 transform">
                            <MessageCircle className="w-5 h-5" /> AI Chat
                        </Link>
                        <Link to="/mood" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-1 font-bold text-lg hover:-translate-y-1 transform">
                            <Heart className="w-5 h-5" /> Mood Playlist
                        </Link>
                        <Link to="/lyrics" className="text-gray-800 hover:text-purple-600 transition-colors flex items-center gap-1 font-bold text-lg hover:-translate-y-1 transform">
                            <span className="font-serif text-2xl leading-none">"</span> Lyrics
                        </Link>
                        <Link to="/eras" className="text-gray-800 hover:text-yellow-600 transition-colors flex items-center gap-1 font-bold text-lg hover:-translate-y-1 transform">
                            <Music className="w-5 h-5" /> Eras
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

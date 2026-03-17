import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-swiftie-black text-white py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-4">
                <h2 className="font-serif text-2xl tracking-widest text-swiftie-pink">SwiftMind</h2>
                <p className="text-gray-400 text-sm text-center max-w-md">
                    Your AI-Powered Taylor Swift Universe. Dive into the eras, explore the lyrics, and find your perfect mood playlist.
                </p>
                <div className="flex gap-6 mt-4">
                    <Link to="/chat" className="text-sm text-gray-400 hover:text-white transition-colors">Chat</Link>
                    <Link to="/lyrics" className="text-sm text-gray-400 hover:text-white transition-colors">Lyrics</Link>
                    <Link to="/mood" className="text-sm text-gray-400 hover:text-white transition-colors">Mood</Link>
                    <Link to="/eras" className="text-sm text-gray-400 hover:text-white transition-colors">Eras</Link>
                </div>
                <p className="text-xs text-gray-500 mt-8">© 2026 SwiftMind - Created for Swifties.</p>
            </div>
        </footer>
    )
}

export default Footer

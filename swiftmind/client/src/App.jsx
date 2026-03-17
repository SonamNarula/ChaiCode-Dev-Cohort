import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ChatAI from './pages/ChatAI'
import MoodRecommender from './pages/MoodRecommender'
import LyricsAnalyzer from './pages/LyricsAnalyzer'
import ErasExplorer from './pages/ErasExplorer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatAI />} />
          <Route path="/mood" element={<MoodRecommender />} />
          <Route path="/lyrics" element={<LyricsAnalyzer />} />
          <Route path="/eras" element={<ErasExplorer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

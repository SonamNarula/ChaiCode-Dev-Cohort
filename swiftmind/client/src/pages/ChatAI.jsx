import { useState } from 'react';
import { Send, User as UserIcon, Sparkles } from 'lucide-react';
import axios from 'axios';

const ChatAI = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'ai', content: '✨ Hi Swiftie! I am your Taylor Swift AI. Ask me about any song, era, or lyric! 💖' }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const res = await axios.post('http://localhost:5001/api/ai/chat', { question: userMessage });
            setMessages(prev => [...prev, { role: 'ai', content: res.data.answer }]);
        } catch (error) {
            console.error("Chat error", error);
            setMessages(prev => [...prev, { role: 'ai', content: "Oops, looks like my guitar string broke! (Server Error) 🎸😭" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in flex flex-col h-[calc(100vh-140px)] relative">
            <div className="absolute top-0 right-10 text-5xl animate-float opacity-30 pointer-events-none">✨</div>

            <div className="mb-6 text-center">
                <h1 className="text-4xl font-serif font-black shiny-text flex items-center justify-center gap-2 drop-shadow-md">
                    <Sparkles className="text-pink-500 animate-pulse w-8 h-8" />
                    Chat with Taylor AI
                </h1>
                <p className="text-gray-800 font-medium mt-2">Discover the stories and secrets behind the music.</p>
            </div>

            <div className="flex-1 glass-panel rounded-3xl shadow-xl overflow-hidden flex flex-col border border-white/50">
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                            <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md ${msg.role === 'user' ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' : 'bg-gradient-to-br from-pink-400 to-rose-500 text-white'}`}>
                                    {msg.role === 'user' ? <UserIcon size={20} /> : <Sparkles size={20} />}
                                </div>
                                <div className={`p-4 rounded-3xl shadow-sm ${msg.role === 'user' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-tr-none' : 'bg-white/80 backdrop-blur-sm text-gray-800 rounded-tl-none border border-white/50'}`}>
                                    <p className="whitespace-pre-wrap leading-relaxed text-lg">{msg.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white flex items-center justify-center shrink-0 shadow-md">
                                    <Sparkles size={20} className="animate-spin" />
                                </div>
                                <div className="p-4 rounded-3xl bg-white/80 backdrop-blur-sm rounded-tl-none border border-white/50 shadow-sm flex items-center">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
                                        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-white/40 backdrop-blur-md border-t border-white/50">
                    <form onSubmit={handleSend} className="flex gap-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="e.g., Explain the meaning of All Too Well..."
                            className="flex-1 px-6 py-4 rounded-full border border-pink-200 bg-white/70 focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 transition-all text-lg shadow-inner"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[60px] shadow-lg shadow-pink-500/30"
                        >
                            <Send size={24} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatAI;

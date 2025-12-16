import React, { useState } from 'react';
import { Page, ChatMessage } from '../types';
import { Menu, X, Terminal, MessageSquare, Send, User, ChevronRight } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Alex's AI assistant. Ask me anything about his work in Strategy, Design, or AI." }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Projects', value: Page.PROJECTS },
    { label: 'Resume', value: Page.ABOUT },
    { label: 'Notes', value: Page.BLOG },
    { label: 'Contact', value: Page.CONTACT },
  ];

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: chatInput };
    setChatHistory(prev => [...prev, userMsg]);
    setChatInput("");
    setIsTyping(true);

    const responseText = await sendMessageToGemini(userMsg.text, chatHistory);
    
    setIsTyping(false);
    setChatHistory(prev => [...prev, { role: 'model', text: responseText }]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex items-center gap-2 font-serif text-xl font-bold cursor-pointer hover:text-indigo-400 transition-colors"
              onClick={() => onNavigate(Page.HOME)}
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-sans">AV</div>
              <span>Nexus</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => onNavigate(item.value)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentPage === item.value
                        ? 'text-indigo-400 bg-white/5'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/5">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.value
                      ? 'text-indigo-400 bg-white/5'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">© 2025 Sriram K. All rights reserved.</p>
              <p className="text-slate-600 text-xs mt-1">Built with React and Tailwind</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Sriramkere" className="text-slate-500 hover:text-indigo-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/sriram-kethireddy/" className="text-slate-500 hover:text-indigo-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">Twitgit ter</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-indigo-600 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <Terminal size={18} />
                <span className="font-medium text-sm">Nexus AI Assistant</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white">
                <X size={18} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900">
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-slate-800 text-slate-200'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 rounded-lg p-3 flex gap-1">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleChatSubmit} className="p-3 bg-slate-950 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about my experience..."
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
                <button 
                  type="submit" 
                  disabled={!chatInput.trim() || isTyping}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsChatOpen(true)}
            className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <MessageSquare size={24} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium pl-0 group-hover:pl-2">
              Chat with AI
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Layout;

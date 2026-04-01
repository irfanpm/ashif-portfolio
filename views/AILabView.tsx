
import React, { useState, useRef, useEffect } from 'react';
import { 
  Lightbulb, Loader2, Send, Sparkles, 
  MessageSquare, Wand2, RefreshCcw 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Message } from '../types';
import { callGemini } from '../services/gemini';
import { PROFILE_DATA } from '../constants';

const AILabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brainstorm' | 'chat'>('brainstorm');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: `Hi! I'm Ashif's AI assistant. You can ask me about his BBA background, his design process, or how he integrates marketing with visuals. What's on your mind?` }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleBrainstorm = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setResult('');
    
    const sysPrompt = `You are Mohammed Ashif's Design Strategist AI. Ashif is a BBA graduate and creative specialist (Graphic Design, Video Editing, Digital Marketing).
    Generate a professional creative strategy for a client project.
    Include:
    1. Visual Direction (Style, Mood).
    2. Suggested Color Palette (with HEX codes).
    3. A unique marketing hook based on Ashif's performance-marketing background.
    Keep it professional, structured, and insightful.`;

    try {
      const resp = await callGemini(`Project Idea: "${input}"`, sysPrompt);
      setResult(resp);
    } catch (e) {
      setResult("I couldn't generate a strategy right now. Let's try another idea!");
    } finally {
      setLoading(false);
    }
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const sysPrompt = `You are the AI persona of Mohammed Ashif M.V.
    Personality: Professional, business-minded (BBA background), creative, and strategic.
    Based in: Kerala, India.
    Specialties: Photoshop, Premiere Pro, After Effects, Facebook Ads, SEO, Branding.
    Answer briefly and encourage collaboration. If asked about contact, refer to the contact page.`;

    try {
      const resp = await callGemini(userMsg, sysPrompt);
      setMessages(prev => [...prev, { role: 'ai', text: resp }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: "I'm offline for a second. Let's reconnect shortly!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <SectionHeader 
        badge="AI Creative Lab"
        title="✨ Intelligent Solutions"
        subtitle="Experience the intersection of AI and human creativity. Use these tools to jumpstart your brand's growth."
      />

      <div className="flex gap-8 mb-12 border-b border-zinc-100 dark:border-zinc-800">
        <button 
          onClick={() => setActiveTab('brainstorm')}
          className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === 'brainstorm' ? 'text-purple-600' : 'text-gray-400'}`}
        >
          Design Strategist
          {activeTab === 'brainstorm' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />}
        </button>
        <button 
          onClick={() => setActiveTab('chat')}
          className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === 'chat' ? 'text-purple-600' : 'text-gray-400'}`}
        >
          AI Interview
          {activeTab === 'chat' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />}
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {activeTab === 'brainstorm' ? (
          <div className="space-y-8">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">Creative Spark</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Concept Generator</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                Describe your business or project idea, and I'll generate a professional creative strategy for you.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleBrainstorm()}
                  placeholder="e.g., A sustainable coffee brand in Kochi..."
                  className="flex-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm font-medium"
                />
                <button 
                  onClick={handleBrainstorm}
                  disabled={loading || !input.trim()}
                  className="px-8 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : (
                    <>GENERATE <Wand2 size={18} /></>
                  )}
                </button>
              </div>
            </div>

            {result && (
              <div className="bg-white dark:bg-zinc-900/50 p-10 rounded-[2.5rem] border border-purple-100 dark:border-purple-900/30 shadow-2xl shadow-purple-500/5 animate-in fade-in slide-in-from-top-4">
                <div className="flex justify-between items-center mb-8">
                   <div className="flex items-center gap-2 text-purple-600">
                     <Sparkles size={20} />
                     <span className="text-xs font-black uppercase tracking-widest">AI Result</span>
                   </div>
                   <button 
                     onClick={() => { setResult(''); setInput(''); }}
                     className="text-gray-400 hover:text-purple-600 transition-colors"
                   >
                     <RefreshCcw size={16} />
                   </button>
                </div>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap font-medium text-gray-700 dark:text-zinc-300 leading-relaxed text-base">
                    {result}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col h-[650px] bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-sm">
            <div className="bg-white dark:bg-zinc-800/50 px-8 py-4 border-b border-zinc-100 dark:border-zinc-700 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <p className="text-xs font-black uppercase tracking-widest">Ashif AI Agent</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                  <div className={`max-w-[85%] px-6 py-4 rounded-3xl text-sm font-semibold leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-purple-600 text-white rounded-br-none' 
                      : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 rounded-bl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-zinc-800 px-6 py-4 rounded-3xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce delay-75" />
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce delay-150" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleChat} className="p-6 bg-white dark:bg-zinc-800 border-t border-zinc-100 dark:border-zinc-700 flex gap-4">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my creative process..."
                className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-purple-500 text-sm font-medium"
              />
              <button 
                type="submit"
                disabled={loading || !input.trim()}
                className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20 disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AILabView;

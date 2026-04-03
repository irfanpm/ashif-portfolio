
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Moon, Sun, ChevronRight, Sparkles, 
  Linkedin, Github, Instagram, Facebook, ArrowRight 
} from 'lucide-react';
import { PageType } from './types';
import { NAV_LINKS, PROFILE_DATA } from './constants';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import SkillsView from './views/SkillsView';
import ProjectsView from './views/ProjectsView';
import GalleryView from './views/GalleryView';
import ExperienceView from './views/ExperienceView';
import AILabView from './views/AILabView';
import ContactView from './views/ContactView';

const App: React.FC = () => {
  const [page, setPage] = useState<PageType>('home');
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500 flex flex-col">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 py-4 md:py-6 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div 
              onClick={() => setPage('home')}
              className="text-2xl font-black cursor-pointer tracking-tighter hover:text-blue-600 transition-colors"
            >
              ASHIF<span className="text-blue-600">.</span>MV
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(item => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id as PageType)}
                  className={`relative px-4 py-2 text-xs font-black transition-all uppercase tracking-widest flex items-center gap-2 
                    ${page === item.id 
                      ? (item.isAI ? 'text-purple-600' : 'text-blue-600') 
                      : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
                >
                  {item.label} {item.isAI && <Sparkles size={12} />}
                  {page === item.id && (
                    <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${item.isAI ? 'bg-purple-600' : 'bg-blue-600'}`} />
                  )}
                </button>
              ))}
              <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800 mx-4" />
              <button 
                onClick={toggleDarkMode}
                className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-blue-600 transition-all"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleDarkMode} className="p-2 text-zinc-500">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-blue-600">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-white dark:bg-zinc-950 pt-32 px-10 flex flex-col gap-8 md:hidden overflow-y-auto pb-20">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                onClick={() => { setPage(item.id as PageType); setMenuOpen(false); }}
                className={`text-5xl font-black text-left uppercase tracking-tighter group flex items-center justify-between 
                  ${item.isAI ? 'text-purple-600' : ''}`}
              >
                <span className={page === item.id 
                  ? (item.isAI ? 'text-purple-600' : 'text-blue-600') 
                  : 'text-zinc-200 dark:text-zinc-800 group-hover:text-zinc-900 dark:group-hover:text-zinc-100'}>
                  {item.label}
                </span>
                <ChevronRight size={40} className={page === item.id 
                  ? (item.isAI ? 'text-purple-600' : 'text-blue-600') 
                  : 'text-zinc-100 dark:text-zinc-900'} />
              </button>
            ))}
          </div>
        )}

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          {page === 'home' && <HomeView setPage={setPage} />}
          {page === 'about' && <AboutView />}
          {page === 'skills' && <SkillsView />}
          {page === 'projects' && <ProjectsView />}
          {page === 'gallery' && <GalleryView />}
          {page === 'experience' && <ExperienceView />}
          {/* {page === 'ai-lab' && <AILabView />} */}
          {page === 'contact' && <ContactView />}
        </main>

        {/* Footer */}
        <footer className="py-20 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-black tracking-tighter mb-6">ASHIF<span className="text-blue-600">.</span>MV</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed font-medium">
                  Combining business logic with creative excellence to deliver high-performance digital assets.
                </p>
                <div className="flex gap-4">
                  {[Linkedin, Instagram, Github, Facebook].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-8">Navigation</h4>
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.slice(0, 4).map(item => (
                    <button key={item.id} onClick={() => setPage(item.id as PageType)} className="text-sm font-bold text-gray-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-left transition-colors">
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-8">Contact</h4>
                <div className="flex flex-col gap-4 text-sm font-bold text-gray-500">
                  <p>{PROFILE_DATA.location}</p>
                  <p>{PROFILE_DATA.email}</p>
                  <p>{PROFILE_DATA.phone}</p>
                </div>
              </div>
            </div>
            <div className="pt-10 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                © 2026 {PROFILE_DATA.name}. All rights reserved.
              </p>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <button className="hover:text-blue-600">Privacy Policy</button>
                <button className="hover:text-blue-600">Terms of Service</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

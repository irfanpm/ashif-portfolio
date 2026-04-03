
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';
import { PROFILE_DATA } from '../constants';

interface HomeViewProps {
  setPage: (page: PageType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setPage }) => {
  return (
    <div className="py-12 md:py-24 max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black mb-10 border border-blue-100 dark:border-blue-800 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          AVAILABLE FOR FREELANCE PROJECTS
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-10">
          CRAFTING <br />
          <span className="text-gradient bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
            DIGITAL IMPACT
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl mb-12 leading-relaxed">
          Hi, I'm {PROFILE_DATA.name}. <br />
          <span className="text-zinc-900 dark:text-zinc-100">{PROFILE_DATA.tagline}</span>
        </p>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setPage('projects')}
            className="group px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-black text-sm flex items-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-blue-500/10 active:scale-95"
          >
            VIEW WORK <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default HomeView;

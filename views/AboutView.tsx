
import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PROFILE_DATA } from '../constants';

const AboutView: React.FC = () => {
  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-blue-500/5">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-3xl text-white shadow-2xl hidden md:block">
            <p className="text-4xl font-black leading-none mb-1">2026</p>
            <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Industry Ready</p>
          </div>
        </div>
        
        <div className="lg:pl-10">
          <SectionHeader 
            badge="Biography"
            title="Creative Specialist with a Business Mindset"
            subtitle={PROFILE_DATA.bio}
          />
          
          <div className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-zinc-100 dark:border-zinc-800">
            <div>
              <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-3">Location</h4>
              <p className="font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                <MapPin size={18} className="text-blue-600" /> {PROFILE_DATA.location}
              </p>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-3">Education</h4>
              <p className="font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                <GraduationCap size={18} className="text-blue-600" /> BBA Graduate
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <p className="italic text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              "My mission is to transform complex business goals into simple, stunning, and high-converting visual narratives that resonate with the target audience."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;

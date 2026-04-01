
import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { SKILLS } from '../constants';

const SkillsView: React.FC = () => {
  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        badge="Expertise"
        title="Professional Skillset"
        subtitle="Comprehensive tools and strategies I use to grow brands in the digital landscape."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, i) => (
          <div
            key={i}
            className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 group hover:shadow-xl hover:shadow-blue-500/5"
          >
            <div className="w-14 h-14 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-black mb-6 tracking-tight">{skill.name}</h3>
            <ul className="space-y-4">
              {skill.items.map((item, j) => (
                <li key={j} className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/30 group-hover:bg-blue-600 transition-colors" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsView;

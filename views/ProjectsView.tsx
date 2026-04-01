
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PROJECTS } from '../constants';

const ProjectsView: React.FC = () => {
  return (
    <div className="py-12 animate-in fade-in duration-700">
      <SectionHeader 
        badge="Portfolio"
        title="Featured Projects"
        subtitle="A collection of my recent works across design, marketing, and video production."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, i) => (
          <div 
            key={i}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 mb-6 relative shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>
            </div>
            <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase mb-2 block">{project.category}</span>
            <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed line-clamp-2">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;

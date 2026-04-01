
import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../constants';

const ExperienceView: React.FC = () => {
  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Experience Column */}
        <div>
          <SectionHeader badge="Experience" title="Professional Path" />
          <div className="space-y-12 mt-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-10 border-l-2 border-zinc-100 dark:border-zinc-800 py-2">
                <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-zinc-950 shadow-sm" />
                <p className="text-xs font-black text-blue-600 mb-2 uppercase tracking-widest">{exp.period}</p>
                <h4 className="text-2xl font-black mb-1 tracking-tight">{exp.role}</h4>
                <p className="text-sm font-black text-gray-400 dark:text-zinc-600 mb-4 uppercase">{exp.company}</p>
                <p className="text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certs Column */}
        <div className="space-y-16">
          <div>
            <SectionHeader badge="Education" title="Academic Profile" />
            <div className="space-y-6 mt-12">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                      <GraduationCap size={24} />
                    </div>
                    <span className="text-[10px] font-black px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full uppercase tracking-widest">
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-xl font-black mb-1 tracking-tight">{edu.degree}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">{edu.school} • {edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader badge="Recognition" title="Certifications" />
            <div className="grid gap-4 mt-12">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:border-blue-500/30 transition-all">
                  <div className="text-blue-600 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-black tracking-tight">{cert.title}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{cert.issuer} | {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceView;

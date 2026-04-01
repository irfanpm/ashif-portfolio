
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, badge }) => (
  <div className="mb-12">
    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-3">
      {badge}
    </span>
    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter leading-none">
      {title}
    </h2>
    <div className="w-16 h-1.5 bg-blue-600 rounded-full mb-6" />
    {subtitle && (
      <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl font-medium leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

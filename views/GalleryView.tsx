import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GALLERY_IMAGES } from '../constants';

const GalleryView: React.FC = () => {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const images = GALLERY_IMAGES.filter(item => category === 'All' || item.category === category);
  const current = selected === null ? null : images[selected];
  const move = (direction: number) => setSelected(index => index === null ? null : (index + direction + images.length) % images.length);
  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'Tab') {
        const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-gallery-dialog] button'));
        const first = buttons[0]; const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKey); opener.current?.focus(); };
  }, [selected === null, images.length]);
  return (
    <div className="py-6 md:py-12">
      <SectionHeader badge="Highlights" title="Selected Creative Works" subtitle="A closer look at the posters, campaigns, and visual stories behind my work." />
      <div className="flex flex-wrap items-center justify-between gap-5 mb-9 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-wrap gap-2" aria-label="Filter creative works">
          {['All', ...new Set(GALLERY_IMAGES.map(item => item.category))].map(filter => (
            <button key={filter} onClick={() => setCategory(filter)} aria-pressed={category === filter}
              className={`rounded-full px-4 py-2.5 text-xs font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${category === filter ? 'bg-blue-600 text-white' : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'}`}>
              {filter}
            </button>
          ))}
        </div>
        <p className="text-xs text-zinc-500" aria-live="polite">{images.length} works · Click to explore</p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {images.map((item, index) => (
          <button key={item.id} onClick={event => { opener.current = event.currentTarget; setSelected(index); }} aria-label={`View ${item.title}`}
            className="group block w-full mb-6 break-inside-avoid rounded-2xl overflow-hidden text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
            <div className="relative bg-zinc-100 dark:bg-zinc-800">
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="block w-full h-auto" />
              <span className="absolute top-3 right-3 rounded-full bg-black/60 text-white p-2.5 backdrop-blur-sm group-hover:bg-blue-600 transition-colors"><Maximize2 size={16} /></span>
            </div>
            <div className="p-5 flex justify-between gap-3 items-start">
              <div><p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">{item.category}</p><h3 className="text-base font-bold leading-snug">{item.title}</h3></div>
              <span className="text-xs text-zinc-400 pt-1">{String(index + 1).padStart(2, '0')}</span>
            </div>
          </button>
        ))}
      </div>
      {current && (
        <div data-gallery-dialog role="dialog" aria-modal="true" aria-label={current.title} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8">
          <button ref={closeButton} aria-label="Close preview" onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 p-3 rounded-full text-white bg-zinc-800 hover:bg-zinc-600"><X size={22} /></button>
          <img src={current.image} alt={current.title} className="max-w-full object-contain rounded-lg" style={{ maxHeight: 'calc(100dvh - 160px)' }} />
          <div className="flex items-center justify-between gap-4 w-full max-w-xl mt-5 text-white">
            <button aria-label="Previous work" onClick={() => move(-1)} className="p-3 rounded-full bg-white/10 hover:bg-white/20"><ArrowLeft size={20} /></button>
            <div className="text-center"><h3 className="font-bold text-sm">{current.title}</h3><p className="text-xs text-zinc-400 mt-1">{current.category} · {(selected ?? 0) + 1} / {images.length}</p></div>
            <button aria-label="Next work" onClick={() => move(1)} className="p-3 rounded-full bg-white/10 hover:bg-white/20"><ArrowRight size={20} /></button>
          </div>
        </div>
      )}
    </div>
  );
};
export default GalleryView;

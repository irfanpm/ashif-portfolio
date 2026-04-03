import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GALLERY_IMAGES } from '../constants';

const GalleryView: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <SectionHeader 
        badge="Highlights"
        title="Visual Showcase"
        subtitle="A curated collection of my best posters, digital art, and creative manipulations."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        {GALLERY_IMAGES.map((item) => (
          <div 
            key={item.id}
            className={`group relative overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${item.span || ''}`}
            onClick={() => setSelectedImage(item.image)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase block mb-2">{item.category}</span>
                <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <Maximize2 size={18} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300">
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryView;

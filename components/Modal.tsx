import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Video, UserCheck, Wifi } from 'lucide-react';
import { Model } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: Model | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, model }) => {
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    if (model) {
      setCurrentImage(model.coverImage);
    }
  }, [model]);

  if (!isOpen || !model) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-zinc-900 w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-brand-red transition-colors"
        >
          <X size={24} />
        </button>

        {/* Main Image Container */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative group h-[40vh] md:h-auto">
          <img 
            src={currentImage} 
            alt={model.name} 
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          {/* Navigation Arrows for Gallery (Optional implementation) */}
          <div className="absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity px-4 pointer-events-none">
             {/* Styling placeholders for arrows if we implemented cycling logic */}
          </div>
        </div>

        {/* Info & Gallery Sidebar */}
        <div className="w-full md:w-2/5 p-8 flex flex-col h-full overflow-y-auto bg-zinc-900 border-l border-zinc-800">
          <div className="mb-6">
            <h2 className="text-3xl font-serif text-white mb-1">{model.name}</h2>
            <p className="text-brand-red font-medium uppercase tracking-widest text-sm mb-4">{model.category}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400 mb-4 border-y border-zinc-800 py-4">
              <div>
                <span className="block text-zinc-500 text-xs uppercase">Idade</span>
                <span className="text-white">{model.age} anos</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs uppercase">Altura</span>
                <span className="text-white">{model.height}</span>
              </div>
            </div>

            {/* Service Types */}
            <div className="flex flex-wrap gap-2 mb-6">
              {model.services.presencial && (
                <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-3 py-2 rounded text-xs uppercase font-bold text-white tracking-wider">
                  <UserCheck size={14} className="text-brand-red" />
                  <span>Presencial</span>
                </div>
              )}
              {model.services.online && (
                <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-3 py-2 rounded text-xs uppercase font-bold text-white tracking-wider">
                  <Video size={14} className="text-brand-red" />
                  <span>Online / Cam</span>
                </div>
              )}
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm">
              {model.description}
            </p>
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex-grow">
            <h3 className="text-xs font-bold text-white uppercase mb-3">Galeria</h3>
            <div className="grid grid-cols-3 gap-2">
              {[model.coverImage, ...model.gallery].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(img)}
                  className={`relative aspect-[3/4] overflow-hidden rounded-md border-2 transition-all ${
                    currentImage === img ? 'border-brand-red opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Sticky CTA */}
          <div className="mt-8 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900">
            <a 
              href="/contatos" 
              className="flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-red-700 text-white py-4 rounded-lg uppercase font-bold text-sm tracking-widest transition-all shadow-lg hover:shadow-red-900/50"
            >
              <MessageCircle size={20} />
              Agendar Atendimento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
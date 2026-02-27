import React from 'react';
import { Star } from 'lucide-react';
import { TAVERN_IMAGE } from '../lib/products';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative border-t border-stone-900 bg-[#0c0a09]">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={TAVERN_IMAGE} 
          alt="Taverna Background" 
          className="w-full h-full object-cover opacity-60" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentNode) {
              (target.parentNode as HTMLElement).style.backgroundColor = '#1c1917';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-black/40 to-[#0c0a09]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-cinzel-dec mb-4 text-white">Contos da Taverna</h2>
          <p className="text-stone-400 font-medieval text-lg">O que os bardos cantam sobre nossa forja.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#0c0a09]/80 p-8 border border-stone-800 relative hover:border-amber-900/50 transition-colors backdrop-blur-sm">
              <div className="absolute -top-3 left-8 text-6xl text-stone-800 font-serif">"</div>
              <div className="text-amber-600 flex gap-1 mb-6 justify-center">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
              <p className="text-stone-300 italic mb-8 font-medieval text-center text-lg">"Os dados de metal são pesados e a sensação de rolar um 20 natural com eles é indescritível. A mesa inteira parou para olhar."</p>
              <div className="flex items-center justify-center gap-4 border-t border-stone-900 pt-6">
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center font-bold text-stone-400 border border-stone-700 font-cinzel">
                  GM
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-cinzel">Mestre Lucas</h4>
                  <p className="text-stone-600 text-xs uppercase tracking-wider">Rogue Nvl 12</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

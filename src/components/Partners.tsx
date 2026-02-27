import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="border-y border-stone-800 bg-gradient-to-r from-[#1c1917] via-[#0c0a09] to-[#1c1917] py-28 relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-900 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0c0a09] to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0a09] to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <p className="text-center text-stone-300 text-sm font-cinzel uppercase tracking-[0.3em] mb-10 text-shadow-sm font-bold">Guildas Parceiras</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-90 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-3 text-2xl font-cinzel font-bold text-white drop-shadow-md hover:scale-110 transition-transform cursor-pointer group">
            <span className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-2 py-1 rounded text-base font-sans font-bold group-hover:shadow-[0_0_15px_rgba(234,88,12,0.5)]">AMZ</span> 
            <span className="group-hover:text-amber-400">Amazon</span>
          </div>
          <div className="flex items-center gap-3 text-2xl font-cinzel font-bold text-white drop-shadow-md hover:scale-110 transition-transform cursor-pointer group">
            <span className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-stone-900 px-2 py-1 rounded text-base font-sans font-bold group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]">ML</span> 
            <span className="group-hover:text-amber-400">Mercado Livre</span>
          </div>
          <div className="flex items-center gap-3 text-2xl font-cinzel font-bold text-white drop-shadow-md hover:scale-110 transition-transform cursor-pointer group">
            <span className="bg-gradient-to-br from-orange-600 to-orange-700 text-white px-2 py-1 rounded text-base font-sans font-bold group-hover:shadow-[0_0_15px_rgba(217,119,6,0.5)]">SHP</span> 
            <span className="group-hover:text-amber-400">Shopee</span>
          </div>
          <div className="flex items-center gap-3 text-2xl font-cinzel font-bold text-white drop-shadow-md hover:scale-110 transition-transform cursor-pointer group">
            <span className="bg-gradient-to-br from-black to-stone-900 text-white px-2 py-1 rounded text-base font-sans font-bold border border-stone-600 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">TK</span> 
            <span className="group-hover:text-amber-400">TikTok</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

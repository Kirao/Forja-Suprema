import React from 'react';
import { Flame, Sword } from 'lucide-react';
import { HERO_IMAGE } from '../lib/products';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-40 pb-32 lg:pt-60 lg:pb-48 overflow-hidden min-h-[90vh] flex items-center justify-center bg-black">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Fundo da Forja" 
          className="w-full h-full object-cover opacity-40" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentNode) {
              (target.parentNode as HTMLElement).style.background = 'radial-gradient(circle, #290b0b 0%, #000000 100%)';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="ember"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random()
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black/60 border border-amber-600/50 text-amber-500 text-sm font-bold mb-8 uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(217,119,6,0.2)]">
          <Flame size={16} className="text-red-500 animate-pulse" />
          <span className="font-cinzel">Forjado nas profundezas</span>
          <Flame size={16} className="text-red-500 animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 font-cinzel-dec leading-none tracking-tight drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
          Sua Sorte <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-red-500 to-red-900" style={{textShadow: "0 0 20px rgba(220, 38, 38, 0.5)"}}>
            Forjada em Fogo
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medieval drop-shadow-md">
          Dados artesanais de metal pesado e resinas antigas. 
          O peso do destino na palma da sua mão. 
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#loja" className="w-full md:w-auto px-10 py-5 bg-gradient-to-b from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-amber-100 font-bold font-cinzel rounded border-2 border-amber-700 shadow-[0_0_30px_rgba(185,28,28,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-3 uppercase tracking-wider text-xl">
            <Sword size={24} />
            Explorar Arsenal
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0c0a09] to-transparent"></div>

      <style>{`
        @keyframes rise {
          0% { bottom: -10px; transform: translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { bottom: 100%; transform: translateX(-20px); opacity: 0; }
        }
        
        .ember {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #ff4500;
          border-radius: 50%;
          box-shadow: 0 0 10px #ff4500, 0 0 20px #ff8c00;
          animation: rise linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Hero;

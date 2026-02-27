import React from 'react';
import { Dices, ShieldCheck, Truck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1c1917]/80 p-8 rounded-sm border border-stone-800 hover:border-red-900 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-stone-800 opacity-20"><Dices size={120}/></div>
            <div className="bg-stone-800 w-16 h-16 rounded flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform shadow-lg border border-stone-700">
              <Dices size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-cinzel-dec">Balanceamento Puro</h3>
            <p className="text-stone-400 text-base leading-relaxed font-medieval">
              Cada dado é testado na forja para garantir o caos verdadeiro. Nada de rolagens viciadas, apenas a vontade dos deuses.
            </p>
          </div>
          
          <div className="bg-[#1c1917]/80 p-8 rounded-sm border border-stone-800 hover:border-amber-700 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-stone-800 opacity-20"><ShieldCheck size={120}/></div>
            <div className="bg-stone-800 w-16 h-16 rounded flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform shadow-lg border border-stone-700">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-cinzel-dec">Metal Eterno</h3>
            <p className="text-stone-400 text-base leading-relaxed font-medieval">
              Forjados em ligas de zinco e mithril simulado. Pesados o suficiente para marcar a mesa e durar gerações.
            </p>
          </div>

          <div className="bg-[#1c1917]/80 p-8 rounded-sm border border-stone-800 hover:border-red-900 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-stone-800 opacity-20"><Truck size={120}/></div>
            <div className="bg-stone-800 w-16 h-16 rounded flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform shadow-lg border border-stone-700">
              <Truck size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-cinzel-dec">Envio Rúnico</h3>
            <p className="text-stone-400 text-base leading-relaxed font-medieval">
              Embalados em cofres reforçados e enviados via teleporte (transportadora expressa) para chegar antes da próxima sessão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

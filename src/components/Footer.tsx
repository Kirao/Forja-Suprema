import React from 'react';
import { Anvil } from 'lucide-react';
import { FOOTER_IMAGE } from '../lib/products';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0a09] pt-20 pb-10 border-t border-amber-900/30 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={FOOTER_IMAGE} 
          alt="Rodapé Background" 
          className="w-full h-full object-cover opacity-50" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentNode) {
              (target.parentNode as HTMLElement).style.backgroundColor = '#0c0a09';
            }
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0c0a09] to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Anvil className="text-red-700 w-6 h-6" />
              <span className="text-2xl font-bold text-white font-cinzel uppercase">Forja Suprema</span>
            </div>
            <p className="text-stone-500 max-w-sm mb-6 font-medieval">
              Transformando sessões comuns em lendas épicas através de artefatos de alta qualidade. Forjados para durar uma vida inteira de aventuras.
            </p>
          </div>
          
          <div>
            <h4 className="text-amber-500 font-bold mb-6 uppercase tracking-wider text-sm font-cinzel border-b border-stone-800 pb-2 inline-block">Navegação</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-medieval">
              <li><a href="#" className="hover:text-red-500 transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Dados de Metal</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Dados de Resina</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Acessórios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold mb-6 uppercase tracking-wider text-sm font-cinzel border-b border-stone-800 pb-2 inline-block">Suporte</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-medieval">
              <li><a href="#" className="hover:text-red-500 transition-colors">Rastrear Loot</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Política de Troca</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Pergaminhos (FAQ)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-900 pt-8 text-center text-stone-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4 font-medieval">
          <p>&copy; 2024 Forja Suprema. Todos os direitos reservados.</p>
          <div className="flex gap-4 opacity-40 grayscale">
            <span className="border border-stone-700 px-2 py-1 rounded text-xs">PIX</span>
            <span className="border border-stone-700 px-2 py-1 rounded text-xs">Mithril Card</span>
            <span className="border border-stone-700 px-2 py-1 rounded text-xs">Gold Coins</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

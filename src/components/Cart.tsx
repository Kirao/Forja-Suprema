import React from 'react';
import { ShoppingBag, X, Dices, Check, ShieldCheck } from 'lucide-react';
import { Product } from '../lib/types';

interface CartProps {
  isOpen: boolean;
  items: Product[];
  onClose: () => void;
  onRemove: (index: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, items, onClose, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className={`fixed inset-y-0 right-0 w-full md:w-96 bg-[#1c1917] shadow-2xl z-50 transform transition-transform duration-300 border-l border-amber-900/50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-stone-800 flex justify-between items-center bg-[#0c0a09]">
            <h2 className="text-2xl font-bold text-white font-cinzel flex items-center gap-2">
              <ShoppingBag className="text-amber-600" size={24} /> Inventário
            </h2>
            <button onClick={onClose} className="text-stone-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-20 opacity-50">
                <Dices size={64} className="mx-auto mb-4 text-stone-700" />
                <p className="font-medieval text-xl text-stone-500">Seu saco de espólios está vazio.</p>
              </div>
            ) : (
              items.map((item, index) => (
                <div key={index} className="flex gap-4 bg-[#0c0a09] p-3 rounded border border-stone-800">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover border border-stone-700" />
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm font-cinzel">{item.name}</h4>
                    <p className="text-stone-500 text-xs uppercase">{item.material}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-amber-600 font-bold text-sm">R$ {item.price.toFixed(2)}</span>
                      <button 
                        onClick={() => onRemove(index)}
                        className="text-stone-600 hover:text-red-500 text-xs underline"
                      >
                        Descartar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-stone-800 bg-[#0c0a09]">
            <div className="flex justify-between items-center mb-6 text-xl font-bold text-white font-cinzel">
              <span>Total (Ouro):</span>
              <span className="text-amber-500">R$ {total.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-green-800 to-emerald-900 hover:from-green-700 hover:to-emerald-800 text-white font-bold rounded border border-green-700 shadow-lg transition-all transform active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2 font-cinzel text-lg">
              <Check size={24} /> Finalizar Pedido
            </button>
            <p className="text-center text-stone-600 text-xs mt-4 flex items-center justify-center gap-1 font-sans">
              <ShieldCheck size={12} /> Checkout Encriptado (SSL)
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"></div>
      )}
    </>
  );
};

export default Cart;

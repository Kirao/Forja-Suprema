import React from 'react';
import { Anvil, ShoppingBag, Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
  cartCount: number;
  onCartClick: () => void;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  cartCount,
  onCartClick,
  mobileMenuOpen,
  onMobileMenuToggle
}) => {
  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-amber-900/50 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-red-900 to-red-700 p-2 rounded-lg rotate-3 border border-amber-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <Anvil className="text-amber-200 w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-amber-500 font-cinzel-dec uppercase text-shadow-sm flex flex-col leading-none">
              <span>Forja</span>
              <span className="text-red-600 text-sm tracking-[0.3em] font-cinzel">Suprema</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-lg tracking-wide text-stone-400 font-medieval">
            <a href="#loja" className="hover:text-amber-500 transition-colors uppercase hover:underline decoration-red-600 underline-offset-4">
              O Arsenal
            </a>
            <a href="#sobre" className="hover:text-amber-500 transition-colors uppercase hover:underline decoration-red-600 underline-offset-4">
              A Forja
            </a>
            
            <button 
              onClick={onCartClick}
              className="relative group bg-stone-900/80 hover:bg-stone-800 border border-amber-700/50 p-3 rounded-full transition-all hover:scale-110"
            >
              <ShoppingBag className="w-5 h-5 text-amber-500 group-hover:text-amber-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-700 text-amber-100 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-stone-900">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button className="md:hidden text-stone-300" onClick={onMobileMenuToggle}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 pt-20">
          <a href="#loja" onClick={onMobileMenuToggle} className="text-3xl text-stone-300 hover:text-red-500">
            O Arsenal
          </a>
          <a href="#sobre" onClick={onMobileMenuToggle} className="text-3xl text-stone-300 hover:text-red-500">
            A Forja
          </a>
          <button onClick={() => { onCartClick(); onMobileMenuToggle(); }} className="text-3xl text-amber-500 flex items-center gap-2">
            <ShoppingBag /> Ver Inventário ({cartCount})
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;

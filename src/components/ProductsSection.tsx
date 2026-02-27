import React from 'react';
import { Anvil } from 'lucide-react';
import ProductsCarousel from './ProductsCarousel';
import { Product } from '../lib/types';
import { PRODUCTS, CATALOG_IMAGE } from '../lib/products';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart }) => {
  return (
    <section id="loja" className="py-24 bg-[#0c0a09] relative">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={CATALOG_IMAGE} 
          alt="Arsenal Background" 
          className="w-full h-full object-cover opacity-60" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentNode) {
              (target.parentNode as HTMLElement).style.backgroundColor = '#0c0a09';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-black/40 to-[#0c0a09]"></div>
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-cinzel-dec mb-2 flex items-center gap-3">
              <Anvil className="text-red-600" size={40} /> O Arsenal
            </h2>
            <p className="text-stone-400 font-medieval text-xl">Escolha sua arma para a próxima batalha.</p>
          </div>
        </div>

        <div className="px-12">
          <ProductsCarousel products={PRODUCTS} onAddToCart={onAddToCart} />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

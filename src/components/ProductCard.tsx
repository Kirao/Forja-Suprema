import React from 'react';
import { Product, RarityType } from '../lib/types';
import ProductImageCarousel from './ProductImageCarousel';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const getRarityStyles = (rarity: RarityType) => {
  const styles = {
    'Lendário': 'bg-amber-900/80 text-amber-200 border-amber-500',
    'Épico': 'bg-purple-900/80 text-purple-200 border-purple-500',
    'Raro': 'bg-blue-900/80 text-blue-200 border-blue-500'
  };
  return styles[rarity];
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-[#1c1917]/80 backdrop-blur-sm rounded-lg overflow-hidden border border-stone-800 hover:border-amber-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,119,6,0.15)] flex flex-col">
      
      <div className={`absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-sm border shadow-lg backdrop-blur-md font-cinzel tracking-wider ${getRarityStyles(product.rarity)}`}>
        {product.rarity}
      </div>

      <div className="relative h-72 overflow-hidden border-b border-stone-800">
        <ProductImageCarousel images={product.images} productName={product.name} />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2 font-cinzel-dec">{product.name}</h3>
        <p className="text-stone-500 text-xs uppercase tracking-wider mb-3 font-cinzel">{product.material}</p>
        <p className="text-stone-400 text-sm mb-6 flex-1 font-medieval leading-relaxed">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-amber-500 font-cinzel">R$ {product.price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-bold transition-colors shadow-lg font-cinzel uppercase tracking-wider"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

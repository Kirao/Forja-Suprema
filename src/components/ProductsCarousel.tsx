import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../lib/types';

interface ProductsCarouselProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ products, onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Atualizar items por página baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const visibleProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };

  return (
    <div className="relative">
      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Navigation - Only show if more than one page */}
      {totalPages > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-stone-800 hover:bg-stone-700 text-amber-500 hover:text-amber-400 p-3 rounded-full transition-all shadow-lg hidden lg:flex items-center justify-center"
            aria-label="Produtos anteriores"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-stone-800 hover:bg-stone-700 text-amber-500 hover:text-amber-400 p-3 rounded-full transition-all shadow-lg hidden lg:flex items-center justify-center"
            aria-label="Próximos produtos"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8 lg:hidden">
            <button
              onClick={goToPrevious}
              className="bg-stone-800 hover:bg-stone-700 text-amber-500 hover:text-amber-400 p-2 rounded-full transition-all"
              aria-label="Produtos anteriores"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goToNext}
              className="bg-stone-800 hover:bg-stone-700 text-amber-500 hover:text-amber-400 p-2 rounded-full transition-all"
              aria-label="Próximos produtos"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-amber-500 w-8'
                    : 'bg-stone-600 hover:bg-stone-500'
                }`}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>

          {/* Page Counter */}
          <div className="text-center mt-4 text-stone-400 text-sm font-cinzel">
            Página {currentIndex + 1} de {totalPages}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsCarousel;

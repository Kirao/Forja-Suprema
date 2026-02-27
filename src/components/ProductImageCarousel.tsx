import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-full w-full">
      {/* Main Image */}
      <div className="relative h-full w-full overflow-hidden bg-stone-900">
        <img
          src={images[currentIndex]}
          alt={`${productName} - Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentNode) {
              (target.parentNode as HTMLElement).style.backgroundColor = '#2d2420';
            }
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-transparent z-10 opacity-60"></div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-cinzel">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-3 flex gap-2 justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-amber-500 w-8'
                  : 'bg-stone-600 hover:bg-stone-500'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;

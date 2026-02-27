import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import ProductsSection from '../components/ProductsSection';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import Notification from '../components/Notification';
import { Product } from '../lib/types';

const Home: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    showNotification(`Item ${product.name} adicionado ao inventário!`);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-medieval overflow-x-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;700;900&family=MedievalSharp&display=swap');
        
        .font-cinzel-dec { font-family: 'Cinzel Decorative', cursive; }
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-medieval { font-family: 'MedievalSharp', cursive; }
      `}</style>

      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 mix-blend-overlay" 
           style={{backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`}}>
      </div>

      <Notification message={notification} />

      <Navigation 
        isScrolled={isScrolled}
        cartCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <Hero />

      <Partners />

      <Features />

      <ProductsSection onAddToCart={addToCart} />

      <Reviews />

      <Footer />

      <Cart 
        isOpen={isCartOpen}
        items={cart}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default Home;

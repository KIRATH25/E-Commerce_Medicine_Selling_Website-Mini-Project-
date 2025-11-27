import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ProductGrid } from './components/ProductGrid';
import { DoctorSection } from './components/DoctorSection';
import { Footer } from './components/Footer';
import { ProfileSection } from './components/ProfileSection';
import { CartSection } from './components/CartSection';
import { LiquidEther } from './components/LiquidEther';
import { AuthModal } from './components/AuthModal';
import { ViewState, CartItem, Product } from './types';
import { CheckCircle } from 'lucide-react';
import { supabase } from './services/supabaseClient';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [viewHistory, setViewHistory] = useState<ViewState[]>([ViewState.HOME]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeForm, setActiveForm] = useState<string>('All');
  const [notification, setNotification] = useState<string | null>(null);
  
  // Auth State
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSetView = (view: ViewState) => {
    if (view !== currentView) {
      setViewHistory(prev => [...prev, view]);
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (viewHistory.length > 1) {
      const newHistory = [...viewHistory];
      newHistory.pop();
      const previousView = newHistory[newHistory.length - 1];
      setViewHistory(newHistory);
      setCurrentView(previousView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView(ViewState.HOME);
    }
  };

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => setCartItems([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term) {
      setActiveCategory('All');
      setActiveForm('All');
      handleSetView(ViewState.SHOP);
    }
  };

  const handleCategorySelect = (category: string, form: string) => {
    setActiveCategory(category);
    setActiveForm(form);
    setSearchTerm('');
    handleSetView(ViewState.SHOP);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero setView={handleSetView} />
            <CategorySection onSelectCategory={handleCategorySelect} />
            <ProductGrid 
              addToCart={addToCart} 
              searchTerm={searchTerm}
              initialCategory="All"
              initialForm="All"
            />
            <DoctorSection />
          </>
        );
      case ViewState.SHOP:
        return (
           <div className="pt-8">
              <ProductGrid 
                addToCart={addToCart} 
                searchTerm={searchTerm}
                initialCategory={activeCategory}
                initialForm={activeForm}
              />
           </div>
        );
      case ViewState.DOCTORS:
        return <div className="pt-8"><DoctorSection /></div>;
      case ViewState.PROFILE:
        return <ProfileSection user={user} />;
      case ViewState.CART:
        return (
          <CartSection 
            items={cartItems} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            onContinueShopping={() => handleSetView(ViewState.HOME)}
          />
        );
      default:
        return <Hero setView={handleSetView} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-theme-text relative overflow-hidden bg-theme-scarlet">
      {/* Background */}
      <LiquidEther 
        colors={['#4E0714', '#781727', '#AC5B67']}
        className="fixed inset-0 z-0"
      />

      <div className="relative z-10">
        <Navbar 
          setView={handleSetView} 
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
          onSearch={handleSearch} 
          onBack={handleBack}
          showBack={currentView !== ViewState.HOME}
          user={user}
          onAccountClick={() => {
            if (user) handleSetView(ViewState.PROFILE);
            else setShowAuthModal(true);
          }}
        />
        
        <main className="transition-all duration-500">
          {renderContent()}
        </main>

        {currentView !== ViewState.CART && <Footer />}

        {notification && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
            <div className="bg-theme-ruby/90 backdrop-blur-md border border-theme-puce text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3">
              <div className="bg-theme-puce rounded-full p-1"><CheckCircle size={20} className="text-white" /></div>
              <span className="font-semibold text-sm tracking-wide">{notification}</span>
            </div>
          </div>
        )}

        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
      </div>
    </div>
  );
};

export default App;
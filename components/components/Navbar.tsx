import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, User, Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';
import { products } from '../data/mockData';

interface NavbarProps {
  setView: (view: ViewState) => void;
  cartCount: number;
  onSearch?: (term: string) => void;
  onBack: () => void;
  showBack: boolean;
  user: any;
  onAccountClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setView, cartCount, onSearch, onBack, showBack, user, onAccountClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = searchQuery.length > 1 
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  const handleSearchSubmit = () => {
    if (onSearch) {
      onSearch(searchQuery);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (name: string) => {
    setSearchQuery(name);
    if (onSearch) {
      onSearch(name);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-theme-scarlet/90 backdrop-blur-md border-b border-theme-ruby">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Back */}
          <div className="flex items-center gap-4">
            {showBack && (
              <button 
                onClick={onBack}
                className="p-2 rounded-full hover:bg-theme-ruby text-theme-pearl hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <div className="flex-shrink-0 cursor-pointer group" onClick={() => setView(ViewState.HOME)}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-theme-puce to-theme-ruby rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                  A
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white tracking-tight">ArogyaNitya</h1>
                  <p className="text-[10px] text-theme-pearl font-medium uppercase tracking-wider">Eternal Health</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8 relative group" ref={searchRef}>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-theme-pearl" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowSuggestions(true)}
                className="block w-full pl-12 pr-14 py-3.5 border border-theme-ruby rounded-full leading-5 bg-theme-ruby/50 text-white placeholder-theme-pearl focus:outline-none focus:bg-theme-ruby focus:ring-2 focus:ring-theme-puce/50 focus:border-transparent transition-all duration-200 shadow-inner"
                placeholder="Search medicines..."
              />
              
              {searchQuery && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    if(onSearch) onSearch('');
                  }}
                  className="absolute right-14 p-1 text-theme-pearl hover:text-white"
                >
                  <X size={14} />
                </button>
              )}

              <div className="absolute inset-y-0 right-1 flex items-center">
                <button 
                  onClick={handleSearchSubmit}
                  className="bg-theme-puce text-white p-2.5 rounded-full hover:bg-theme-pearl hover:text-theme-scarlet transition-colors shadow-lg"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
               <div className="absolute top-full left-0 right-0 mt-2 bg-theme-ruby rounded-3xl shadow-xl border border-theme-puce overflow-hidden z-50 animate-fade-in-up">
                 <div className="p-2">
                   {suggestions.map((product) => (
                     <div 
                       key={product.id}
                       onClick={() => handleSuggestionClick(product.name)}
                       className="flex items-center gap-4 p-3 hover:bg-theme-scarlet rounded-2xl cursor-pointer transition-colors group"
                     >
                       <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                         <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-1">
                         <h4 className="text-sm font-bold text-white group-hover:text-theme-almond transition-colors">{product.name}</h4>
                         <p className="text-xs text-theme-pearl">{product.category}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setView(ViewState.CART)}
              className="relative p-2 text-theme-pearl hover:text-white transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-theme-scarlet transform translate-x-1/4 -translate-y-1/4 bg-theme-almond rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={onAccountClick}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-theme-pearl hover:bg-theme-ruby transition-all border border-transparent hover:border-theme-puce"
            >
              <div className="w-8 h-8 bg-theme-ruby rounded-full flex items-center justify-center text-theme-almond border border-theme-puce">
                <User size={18} />
              </div>
              <span className="font-medium text-sm">
                {user ? user.user_metadata?.full_name?.split(' ')[0] || 'Account' : 'Login'}
              </span>
            </button>
            <button className="md:hidden p-2 text-theme-pearl">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
import React, { useState, useEffect } from 'react';
import { Star, Plus, Filter, Check, X, ShoppingCart } from 'lucide-react';
import { products } from '../data/mockData';
import { Product } from '../types';

interface ProductGridProps {
  addToCart: (product: Product) => void;
  searchTerm?: string;
  initialCategory?: string;
  initialForm?: string;
}

type SortOption = 'popularity' | 'price-asc' | 'price-desc';

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  addToCart, 
  searchTerm = '', 
  initialCategory = 'All',
  initialForm = 'All'
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedForm, setSelectedForm] = useState(initialForm);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortOption, setSortOption] = useState<SortOption>('popularity');
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  useEffect(() => {
    setSelectedCategory(initialCategory);
    setSelectedForm(initialForm);
  }, [initialCategory, initialForm]);

  useEffect(() => {
    setVisibleCount(12);
  }, [searchTerm, selectedCategory, selectedForm, maxPrice, sortOption]);

  useEffect(() => {
    if (searchTerm) {
       setSelectedCategory('All');
       setSelectedForm('All');
    }
  }, [searchTerm]);
  
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const forms = ['All', ...Array.from(new Set(products.map(p => p.form)))];

  let filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesForm = selectedForm === 'All' || product.form === selectedForm;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price <= maxPrice;
    
    return matchesCategory && matchesForm && matchesSearch && matchesPrice;
  });

  filteredProducts.sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    return b.reviews - a.reviews; 
  });

  const displayProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section className="py-16 font-sans relative z-10" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0 animate-fade-in-up">
            <div className="bg-theme-ruby/80 backdrop-blur-md p-6 rounded-3xl shadow-sm sticky top-24 border border-theme-puce">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Filter size={20} className="text-theme-almond" />
                  <h3 className="font-bold text-lg text-white">Filters</h3>
                </div>
                {(selectedCategory !== 'All' || selectedForm !== 'All' || maxPrice !== 1000) && (
                  <button 
                    onClick={() => { setSelectedCategory('All'); setSelectedForm('All'); setMaxPrice(1000); }}
                    className="text-xs font-bold text-theme-pearl hover:text-white transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-theme-pearl uppercase mb-3">Categories</h4>
                  <div className="space-y-1 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left text-sm py-2.5 px-3 rounded-xl transition-all flex justify-between items-center ${
                          selectedCategory === cat 
                            ? 'bg-theme-puce text-white font-medium' 
                            : 'text-theme-pearl hover:bg-theme-scarlet hover:text-white'
                        }`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-theme-scarlet pt-6">
                  <h4 className="text-sm font-bold text-theme-pearl uppercase mb-3">Form</h4>
                  <div className="space-y-1">
                    {forms.map(form => (
                       <button
                        key={form}
                        onClick={() => setSelectedForm(form)}
                        className={`w-full text-left text-sm py-2 px-3 rounded-xl transition-all flex justify-between items-center ${
                          selectedForm === form 
                            ? 'bg-theme-puce text-white font-medium' 
                            : 'text-theme-pearl hover:bg-theme-scarlet hover:text-white'
                        }`}
                      >
                        <span>{form}</span>
                        {selectedForm === form && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-theme-scarlet pt-6">
                  <div className="flex justify-between items-center mb-3">
                     <h4 className="text-sm font-bold text-theme-pearl uppercase">Max Price</h4>
                     <span className="text-xs font-bold text-theme-scarlet bg-theme-almond px-2 py-1 rounded-md">₹{maxPrice}</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="1000" 
                    step="10"
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-2 bg-theme-scarlet rounded-lg appearance-none cursor-pointer accent-theme-almond" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
             <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-6 gap-4">
               <div>
                 <h2 className="text-2xl font-bold text-white">
                   {searchTerm ? `Results for "${searchTerm}"` : (selectedCategory !== 'All' ? selectedCategory : 'All Medicines')}
                 </h2>
                 <p className="text-sm text-theme-pearl mt-1">Showing {filteredProducts.length} products</p>
               </div>
               
               <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="bg-theme-ruby border border-theme-puce rounded-full px-5 py-2.5 text-sm text-theme-almond focus:outline-none focus:border-theme-almond cursor-pointer"
               >
                 <option value="popularity">Sort by: Popularity</option>
                 <option value="price-asc">Price: Low to High</option>
                 <option value="price-desc">Price: High to Low</option>
               </select>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {displayProducts.map((product) => (
                 <div 
                    key={product.id} 
                    onClick={() => setSelectedProduct(product)}
                    className="bg-theme-almond p-4 rounded-[2rem] shadow-sm border border-theme-puce flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white group cursor-pointer"
                 >
                   <div className="relative h-48 bg-white rounded-[1.5rem] overflow-hidden mb-4 border border-theme-pearl">
                     <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-sm z-10">
                        {product.prescriptionRequired ? (
                          <span className="text-[10px] font-bold text-red-500 px-2 py-0.5 bg-red-50 rounded-full border border-red-100">Rx</span>
                        ) : (
                          <span className="text-[10px] font-bold text-green-600 px-2 py-0.5 bg-green-50 rounded-full border border-green-100">OTC</span>
                        )}
                     </div>
                   </div>
                   
                   <div className="px-2 flex-1 flex flex-col">
                     <div className="flex justify-between items-start mb-2">
                       <div className="flex-1 pr-2">
                         <p className="text-[10px] text-theme-ruby font-bold uppercase tracking-wider mb-1">{product.category}</p>
                         <h3 className="font-bold text-theme-scarlet text-lg leading-tight group-hover:text-theme-ruby transition-colors">{product.name}</h3>
                       </div>
                       <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg flex-shrink-0">
                         <Star size={12} className="fill-yellow-400 text-yellow-400" />
                         <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                       </div>
                     </div>
                     
                     <div className="mt-auto flex items-center justify-between pt-4 border-t border-theme-pearl/50">
                       <span className="text-xl font-bold text-theme-scarlet">₹{product.price.toFixed(2)}</span>
                       <button 
                        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                        className="flex items-center gap-2 bg-theme-scarlet text-theme-almond px-5 py-2.5 rounded-full text-sm font-bold hover:bg-theme-ruby transition-all shadow-lg transform active:scale-95"
                       >
                         <Plus size={16} /> Add
                       </button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
             
             {hasMore && (
               <div className="flex justify-center mt-12">
                 <button 
                   onClick={() => setVisibleCount(prev => prev + 12)}
                   className="bg-theme-ruby text-white border border-theme-puce px-8 py-3 rounded-full font-bold hover:bg-theme-scarlet transition-all shadow-lg hover:scale-105"
                 >
                   Load More Medicines
                 </button>
               </div>
             )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-theme-scarlet/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-theme-almond rounded-[2.5rem] shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-white p-8 flex items-center justify-center relative">
               <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-contain mix-blend-multiply max-h-[400px]" />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col relative text-theme-scarlet">
               <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 hover:bg-theme-pearl/50 rounded-full transition-colors">
                 <X size={24} className="text-theme-ruby" />
               </button>

               <div className="mb-6">
                 <h2 className="text-3xl md:text-4xl font-bold text-theme-scarlet mb-2">{selectedProduct.name}</h2>
                 <p className="text-theme-ruby font-medium">{selectedProduct.category}</p>
               </div>

               <div className="space-y-6 flex-1">
                  <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-theme-pearl">
                     <div>
                        <p className="text-sm text-theme-ruby mb-1">Price per pack</p>
                        <p className="text-3xl font-bold text-theme-scarlet">₹{selectedProduct.price.toFixed(2)}</p>
                     </div>
                     <div className="text-right">
                        <p className="text-sm text-theme-ruby mb-1">Dosage</p>
                        <p className="text-lg font-bold text-theme-scarlet">{selectedProduct.dosage}</p>
                     </div>
                  </div>
                  <p className="text-theme-ruby leading-relaxed text-sm">Effective medication for {selectedProduct.category.toLowerCase()}. Always consult your doctor before use.</p>
               </div>

               <div className="mt-8 pt-6 border-t border-theme-pearl">
                  <button 
                    onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                    className="w-full py-4 bg-theme-scarlet text-theme-almond rounded-2xl font-bold text-lg hover:bg-theme-ruby transition-colors shadow-xl flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart - ₹{selectedProduct.price.toFixed(2)}
                  </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory?: (category: string, form: string) => void;
}

const categories = [
  { name: 'Tablets & Capsules', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80', targetCategory: 'All', targetForm: 'Tablet' },
  { name: 'Syrups & Tonics', image: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?auto=format&fit=crop&w=400&q=80', targetCategory: 'All', targetForm: 'Syrup' },
  { name: 'Medical Devices', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=400&q=80', targetCategory: 'All', targetForm: 'Device' },
  { name: 'Women\'s Care', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80', targetCategory: 'Women Care', targetForm: 'All' },
  { name: 'Baby Care', image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=400&q=80', targetCategory: 'Baby Care', targetForm: 'All' },
  { name: 'Supplements', image: 'https://images.unsplash.com/photo-1593560704563-a1708334541d?auto=format&fit=crop&w=400&q=80', targetCategory: 'Vitamins', targetForm: 'All' },
];

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-20 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-white">Browse by Category</h2>
            <p className="text-theme-pearl mt-2">Essential healthcare products for every need</p>
          </div>
          <button 
            onClick={() => onSelectCategory && onSelectCategory('All', 'All')}
            className="text-theme-almond font-medium flex items-center gap-2 hover:gap-3 hover:underline transition-all duration-300"
          >
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => onSelectCategory && onSelectCategory(category.targetCategory, category.targetForm)}
              className="group relative h-64 rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl bg-theme-ruby border border-theme-puce"
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <h3 className="text-2xl font-bold text-white leading-tight max-w-[60%] group-hover:text-theme-almond transition-colors">{category.name}</h3>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-theme-pearl opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-theme-scarlet shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover mix-blend-multiply bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
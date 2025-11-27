import React from 'react';
import { ArrowRight, Calendar, Activity } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative overflow-visible pt-10 pb-20 md:pt-16 md:pb-28 font-sans z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-ruby/50 backdrop-blur-sm border border-theme-puce shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-almond opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-theme-almond"></span>
              </span>
              <span className="text-sm font-medium text-theme-pearl">24/7 Specialist Support Available</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Your Trusted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-puce to-theme-almond">
                Partner for Health
              </span>
            </h1>
            
            <p className="text-lg text-theme-pearl max-w-lg leading-relaxed">
              Order genuine medicines, consult top specialists, and get personalized health guidance delivered to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setView(ViewState.SHOP)}
                className="px-8 py-4 rounded-full bg-theme-puce text-white font-semibold hover:bg-theme-pearl hover:text-theme-scarlet transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Shop Medicines
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setView(ViewState.DOCTORS)}
                className="px-8 py-4 rounded-full bg-theme-ruby text-white border border-theme-puce font-semibold hover:bg-theme-scarlet transition-all flex items-center justify-center gap-2"
              >
                <Calendar size={18} className="text-theme-almond" />
                Consult Doctor
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-theme-ruby">
              <div>
                <h4 className="text-2xl font-bold text-white">1M+</h4>
                <p className="text-sm text-theme-pearl">Happy Users</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">100%</h4>
                <p className="text-sm text-theme-pearl">Genuine Meds</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">500+</h4>
                <p className="text-sm text-theme-pearl">Specialists</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full bg-theme-ruby/30 rounded-[3rem] overflow-hidden shadow-2xl border border-theme-puce flex items-center justify-center p-8 transform transition-transform duration-500 hover:scale-[1.02]">
               <img 
                 src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1000&auto=format&fit=crop" 
                 alt="Doctor"
                 className="object-cover w-full h-full rounded-[2.5rem] opacity-80 shadow-inner mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
               />
               
               {/* Floating Cards */}
               <div className="absolute bottom-10 left-10 bg-theme-scarlet/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-theme-puce animate-bounce-slow">
                 <div className="flex items-center gap-3">
                   <div className="bg-theme-ruby p-2 rounded-full text-theme-almond">
                     <Activity size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-theme-pearl">Heart Rate</p>
                     <p className="text-sm font-bold text-white">72 bpm</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
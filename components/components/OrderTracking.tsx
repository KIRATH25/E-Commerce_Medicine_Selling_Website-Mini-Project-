import React from 'react';
import { Check, Package, Truck, Home } from 'lucide-react';

export const OrderTracking: React.FC = () => {
  const steps = [
    { name: 'Confirmed', icon: Check, status: 'completed', date: 'Oct 24, 10:30 AM' },
    { name: 'Packed', icon: Package, status: 'completed', date: 'Oct 24, 02:15 PM' },
    { name: 'Shipped', icon: Truck, status: 'active', date: 'Expected Oct 26' },
    { name: 'Delivered', icon: Home, status: 'pending', date: '' },
  ];

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 my-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-slate-900">Track Order #AN-2938</h3>
        <span className="px-3 py-1 bg-blue-50 text-medical-blue text-xs font-bold rounded-full">In Transit</span>
      </div>

      <div className="relative flex justify-between">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
        <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-medical-blue -translate-y-1/2 z-0"></div>

        {steps.map((step, index) => {
          const isActive = step.status === 'active';
          const isCompleted = step.status === 'completed';
          const Icon = step.icon;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-colors ${
                isCompleted ? 'bg-medical-blue border-medical-blue text-white' : 
                isActive ? 'bg-white border-medical-blue text-medical-blue' : 
                'bg-white border-slate-200 text-slate-300'
              }`}>
                <Icon size={16} />
              </div>
              <div className="mt-3 text-center">
                <p className={`text-xs font-bold ${isActive || isCompleted ? 'text-slate-900' : 'text-slate-400'}`}>{step.name}</p>
                <p className="text-[10px] text-slate-400 mt-1">{step.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
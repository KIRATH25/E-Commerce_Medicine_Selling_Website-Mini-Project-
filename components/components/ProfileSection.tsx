import React from 'react';
import { Package, Heart, FileText, Settings, LogOut } from 'lucide-react';
import { OrderTracking } from './OrderTracking';
import { supabase } from '../services/supabaseClient';

interface ProfileSectionProps {
  user: any;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  if (!user) {
    return (
      <section className="py-20 bg-theme-scarlet min-h-screen flex items-center justify-center font-sans">
        <div className="text-center text-theme-pearl">
           <h2 className="text-2xl font-bold text-white mb-2">Please Log In</h2>
           <p>Access your profile to view orders and prescriptions.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-theme-scarlet min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-theme-almond rounded-[2rem] p-6 shadow-sm sticky top-24 border border-theme-puce">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-24 h-24 bg-theme-ruby rounded-full flex items-center justify-center text-theme-almond text-4xl font-bold mb-4 border-4 border-theme-puce">
                  {user.user_metadata?.full_name ? user.user_metadata.full_name[0] : 'U'}
                </div>
                <h2 className="text-xl font-bold text-theme-scarlet">{user.user_metadata?.full_name || 'User'}</h2>
                <p className="text-sm text-theme-ruby">{user.email}</p>
              </div>
              <nav className="space-y-2">
                {['My Orders', 'Saved Medicines', 'Prescriptions', 'Settings'].map((item, idx) => (
                  <button key={idx} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${idx === 0 ? 'bg-theme-scarlet text-theme-almond' : 'text-theme-ruby hover:bg-white/50'}`}>
                    {idx === 0 && <Package size={18} />} {idx === 1 && <Heart size={18} />} {idx === 2 && <FileText size={18} />} {idx === 3 && <Settings size={18} />}
                    {item}
                  </button>
                ))}
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors mt-4 border-t border-theme-pearl">
                   <LogOut size={18} /> Sign Out
                </button>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-theme-almond mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[{label: 'Total Orders', val: '24', icon: Package}, {label: 'Saved Items', val: '12', icon: Heart}, {label: 'Prescriptions', val: '5', icon: FileText}].map((stat, i) => (
                 <div key={i} className="bg-theme-almond p-6 rounded-[2rem] shadow-sm border border-theme-puce">
                    <div className="flex items-center gap-4">
                       <div className="bg-theme-ruby p-3 rounded-xl text-theme-almond"><stat.icon size={24} /></div>
                       <div><p className="text-sm text-theme-ruby">{stat.label}</p><h3 className="text-2xl font-bold text-theme-scarlet">{stat.val}</h3></div>
                    </div>
                 </div>
              ))}
            </div>
            <h2 className="text-xl font-bold text-theme-almond mb-4">Active Orders</h2>
            <OrderTracking />
          </div>
        </div>
      </div>
    </section>
  );
};
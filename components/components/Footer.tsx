import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-theme-scarlet text-theme-pearl pt-20 pb-10 mt-0 font-sans border-t border-theme-ruby">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-theme-puce to-theme-ruby rounded-lg flex items-center justify-center text-white font-bold">A</div>
              <h2 className="text-xl font-bold text-white">ArogyaNitya</h2>
            </div>
            <p className="text-theme-pearl/80 text-sm leading-relaxed mb-6">Eternal Health for Every Life. Your trusted partner for genuine medicines.</p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-theme-ruby p-2 rounded-full hover:bg-theme-puce transition-colors text-theme-pearl hover:text-white"><Icon size={18} /></a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-theme-pearl/80 text-sm">
              {['About Us', 'Our Doctors', 'Partner Pharmacy', 'Careers'].map((item) => <li key={item}><a href="#" className="hover:text-theme-almond transition-colors">{item}</a></li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-theme-pearl/80 text-sm">
              <li className="flex items-center gap-3"><Phone size={16} /> +1 (800) 123-4567</li>
              <li className="flex items-center gap-3"><Mail size={16} /> support@arogyanitya.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-theme-ruby pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-theme-pearl/60 text-sm">
          <p>© 2024 ArogyaNitya Healthcare. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-white">Privacy Policy</a><a href="#" className="hover:text-white">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
};
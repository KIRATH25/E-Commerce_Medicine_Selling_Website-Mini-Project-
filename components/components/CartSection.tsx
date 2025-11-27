import React, { useState } from 'react';
import { Trash2, Plus, Minus, CreditCard, ShieldCheck, Check, ArrowRight, ShoppingBag, Receipt } from 'lucide-react';
import { CartItem } from '../types';

interface CartSectionProps {
  items: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  onContinueShopping: () => void;
}

export const CartSection: React.FC<CartSectionProps> = ({ items, updateQuantity, removeFromCart, clearCart, onContinueShopping }) => {
  const [step, setStep] = useState<'cart' | 'processing' | 'invoice'>('cart');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping + (subtotal * 0.08);

  const handleCheckout = () => {
    setStep('processing');
    setTimeout(() => setStep('invoice'), 2500);
  };

  if (step === 'processing') return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-theme-scarlet font-sans">
       <div className="w-24 h-24 relative mb-8">
         <div className="absolute inset-0 rounded-full border-4 border-theme-ruby"></div>
         <div className="absolute inset-0 rounded-full border-4 border-theme-almond border-t-transparent animate-spin"></div>
         <div className="absolute inset-0 flex items-center justify-center"><CreditCard className="text-theme-almond animate-pulse" size={32} /></div>
       </div>
       <h2 className="text-2xl font-bold text-white mb-2">Processing Payment</h2>
    </div>
  );

  if (step === 'invoice') return (
    <div className="min-h-[80vh] py-16 bg-theme-scarlet font-sans flex items-center justify-center px-4">
      <div className="bg-theme-almond w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in-up border border-theme-puce">
        <div className="bg-theme-ruby p-8 text-center text-white relative">
           <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"><Check size={32} /></div>
           <h2 className="text-3xl font-bold mb-2">Order Successful!</h2>
           <p className="text-theme-pearl">Thank you for choosing ArogyaNitya</p>
        </div>
        <div className="p-8 text-theme-scarlet">
           <div className="flex justify-between items-start mb-8 border-b border-theme-pearl pb-6">
              <div><p className="text-xs uppercase font-bold text-theme-ruby">Order Number</p><p className="text-lg font-mono font-bold">#AN-8829-XJ</p></div>
              <div className="text-right"><p className="text-xs uppercase font-bold text-theme-ruby">Total Paid</p><p className="text-xl font-bold">₹{total.toFixed(2)}</p></div>
           </div>
           <div className="flex gap-4">
              <button onClick={() => { clearCart(); window.print(); }} className="flex-1 py-3 rounded-xl border border-theme-ruby text-theme-ruby font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"><Receipt size={18} />Invoice</button>
              <button onClick={() => { clearCart(); onContinueShopping(); }} className="flex-1 py-3 rounded-xl bg-theme-scarlet text-theme-almond font-bold hover:bg-theme-ruby transition-colors">Continue Shopping</button>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-theme-scarlet min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-theme-almond mb-8 flex items-center gap-3"><ShoppingBag /> Your Shopping Cart</h1>
        {items.length === 0 ? (
           <div className="text-center py-24 bg-theme-ruby/50 rounded-[2rem] border border-dashed border-theme-puce">
              <h3 className="text-xl font-bold text-white mb-2">Your cart is empty</h3>
              <button onClick={onContinueShopping} className="mt-6 px-8 py-3 rounded-full bg-theme-puce text-white font-bold hover:bg-theme-pearl hover:text-theme-scarlet transition-colors">Start Shopping</button>
           </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 bg-theme-almond rounded-[2rem] shadow-sm overflow-hidden border border-theme-puce p-6">
               {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-6 mb-6 last:mb-0 border-b border-theme-pearl pb-6 last:border-0">
                     <div className="w-20 h-20 bg-white rounded-xl overflow-hidden border border-theme-pearl"><img src={item.image} className="w-full h-full object-cover" /></div>
                     <div className="flex-1">
                        <h3 className="font-bold text-lg text-theme-scarlet">{item.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                           <div className="flex items-center gap-3 bg-white rounded-lg p-1 border border-theme-pearl">
                              <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-[#121212] hover:bg-gray-100 rounded"><Minus size={12} /></button>
                              <span className="font-bold text-theme-scarlet w-4 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-[#121212] hover:bg-gray-100 rounded"><Plus size={12} /></button>
                           </div>
                           <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-full"><Trash2 size={18} /></button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="w-full lg:w-96 bg-theme-almond rounded-[2rem] p-6 shadow-sm border border-theme-puce h-fit">
               <h3 className="font-bold text-lg text-theme-scarlet mb-6">Summary</h3>
               <div className="space-y-3 mb-6 text-theme-ruby font-medium">
                  <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span></div>
                  <div className="flex justify-between pt-4 border-t border-theme-pearl text-xl font-bold text-theme-scarlet"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
               </div>
               <button onClick={handleCheckout} className="w-full bg-theme-scarlet text-theme-almond py-4 rounded-xl font-bold text-lg hover:bg-theme-ruby transition-colors shadow-xl flex items-center justify-center gap-2">Checkout <ArrowRight size={18} /></button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
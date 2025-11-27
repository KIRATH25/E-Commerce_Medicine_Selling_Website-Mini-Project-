import React, { useState } from 'react';
import { Clock, Star, Calendar, X, QrCode, CheckCircle } from 'lucide-react';
import { Doctor } from '../types';

const doctors: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Johnson', specialization: 'Cardiologist', experience: 12, image: 'https://images.unsplash.com/photo-1559839734-2b71ea86b48e?auto=format&fit=crop&w=400&q=80', rating: 4.9, available: true },
  { id: '2', name: 'Dr. Michael Chen', specialization: 'Pediatrician', experience: 8, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80', rating: 4.8, available: true },
  { id: '3', name: 'Dr. Emily Davis', specialization: 'Dermatologist', experience: 15, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80', rating: 4.9, available: false },
];

export const DoctorSection: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleBookClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsBooked(false);
    setSelectedDate('');
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsBooked(true);
    }, 1500);
  };

  return (
    <section className="py-20 bg-theme-ruby/30 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Consult Top Specialists</h2>
          <p className="text-lg text-theme-pearl max-w-2xl mx-auto">Skip the waiting room. Connect with experienced doctors instantly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-theme-almond rounded-[2rem] border border-theme-puce shadow-lg overflow-hidden group hover:border-white transition-all duration-300">
              <div className="p-6 flex items-start gap-4">
                <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-2xl object-cover shadow-md border border-theme-pearl" />
                <div>
                  <h3 className="font-bold text-lg text-theme-scarlet">{doctor.name}</h3>
                  <p className="text-theme-ruby font-medium text-sm mb-1">{doctor.specialization}</p>
                  <p className="text-theme-ruby/70 text-xs">{doctor.experience} Years Exp.</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-theme-scarlet">{doctor.rating}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button 
                  onClick={() => handleBookClick(doctor)}
                  className="w-full bg-theme-scarlet hover:bg-theme-ruby text-theme-almond py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Book Appointment
                </button>
              </div>
              
              <div className="px-6 py-3 bg-white/50 border-t border-theme-pearl flex items-center justify-between text-xs text-theme-ruby">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  Available Today
                </div>
                <span className="font-bold text-theme-scarlet">₹500 / Consult</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-theme-scarlet/80 backdrop-blur-sm animate-fade-in">
          <div className={`w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${isBooked ? 'bg-theme-pearl' : 'bg-theme-almond'}`}>
            <div className="p-6 bg-theme-scarlet text-theme-almond relative">
              <button onClick={() => setSelectedDoctor(null)} className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-1">{isBooked ? 'Appointment Confirmed!' : 'Book Appointment'}</h3>
              <p className="text-theme-pearl text-sm">with {selectedDoctor.name}</p>
            </div>

            <div className="p-8">
              {!isBooked ? (
                <form onSubmit={handleConfirmBooking} className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-theme-ruby uppercase">Patient Name</label>
                     <input required type="text" placeholder="John Doe" className="w-full p-3 bg-white rounded-xl border border-theme-pearl outline-none text-[#121212]" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-xs font-bold text-theme-ruby uppercase">Reason</label>
                      <textarea required rows={3} className="w-full p-3 bg-white rounded-xl border border-theme-pearl outline-none text-[#121212] resize-none"></textarea>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-theme-ruby uppercase">Preferred Date</label>
                      <input required type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full p-3 bg-white rounded-xl border border-theme-pearl outline-none text-[#121212]" />
                   </div>
                  <button type="submit" disabled={isLoading} className="w-full mt-6 bg-theme-scarlet text-theme-almond py-4 rounded-xl font-bold text-lg hover:bg-theme-ruby transition-colors shadow-xl">
                    {isLoading ? 'Processing...' : 'Confirm Booking'}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-theme-scarlet mb-6 shadow-sm">
                    <CheckCircle size={40} />
                  </div>
                  <div className="bg-white/50 p-6 rounded-2xl border border-dashed border-theme-scarlet w-full mb-6">
                    <div className="flex justify-center mb-4"><QrCode size={100} className="text-theme-scarlet" /></div>
                    <h4 className="font-bold text-lg text-theme-scarlet">{selectedDoctor.name}</h4>
                    <p className="text-theme-ruby">{selectedDate}</p>
                  </div>
                  <button onClick={() => setSelectedDoctor(null)} className="px-8 py-3 rounded-full bg-theme-scarlet text-theme-almond font-bold">Close</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
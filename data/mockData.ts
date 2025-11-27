
import { Product } from '../types';

const medicalImages = [
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80', // Pills
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b5?auto=format&fit=crop&w=400&q=80', // Bottle
  'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=400&q=80', // Syrup bottle
  'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&q=80', // Lab
  'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=400&q=80', // Thermometer
  'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?auto=format&fit=crop&w=400&q=80', // Syrup
  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80', // Blister
  'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80', // Capsules
];

const getImage = (index: number) => medicalImages[index % medicalImages.length];

export const products: Product[] = [
  // Pain & Fever
  { id: '1', name: 'Paracetamol', category: 'Pain & Fever', price: 45.00, rating: 4.8, reviews: 1240, image: getImage(0), prescriptionRequired: false, form: 'Tablet', dosage: '500mg' },
  { id: '2', name: 'Crocin 650', category: 'Pain & Fever', price: 65.00, rating: 4.7, reviews: 850, image: getImage(6), prescriptionRequired: false, form: 'Tablet', dosage: '650mg' },
  { id: '3', name: 'Calpol 500', category: 'Pain & Fever', price: 55.00, rating: 4.9, reviews: 2100, image: getImage(0), prescriptionRequired: false, form: 'Tablet', dosage: '500mg' },
  { id: '4', name: 'Combiflam', category: 'Pain & Fever', price: 85.00, rating: 4.6, reviews: 560, image: getImage(6), prescriptionRequired: false, form: 'Tablet', dosage: '400mg' },
  { id: '5', name: 'Ibuprofen', category: 'Pain & Fever', price: 70.00, rating: 4.5, reviews: 320, image: getImage(0), prescriptionRequired: false, form: 'Tablet', dosage: '400mg' },
  { id: '6', name: 'Ibugesic Plus', category: 'Pain & Fever', price: 110.00, rating: 4.7, reviews: 410, image: getImage(2), prescriptionRequired: false, form: 'Syrup', dosage: '100ml' },
  { id: '7', name: 'Dolo 650', category: 'Pain & Fever', price: 60.00, rating: 4.9, reviews: 5600, image: getImage(6), prescriptionRequired: false, form: 'Tablet', dosage: '650mg' },
  { id: '8', name: 'Volini Gel', category: 'Pain & Fever', price: 185.00, rating: 4.6, reviews: 890, image: getImage(1), prescriptionRequired: false, form: 'Other', dosage: '30g' },
  
  // Cold, Cough & Flu
  { id: '21', name: 'Cetrizine', category: 'Cold, Cough & Flu', price: 40.00, rating: 4.6, reviews: 340, image: getImage(6), prescriptionRequired: false, form: 'Tablet', dosage: '10mg' },
  { id: '22', name: 'Benadryl', category: 'Cold, Cough & Flu', price: 135.00, rating: 4.5, reviews: 980, image: getImage(2), prescriptionRequired: false, form: 'Syrup', dosage: '150ml' },
  { id: '23', name: 'Ascoril LS', category: 'Cold, Cough & Flu', price: 160.00, rating: 4.7, reviews: 450, image: getImage(5), prescriptionRequired: true, form: 'Syrup', dosage: '100ml' },
  { id: '24', name: 'Vicks Vaporub', category: 'Cold, Cough & Flu', price: 110.00, rating: 4.9, reviews: 3200, image: getImage(1), prescriptionRequired: false, form: 'Other', dosage: '50g' },
  { id: '25', name: 'Montair-LC', category: 'Cold, Cough & Flu', price: 210.00, rating: 4.8, reviews: 670, image: getImage(6), prescriptionRequired: true, form: 'Tablet', dosage: '10mg' },
  { id: '26', name: 'Otrivin Nasal', category: 'Cold, Cough & Flu', price: 95.00, rating: 4.6, reviews: 540, image: getImage(1), prescriptionRequired: false, form: 'Other', dosage: '10ml' },
  { id: '27', name: 'Honitus', category: 'Cold, Cough & Flu', price: 115.00, rating: 4.5, reviews: 430, image: getImage(5), prescriptionRequired: false, form: 'Syrup', dosage: '100ml' },

  // Digestive
  { id: '41', name: 'Eno Fruit Salt', category: 'Digestive', price: 30.00, rating: 4.8, reviews: 5000, image: getImage(1), prescriptionRequired: false, form: 'Powder', dosage: '5g' },
  { id: '42', name: 'Digene', category: 'Digestive', price: 85.00, rating: 4.7, reviews: 1200, image: getImage(5), prescriptionRequired: false, form: 'Syrup', dosage: '200ml' },
  { id: '43', name: 'Pantoprazole 40', category: 'Digestive', price: 80.00, rating: 4.6, reviews: 890, image: getImage(0), prescriptionRequired: true, form: 'Tablet', dosage: '40mg' },
  { id: '44', name: 'Omez', category: 'Digestive', price: 90.00, rating: 4.7, reviews: 1500, image: getImage(7), prescriptionRequired: true, form: 'Capsule', dosage: '20mg' },
  { id: '45', name: 'Isabgol', category: 'Digestive', price: 140.00, rating: 4.5, reviews: 340, image: getImage(1), prescriptionRequired: false, form: 'Powder', dosage: '100g' },

  // Vitamins
  { id: '61', name: 'Limcee Vit C', category: 'Vitamins', price: 45.00, rating: 4.8, reviews: 2100, image: getImage(0), prescriptionRequired: false, form: 'Tablet', dosage: '500mg' },
  { id: '62', name: 'Zincovit', category: 'Vitamins', price: 120.00, rating: 4.7, reviews: 1800, image: getImage(0), prescriptionRequired: false, form: 'Tablet', dosage: 'Multivitamin' },
  { id: '63', name: 'Shelcal 500', category: 'Vitamins', price: 145.00, rating: 4.8, reviews: 1500, image: getImage(1), prescriptionRequired: false, form: 'Tablet', dosage: '500mg' },
  { id: '64', name: 'Neurobion Forte', category: 'Vitamins', price: 95.00, rating: 4.6, reviews: 980, image: getImage(0), prescriptionRequired: false, form: 'Tablet', dosage: 'Complex' },
  { id: '65', name: 'Revital H', category: 'Vitamins', price: 250.00, rating: 4.5, reviews: 2200, image: getImage(7), prescriptionRequired: false, form: 'Capsule', dosage: 'Daily' },

  // First Aid
  { id: '76', name: 'Band-Aid', category: 'First Aid', price: 25.00, rating: 4.9, reviews: 5000, image: getImage(3), prescriptionRequired: false, form: 'Other', dosage: '10 pack' },
  { id: '77', name: 'Dettol Liquid', category: 'First Aid', price: 130.00, rating: 4.9, reviews: 4500, image: getImage(2), prescriptionRequired: false, form: 'Other', dosage: '200ml' },
  { id: '78', name: 'Betadine Ointment', category: 'First Aid', price: 75.00, rating: 4.7, reviews: 890, image: getImage(1), prescriptionRequired: false, form: 'Other', dosage: '20g' },
  { id: '79', name: 'Soframycin', category: 'First Aid', price: 60.00, rating: 4.6, reviews: 1200, image: getImage(1), prescriptionRequired: false, form: 'Other', dosage: '30g' },
  { id: '80', name: 'Digital Thermometer', category: 'First Aid', price: 350.00, rating: 4.8, reviews: 850, image: getImage(4), prescriptionRequired: false, form: 'Device', dosage: 'N/A' },

  // Baby Care
  { id: '141', name: 'Pampers Diapers', category: 'Baby Care', price: 499.00, rating: 4.8, reviews: 3000, image: getImage(3), prescriptionRequired: false, form: 'Other', dosage: 'L - 50 count' },
  { id: '142', name: 'Colicaid Drops', category: 'Baby Care', price: 95.00, rating: 4.7, reviews: 560, image: getImage(2), prescriptionRequired: false, form: 'Syrup', dosage: '15ml' },
  { id: '143', name: 'Cerelac Wheat', category: 'Baby Care', price: 180.00, rating: 4.9, reviews: 2100, image: getImage(1), prescriptionRequired: false, form: 'Powder', dosage: '300g' },
  
  // Women's Care
  { id: '151', name: 'Whisper Ultra', category: 'Women Care', price: 210.00, rating: 4.8, reviews: 4500, image: getImage(3), prescriptionRequired: false, form: 'Other', dosage: 'XL - 30 count' },
  { id: '152', name: 'Meftal Spas', category: 'Women Care', price: 75.00, rating: 4.7, reviews: 980, image: getImage(6), prescriptionRequired: false, form: 'Tablet', dosage: '10 count' },
  
  // Diabetes & BP
  { id: '161', name: 'Metformin 500', category: 'Diabetes', price: 65.00, rating: 4.6, reviews: 1200, image: getImage(0), prescriptionRequired: true, form: 'Tablet', dosage: '500mg' },
  { id: '162', name: 'Accu-Chek Active', category: 'Diabetes', price: 650.00, rating: 4.7, reviews: 890, image: getImage(4), prescriptionRequired: false, form: 'Device', dosage: 'Kit' },
  { id: '163', name: 'Telmisartan 40', category: 'Diabetes', price: 95.00, rating: 4.6, reviews: 760, image: getImage(0), prescriptionRequired: true, form: 'Tablet', dosage: '40mg' },
  
  // Skin Care
  { id: '106', name: 'Nivea Soft', category: 'Skin Care', price: 150.00, rating: 4.8, reviews: 3200, image: getImage(1), prescriptionRequired: false, form: 'Other', dosage: '200ml' },
  { id: '107', name: 'Candid Powder', category: 'Skin Care', price: 110.00, rating: 4.7, reviews: 890, image: getImage(1), prescriptionRequired: false, form: 'Powder', dosage: '100g' },
  { id: '108', name: 'Aloe Vera Gel', category: 'Skin Care', price: 120.00, rating: 4.6, reviews: 1500, image: getImage(1), prescriptionRequired: false, form: 'Other', dosage: '150g' },
];

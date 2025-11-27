
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  prescriptionRequired: boolean;
  form: 'Tablet' | 'Syrup' | 'Injection' | 'Capsule' | 'Powder' | 'Device' | 'Other';
  dosage: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  image: string;
  rating: number;
  available: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  SHOP = 'SHOP',
  DOCTORS = 'DOCTORS',
  PROFILE = 'PROFILE',
  CART = 'CART'
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  prescriptionRequired: boolean | null;
}

export interface CartItem extends Product {
  quantity: number;
}

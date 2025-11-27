
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
  { id: '1', name: 'Paracetamol', category: 'Pain & Fever', price: 45.00, rating: 4.8, reviews: 1240, image: 'https://www.biofieldpharma.com/wp-content/uploads/2023/06/BIOFIELD-PYREGEM-TAB-1-scaled.jpg', prescriptionRequired: false, form: 'Tablet', dosage: '500mg' },
  { id: '2', name: 'Dolo 650', category: 'Pain & Fever', price: 40.00, rating: 4.9, reviews: 9800, image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ko6rsu9xwrdb7hrmmszr.jpg', prescriptionRequired: false, form: 'Tablet', dosage: '650mg' },
  { id: '3', name: 'Crocin Advance', category: 'Pain & Fever', price: 35.00, rating: 4.7, reviews: 6500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPzNuE00qdvAJOfJf22MWzSqw-wxHYU-E1g&s', prescriptionRequired: false, form: 'Tablet', dosage: '500mg' },
  { id: '4', name: 'Ibugesic Plus', category: 'Pain & Fever', price: 68.00, rating: 4.6, reviews: 2440, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMp0ELTO5p8eQ5OGZTwH59drno_g8jIwnsCg&s', prescriptionRequired: false, form: 'Syrup', dosage: '400mg' },
  { id: '5', name: 'Calpol 250 Suspension', category: 'Pain & Fever', price: 58.00, rating: 4.8, reviews: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92XaO2HOAzA0cq_vVRyXdpawkXOaHfjCxeA&s', prescriptionRequired: false, form: 'Syrup', dosage: '400mg' },
  { id: '6', name: 'Nimesulide Tablets', category: 'Pain & Fever', price: 48.00, rating: 4.3, reviews: 2100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRko8DTks8cDWm0sGafS0HINlqrMSIRogClVA&s', prescriptionRequired: false, form: 'Tablet', dosage: '100ml' },
  { id: '7', name: 'Combiflam', category: 'Pain & Fever', price: 50.00, rating: 4.5, reviews: 7200, image: 'https://images.jdmagicbox.com/quickquotes/images_main/sanofi-combiflam-plus-tablet-650-mg-4-tblt-250148762-bnejowtm.jpg', prescriptionRequired: false, form: 'Tablet', dosage: '650mg' },
  { id: '8', name: 'Volini Gel', category: 'Pain & Fever', price: 185.00, rating: 4.6, reviews: 890, image: 'https://assets.truemeds.in/Images/ProductImage/TM-GEEL1-001110/volini-gel-100gm_volini-gel-100gm--TM-GEEL1-001110_1.png', prescriptionRequired: false, form: 'Other', dosage: '30g' },
  { id: '9', name: 'Diclofenac Gel', category: 'Pain & Fever', price: 92.00, rating: 4.4, reviews: 1600, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniwMBTfb3QdoW-XLCrM5DprGC-Ql_ycHOcQ&s', prescriptionRequired: false, form: 'Other', dosage: '30g' },
  { id: '10', name: 'Aspirin 75mg', category: 'Pain & Fever', price: 18.00, rating: 4.2, reviews: 1100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIa28f5N7BM0_KQtqcUZxXgQyRiXaekZq2A&s', prescriptionRequired: false, form: 'Tablet', dosage: '30g' },
  
  
  
  // Cold, Cough & Flu
  { id: '21', name: 'Cetrizine', category: 'Cold, Cough & Flu', price: 40.00, rating: 4.6, reviews: 340, image: 'https://tiimg.tistatic.com/fp/1/007/645/cetirizine-tablets-317.jpg', prescriptionRequired: false, form: 'Tablet', dosage: '10mg' },
  { id: '22', name: 'Benadryl', category: 'Cold, Cough & Flu', price: 135.00, rating: 4.5, reviews: 980, image: 'https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg', prescriptionRequired: false, form: 'Syrup', dosage: '150ml' },
  { id: '23', name: 'Ascoril LS', category: 'Cold, Cough & Flu', price: 160.00, rating: 4.7, reviews: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCH8GsV_90jGKrGbGgjl9v-DH3sO2z9FYaw&s', prescriptionRequired: true, form: 'Syrup', dosage: '100ml' },
  { id: '24', name: 'Vicks Vaporub', category: 'Cold, Cough & Flu', price: 110.00, rating: 4.9, reviews: 3200, image: 'https://www.verywellhealth.com/thmb/3yrLqcoNSoPQGK4IEs5bu_R0oQI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-458642093-2d9d6f6855014ed0bf1676b7f4eaff1f.jpg', prescriptionRequired: false, form: 'Other', dosage: '50g' },
  { id: '25', name: 'Montair-LC', category: 'Cold, Cough & Flu', price: 210.00, rating: 4.8, reviews: 670, image: 'https://animeal.in/cdn/shop/files/MONTAIR-LC-TABLET-Animeal-23771049754685.webp?v=1750388833&width=1445', prescriptionRequired: true, form: 'Tablet', dosage: '10mg' },
  { id: '26', name: 'Otrivin Nasal', category: 'Cold, Cough & Flu', price: 95.00, rating: 4.6, reviews: 540, image: 'https://m.media-amazon.com/images/I/71Jn-Agg3hL._AC_UF1000,1000_QL80_.jpg', prescriptionRequired: false, form: 'Other', dosage: '10ml' },
  { id: '27', name: 'Honitus', category: 'Cold, Cough & Flu', price: 115.00, rating: 4.5, reviews: 430, image: 'https://rukminim2.flixcart.com/image/480/640/kn22m4w0/ayurvedic/e/l/c/honitus-ayurvedic-cough-syrup-instant-relief-from-cough-cold-200-original-imagftezkh6vandn.jpeg?q=90', prescriptionRequired: false, form: 'Syrup', dosage: '100ml' },

  // Digestive
  { id: '41', name: 'Eno Fruit Salt', category: 'Digestive', price: 30.00, rating: 4.8, reviews: 5000, image: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-sachet-regular.png?auto=format', prescriptionRequired: false, form: 'Powder', dosage: '5g' },
  { id: '42', name: 'Digene', category: 'Digestive', price: 85.00, rating: 4.7, reviews: 1200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHW6QWsYG3bVwv2QISQoSwMjpvJpJhWwJRAQ&s', prescriptionRequired: false, form: 'Syrup', dosage: '200ml' },
  { id: '43', name: 'Pantoprazole 40', category: 'Digestive', price: 80.00, rating: 4.6, reviews: 890, image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/SE/SL/PG/150661301/pentoroz-40-tab.jpeg', prescriptionRequired: true, form: 'Tablet', dosage: '40mg' },
  { id: '44', name: 'Omez', category: 'Digestive', price: 90.00, rating: 4.7, reviews: 1500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZY30hTr8xnV_0zDE1EaMQG9FahxcPyNUK8Q&s', prescriptionRequired: true, form: 'Capsule', dosage: '20mg' },
  { id: '45', name: 'Isabgol', category: 'Digestive', price: 140.00, rating: 4.5, reviews: 340, image: 'https://m.media-amazon.com/images/I/61darJJuf6L._AC_UF350,350_QL80_.jpg', prescriptionRequired: false, form: 'Powder', dosage: '100g' },

  // Vitamins
  { id: '61', name: 'Limcee Vit C', category: 'Vitamins', price: 45.00, rating: 4.8, reviews: 2100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SUX-FCYFvd9ja1mhZoLxL7Di7OXv4oYBWw&s', prescriptionRequired: false, form: 'Tablet', dosage: '500mg' },
  { id: '62', name: 'Zincovit', category: 'Vitamins', price: 120.00, rating: 4.7, reviews: 1800, image: 'https://images.apollo247.in/pub/media/catalog/product/Z/I/ZIN0036_1_1.jpg', prescriptionRequired: false, form: 'Tablet', dosage: 'Multivitamin' },
  { id: '63', name: 'Shelcal 500', category: 'Vitamins', price: 145.00, rating: 4.8, reviews: 1500, image: 'https://www.onebharatpharmacy.com/uploads/product/main/1742812093_624_0.jpeg', prescriptionRequired: false, form: 'Tablet', dosage: '500mg' },
  { id: '64', name: 'Neurobion Forte', category: 'Vitamins', price: 95.00, rating: 4.6, reviews: 980, image: 'https://animeal.in/cdn/shop/files/NEUROBION-FORTE-TABLET-Animeal-23767977066557.webp?v=1750388873&width=1445', prescriptionRequired: false, form: 'Tablet', dosage: 'Complex' },
  { id: '65', name: 'Revital H', category: 'Vitamins', price: 250.00, rating: 4.5, reviews: 2200, image: 'https://assets.truemeds.in/Images/ProductImage/TM-CACR1-013491/revital-h-men-capsule-10_1.png?width=320', prescriptionRequired: false, form: 'Capsule', dosage: 'Daily' },

  // First Aid
  { id: '76', name: 'Band-Aid', category: 'First Aid', price: 25.00, rating: 4.9, reviews: 5000, image: 'https://rukminim2.flixcart.com/image/300/300/xif0q/adhesive-band-aid/8/u/c/waterproof-bandage-for-children-adults-100srtips-jar-1-bright-original-imahgb9ymbqxuasc.jpeg', prescriptionRequired: false, form: 'Other', dosage: '10 pack' },
  { id: '77', name: 'Dettol Liquid', category: 'First Aid', price: 130.00, rating: 4.9, reviews: 4500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQEX2TRZ3ezTfxe8uGCEfTbBmFSv0NvGobA&s', prescriptionRequired: false, form: 'Other', dosage: '200ml' },
  { id: '78', name: 'Betadine Ointment', category: 'First Aid', price: 75.00, rating: 4.7, reviews: 890, image: 'https://drugstreet.in/wp-content/uploads/2023/11/1000043409.jpg', prescriptionRequired: false, form: 'Other', dosage: '20g' },
  { id: '79', name: 'Soframycin', category: 'First Aid', price: 60.00, rating: 4.6, reviews: 1200, image: 'https://assets.truemeds.in/Images/ProductImage/TM-COOM1-001986/soframycin-skin-cream-100gm_soframycin-skin-cream-100gm--TM-COOM1-001986_1.png', prescriptionRequired: false, form: 'Other', dosage: '30g' },
  { id: '80', name: 'Digital Thermometer', category: 'First Aid', price: 350.00, rating: 4.8, reviews: 850, image: 'https://easycareglobal.com/cdn/shop/files/easycare-digital-thermometer-product-view_700x700.jpg?v=1758106012', prescriptionRequired: false, form: 'Device', dosage: 'N/A' },

  // Baby Care
  { id: '141', name: 'Pampers Diapers', category: 'Baby Care', price: 499.00, rating: 4.8, reviews: 3000, image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/diaper/7/m/k/l-all-round-protection-l-64-pants-large-size-baby-diapers-64-original-imah9c9vewurpbgy.jpeg?q=90', prescriptionRequired: false, form: 'Other', dosage: 'L - 50 count' },
  { id: '142', name: 'Colicaid Drops', category: 'Baby Care', price: 95.00, rating: 4.7, reviews: 560, image: 'https://meds.myupchar.com/127551/1.jpg', prescriptionRequired: false, form: 'Syrup', dosage: '15ml' },
  { id: '143', name: 'Cerelac Wheat', category: 'Baby Care', price: 180.00, rating: 4.9, reviews: 2100, image: 'https://www.quickpantry.in/cdn/shop/files/Cerelac_Baby_Cereal_-_Wheat_Rice_Mixed_Veg_-_From_10_to_24_Months_300_g_Quick_Pantry.webp?crop=center&height=1200&v=1743793036&width=1200', prescriptionRequired: false, form: 'Powder', dosage: '300g' },
  
  // Women's Care
  { id: '151', name: 'Whisper Ultra', category: 'Women Care', price: 210.00, rating: 4.8, reviews: 4500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3YqigrB_oiwOy5RPNzYhDjThGG3zEOMTCQQ&s', prescriptionRequired: false, form: 'Other', dosage: 'XL - 30 count' },
  { id: '152', name: 'Meftal Spas', category: 'Women Care', price: 75.00, rating: 4.7, reviews: 980, image: 'https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Meftal+Spas+-+Uses-+Side+Effects-+Composition-+Dosage+-+Price+10s-1920w.jpg', prescriptionRequired: false, form: 'Tablet', dosage: '10 count' },
  
  // Diabetes & BP
  { id: '161', name: 'Metformin 500', category: 'Diabetes', price: 65.00, rating: 4.6, reviews: 1200, image: 'https://images.apollo247.in/pub/media/catalog/product/o/k/oka0007_3.jpg', prescriptionRequired: true, form: 'Tablet', dosage: '500mg' },
  { id: '162', name: 'Accu-Chek Active', category: 'Diabetes', price: 650.00, rating: 4.7, reviews: 890, image: 'https://m.media-amazon.com/images/I/614kGUJTB8L._AC_UF1000,1000_QL80_.jpg', prescriptionRequired: false, form: 'Device', dosage: 'Kit' },
  { id: '163', name: 'Telmisartan 40', category: 'Diabetes', price: 95.00, rating: 4.6, reviews: 760, image: 'https://www.scottmorrison.in/wp-content/uploads/2022/11/Telmosis40.jpg', prescriptionRequired: true, form: 'Tablet', dosage: '40mg' },
  
  // Skin Care
  { id: '106', name: 'Nivea Soft', category: 'Skin Care', price: 150.00, rating: 4.8, reviews: 3200, image: 'https://rukminim2.flixcart.com/image/480/480/xif0q/moisturizer-cream/y/v/r/500-soft-moisturizing-cream-nivea-cream-original-imagryybydjvujhz.jpeg?q=90', prescriptionRequired: false, form: 'Other', dosage: '200ml' },
  { id: '107', name: 'Candid Powder', category: 'Skin Care', price: 110.00, rating: 4.7, reviews: 890, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0x3NZX45oBC9MXCKGvEFQhQAIEc-weEw52Q&s', prescriptionRequired: false, form: 'Powder', dosage: '100g' },
  { id: '108', name: 'Aloe Vera Gel', category: 'Skin Care', price: 120.00, rating: 4.6, reviews: 1500, image: 'https://thefaceshop.in/cdn/shop/articles/Aloe-gel-hacks.jpg?v=1690191058', prescriptionRequired: false, form: 'Other', dosage: '150g' },
];

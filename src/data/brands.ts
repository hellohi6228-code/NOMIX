import { BrandData } from '../types';

export const BRANDS: BrandData[] = [
  {
    id: 'umiya',
    name: 'Umiya',
    subtitle: 'Fresh Sushi & Live Robata Grill',
    cuisine: 'All You Can Eat Japanese Dining',
    locationCount: '20+ Locations',
    states: ['Texas', 'Nevada', 'New Jersey', 'New York', 'Florida', 'Tennessee', 'Virginia'],
    status: 'Open Nationwide',
    image: 'assets/food/umiya_sushi.jpg',
    foodImages: [
      'assets/food/umiya_sushi.jpg',
      'assets/food/umiya_wagyu.jpg',
      'assets/food/umiya_platter.webp',
      'assets/food/umiya_sashimi.webp',
      'assets/food/umiya_rolls.webp'
    ],
    highlights: [
      'Daily sliced sashimi',
      'A5 Wagyu torched bites',
      'Live teppan sizzle',
      'Custom rolls made fresh'
    ],
    websiteUrl: 'https://umiyatexas.com/',
    description: 'Fresh sliced bluefin tuna, salmon sashimi, warm garlic edamame, sizzling teppanyaki flame shows and hand crafted cocktails'
  },
  {
    id: 'surfing-crab',
    name: 'Surfing Crab',
    subtitle: 'Hot Cajun Seafood Boils',
    cuisine: 'Coastal Seafood Feast',
    locationCount: '10 Locations',
    states: ['Texas', 'California', 'Delaware'],
    status: 'Open',
    image: 'assets/food/surfing_dish_boil.jpg',
    foodImages: [
      'assets/food/surfing_dish_boil.jpg',
      'assets/food/surfing_dish_combo.jpg',
      'assets/food/surfing_dish_crablegs.jpg',
      'assets/food/crawfish_crab.jpg'
    ],
    highlights: [
      'Fresh crab clusters',
      'Signature garlic butter boil',
      'Sweet yellow corn',
      'Spicy cajun kick'
    ],
    websiteUrl: 'https://surfingcrabtx.com/',
    description: 'Steaming king crab clusters, wild Gulf crawfish and jumbo shrimp tossed in signature warm garlic butter with sweet corn'
  },
  {
    id: 'hibachi-buffet',
    name: 'Hibachi Grill & Supreme Buffet',
    subtitle: 'Endless Hibachi & Fresh Sushi Counter',
    cuisine: 'Live Teppanyaki & Fresh Buffet',
    locationCount: '7 Locations',
    states: ['Texas', 'Connecticut', 'New Jersey', 'New York'],
    status: 'Open',
    image: 'assets/food/hibachi_flame.jpg',
    foodImages: [
      'assets/food/hibachi_flame.jpg',
      'assets/food/dim_sum.jpg',
      'assets/food/asian_noodles.jpg'
    ],
    highlights: [
      'Live flat top grill',
      'Chilled raw seafood',
      'Fresh daily sushi',
      'Warm glazed honey ribs'
    ],
    websiteUrl: 'https://hibachigrillsupremebuffettx.com/',
    description: 'Over 300 daily fresh recipes, live flat top teppan flame shows, chilled oysters, fresh hand rolled sushi and carved meats'
  },
  {
    id: 'matcha-zen',
    name: 'Matcha Zen',
    subtitle: 'Ceremonial Matcha & Daily Rituals',
    cuisine: 'Organic Uji Matcha Bar',
    locationCount: 'Houston Oct 2026',
    states: ['Texas'],
    status: 'Opening Soon',
    image: 'assets/food/matcha_drink.jpg',
    foodImages: [
      'assets/food/matcha_drink.jpg',
      'assets/food/matcha_gelato.jpg'
    ],
    highlights: [
      'Pure ceremonial grade',
      'Seven gelato intensities',
      'Fresh baked pastries',
      'Mindful matcha moments'
    ],
    description: 'Whisked ceremonial Uji green tea, silky whipped foam, iced oat cloud lattes and house churned matcha gelato'
  },
  {
    id: 'chilin',
    name: 'Chilin',
    subtitle: 'Hand Pulled Ramen & Izakaya Bites',
    cuisine: 'Ramen & Social Plates',
    locationCount: 'Houston Oct 2026',
    states: ['Texas'],
    status: 'Opening Soon',
    image: 'assets/food/chilin_ramen.jpg',
    foodImages: [
      'assets/food/chilin_ramen.jpg',
      'assets/food/dim_sum.jpg',
      'assets/food/asian_noodles.jpg'
    ],
    highlights: [
      'Sixteen hour broth',
      'Hand pulled noodles',
      'Crispy pan fried gyoza',
      'Craft highball cocktails'
    ],
    description: 'Rich sixteen hour simmered broth, springy hand pulled noodles, tender chashu pork, crispy gyoza and draft Japanese beer'
  },
  {
    id: 'viva-refresh',
    name: 'Viva Refresh',
    subtitle: 'Fresh Fruit Coolers & Cold Pressed Sips',
    cuisine: 'Real Fruit Coolers',
    locationCount: 'Houston Flagship',
    states: ['Texas'],
    status: 'Open',
    image: 'assets/food/tropical_drink.jpg',
    foodImages: [
      'assets/food/tropical_drink.jpg'
    ],
    highlights: [
      'Ripe fruit purees',
      'Fresh squeezed citrus',
      'Brewed loose leaf tea',
      'Energizing hydration'
    ],
    description: 'Chilled ripe mango purees, freshly squeezed Meyer lemons, crushed passionfruit and slow brewed botanical iced teas'
  }
];

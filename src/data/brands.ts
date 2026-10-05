import { BrandData } from '../types';
import type { Lang } from '../i18n';

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
      'assets/brands/umiya-sushi-bar.jpg',
      'assets/brands/umiya-teppan.jpg',
      'assets/brands/umiya-wagyu.jpg',
      'assets/brands/umiya-rolls.jpg',
      'assets/brands/umiya-blossoms.jpg',
      'assets/brands/umiya-sushi-boat.jpg',
      'assets/brands/umiya-bento.jpg',
      'assets/brands/umiya-astronaut.jpg',
      'assets/brands/umiya-dining.jpg',
      'assets/brands/umiya-exterior.jpg',
      'assets/brands/umiya-lounge.jpg'
    ],
    highlights: [
      'Lobster King Roll',
      'Amazing Tuna Roll',
      'A5 Wagyu Sando',
      'Cheese Baked Lobster',
      'Toro & Uni Nigiri'
    ],
    websiteUrl: 'https://umiyatexas.com/',
    description: 'Fresh sliced bluefin tuna, salmon sashimi, warm garlic edamame, sizzling teppanyaki flame shows and hand crafted cocktails',
    zh: {
      subtitle: '新鲜寿司 · 现烤炉端烧',
      description: '现切蓝鳍金枪鱼、三文鱼刺身、蒜香毛豆、滋滋作响的铁板火焰秀与手调鸡尾酒',
      highlights: ['龙虾王卷', '惊艳金枪鱼卷', 'A5 和牛三明治', '芝士焗龙虾', '金枪鱼腩与海胆握寿司'],
      locationCount: '20+ 家门店',
      status: '全美营业'
    }
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
      'assets/brands/surfingcrab-crawfish.jpg',
      'assets/brands/surfingcrab-friends.jpg',
      'assets/brands/surfingcrab-clams.jpg',
      'assets/brands/surfingcrab-mussels.jpg',
      'assets/brands/surfingcrab-dining.jpg',
      'assets/brands/surfingcrab-party.jpg',
      'assets/brands/surfingcrab-skillet.jpg',
      'assets/brands/surfingcrab-bar.jpg',
      'assets/brands/surfingcrab-entrance.jpg',
      'assets/brands/surfingcrab-exterior.jpg'
    ],
    highlights: [
      'King Crab Leg Combo',
      'Snow Crab Leg Combo',
      'Surfing Special Boil',
      'Surfing Crab Loaded Fries',
      'Fried Jumbo Shrimp Basket'
    ],
    websiteUrl: 'https://surfingcrabtx.com/',
    description: 'Steaming king crab clusters, wild Gulf crawfish and jumbo shrimp tossed in signature warm garlic butter with sweet corn',
    zh: {
      subtitle: '卡津风味海鲜锅',
      description: '热气腾腾的帝王蟹、墨西哥湾小龙虾与大虾，裹上招牌蒜香黄油，配上香甜玉米',
      highlights: ['帝王蟹腿套餐', '雪蟹腿套餐', 'Surfing 招牌海鲜锅', 'Surfing Crab 豪华薯条', '酥炸大虾篮'],
      locationCount: '10 家门店',
      status: '营业中'
    }
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
      'assets/brands/hibachi-flame.jpg',
      'assets/brands/hibachi-seafood.jpg',
      'assets/brands/hibachi-friends.jpg',
      'assets/brands/hibachi-carving.jpg',
      'assets/brands/hibachi-buffet.jpg',
      'assets/brands/hibachi-lobster.jpg',
      'assets/brands/hibachi-wok.jpg',
      'assets/brands/hibachi-chef.jpg',
      'assets/brands/hibachi-teppan.jpg',
      'assets/brands/hibachi-table.jpg',
      'assets/brands/hibachi-steak.jpg',
      'assets/brands/hibachi-grill.jpg',
      'assets/brands/hibachi-dining.jpg'
    ],
    highlights: [
      'Hibachi Steak Fried Rice',
      'Spicy Tuna Roll',
      "General Tso's Chicken",
      'Crab Rangoon',
      'House Special Lo Mein'
    ],
    websiteUrl: 'https://hibachigrillsupremebuffettx.com/',
    description: 'Over 300 daily fresh recipes, live flat top teppan flame shows, chilled oysters, fresh hand rolled sushi and carved meats',
    zh: {
      subtitle: '无限量铁板烧 · 新鲜寿司吧',
      description: '每日 300 多道新鲜菜品、现场铁板火焰秀、冰镇生蚝、手卷寿司与现切烤肉',
      highlights: ['铁板牛肉炒饭', '辣金枪鱼卷', '左宗棠鸡', '蟹肉芝士角', '什锦捞面'],
      locationCount: '7 家门店',
      status: '营业中'
    }
  },
  {
    id: 'matcha-zen',
    name: 'Matcha Zen',
    subtitle: 'Ceremonial Matcha & Daily Rituals',
    cuisine: 'Organic Uji Matcha Bar',
    locationCount: '3 Locations',
    states: ['Texas'],
    status: 'Opening Oct 2026',
    image: 'assets/brands/matchazen-drink.jpg',
    foodImages: [
      'assets/brands/matchazen-cheers.jpg',
      'assets/brands/matchazen-drink.jpg',
      'assets/brands/matchazen-gelato.jpg',
      'assets/brands/matchazen-lineup.jpg',
      'assets/brands/matchazen-cakes.jpg',
      'assets/brands/matchazen-smile.jpg',
      'assets/brands/matchazen-gelato-bowls.jpg',
      'assets/brands/matchazen-blue-cake.jpg',
      'assets/brands/matchazen-drip.jpg',
      'assets/brands/matchazen-bakery.jpg',
      'assets/brands/matchazen-tasting.jpg',
      'assets/brands/matchazen-donuts.jpg',
      'assets/brands/matchazen-whisk.jpg',
      'assets/brands/matchazen-friends.jpg',
      'assets/brands/matchazen-store.jpg',
      'assets/brands/matchazen-interior.jpg',
      'assets/brands/matchazen-cafe.jpg',
      'assets/brands/matchazen-leaves.jpg'
    ],
    highlights: [
      'Signature Matcha Latte',
      'Whipped Matcha Einspanner',
      'Dirty Matcha Cold Foam',
      'Lemonade Matcha Fizz',
      'Matcha Gelato Cake'
    ],
    description: 'Whisked ceremonial Uji green tea, silky whipped foam, iced oat cloud lattes and house churned matcha gelato',
    zh: {
      subtitle: '仪式级抹茶 · 日常仪式',
      description: '手刷宇治仪式级抹茶、丝滑奶盖、冰燕麦云朵拿铁与自制抹茶意式冰淇淋',
      highlights: ['招牌抹茶拿铁', '奶油抹茶维也纳', '脏抹茶冷奶盖', '柠檬抹茶气泡饮', '抹茶冰淇淋蛋糕'],
      locationCount: '3 家门店',
      status: '2026 年 10 月开业'
    }
  },
  {
    id: 'chilin',
    name: 'Chilin',
    subtitle: 'Hand Pulled Ramen & Izakaya Bites',
    cuisine: 'Ramen & Social Plates',
    locationCount: '1 Location',
    states: ['Texas'],
    status: 'Opening Oct 2026',
    image: 'assets/brands/chilin-ramen.jpg',
    foodImages: [
      'assets/brands/chilin-ramen.jpg',
      'assets/brands/chilin-xiao-long-bao.jpg',
      'assets/brands/chilin-pork-belly-bao.jpg',
      'assets/brands/chilin-chow-mein.jpg',
      'assets/brands/chilin-interior.jpg',
      'assets/brands/chilin-tom-yum.jpg',
      'assets/brands/chilin-shrimp-tempura.jpg',
      'assets/brands/chilin-guava-matcha.jpg',
      'assets/brands/chilin-steak-rice.jpg',
      'assets/brands/chilin-dumplings.jpg',
      'assets/brands/chilin-snow-ice.jpg',
      'assets/brands/chilin-chicken-wings.jpg',
      'assets/brands/chilin-mushroom-ramen.jpg',
      'assets/brands/chilin-kale-cooler.jpg',
      'assets/brands/chilin-lamps.jpg',
      'assets/brands/chilin-chicken-ramen.jpg',
      'assets/brands/chilin-flatbread.jpg',
      'assets/brands/chilin-sprouts.jpg',
      'assets/brands/chilin-oolong-spritz.jpg',
      'assets/brands/chilin-storefront.jpg',
      'assets/brands/chilin-hall.jpg',
      'assets/brands/chilin-dining.jpg'
    ],
    highlights: [
      'Tonkotsu Chashu Ramen',
      'Classic Xiao Long Bao',
      'Pork Belly Bao',
      'Chow Mein with Filet Mignon',
      'Matcha Snow Ice'
    ],
    description: 'Rich sixteen hour simmered broth, springy hand pulled noodles, tender chashu pork, crispy gyoza and draft Japanese beer',
    zh: {
      subtitle: '手工拉面 · 居酒屋小食',
      description: '慢熬十六小时的浓郁汤底、筋道手工拉面、软嫩叉烧、香脆煎饺与日本生啤',
      highlights: ['豚骨叉烧拉面', '经典小笼包', '五花肉刈包', '菲力牛排炒面', '抹茶雪冰'],
      locationCount: '1 家门店',
      status: '2026 年 10 月开业'
    }
  },
  {
    id: 'viva-refresh',
    name: 'Viva Refresh',
    subtitle: 'Fresh Fruit Coolers & Cold Pressed Sips',
    cuisine: 'Real Fruit Coolers',
    locationCount: '1 Location',
    states: ['Texas'],
    status: 'Open',
    image: 'assets/food/tropical_drink.jpg',
    foodImages: [
      'assets/food/tropical_drink.jpg'
    ],
    description: 'Chilled ripe mango purees, freshly squeezed Meyer lemons, crushed passionfruit and slow brewed botanical iced teas',
    zh: {
      subtitle: '鲜果冰饮 · 冷压果汁',
      description: '冰镇芒果果泥、现榨梅尔柠檬、百香果与慢泡草本冰茶',
      locationCount: '1 家门店',
      status: '营业中'
    }
  }
];

export const localizeBrand = (brand: BrandData, lang: Lang): BrandData =>
  lang === 'zh' && brand.zh ? { ...brand, ...brand.zh } : brand;

import { JobOpening } from '../types';
import type { Lang } from '../i18n';

export const CAREER_ROLES: JobOpening[] = [
  {
    id: 'gm-umiya',
    title: 'General Manager',
    department: 'Restaurant Leadership',
    location: 'Houston & Dallas, Texas',
    brand: 'Umiya',
    type: 'Full-time',
    vibe: 'High volume sushi and teppan dining room leadership',
    zh: { title: '门店总经理', department: '门店管理', location: '德州 · 休斯顿 / 达拉斯', type: '全职', vibe: '带领高客流量的寿司与铁板烧门店团队' }
  },
  {
    id: 'sushi-lead',
    title: 'Master Sushi Knife Chef',
    department: 'Culinary Team',
    location: 'Houston & Austin, Texas',
    brand: 'Umiya',
    type: 'Full-time',
    vibe: 'Whole fish butchery, fresh sashimi slicing, artistic rolls',
    zh: { title: '寿司主厨', department: '厨房团队', location: '德州 · 休斯顿 / 奥斯汀', type: '全职', vibe: '整鱼分割、现切刺身、创意卷寿司' }
  },
  {
    id: 'boil-master',
    title: 'Seafood Boil Master',
    department: 'Kitchen Team',
    location: 'Corpus Christi & San Antonio, Texas',
    brand: 'Surfing Crab',
    type: 'Full-time',
    vibe: 'High energy cajun spice pots, king crab, garlic butter',
    zh: { title: '海鲜锅主厨', department: '厨房团队', location: '德州 · 科珀斯克里斯蒂 / 圣安东尼奥', type: '全职', vibe: '卡津香料锅、帝王蟹、蒜香黄油，节奏快、活力足' }
  },
  {
    id: 'matcha-barista',
    title: 'Ritual Matcha Barista',
    department: 'Craft Beverage',
    location: 'Houston, Texas',
    brand: 'Matcha Zen',
    type: 'Full-time / Part-time',
    vibe: 'Hand whisking organic tea, einspanner foam, artisanal gelato',
    zh: { title: '抹茶调饮师', department: '精品饮品', location: '德州 · 休斯顿', type: '全职 / 兼职', vibe: '手刷有机抹茶、维也纳奶盖、手工意式冰淇淋' }
  },
  {
    id: 'ramen-cook',
    title: 'Ramen & Izakaya Cook',
    department: 'Culinary Team',
    location: 'Houston, Texas',
    brand: 'Chilin',
    type: 'Full-time',
    vibe: '16-hour bone broths, hand pulled noodles, wok sear',
    zh: { title: '拉面与居酒屋厨师', department: '厨房团队', location: '德州 · 休斯顿', type: '全职', vibe: '十六小时骨汤、手工拉面、猛火爆炒' }
  }
];

export const localizeRole = (role: JobOpening, lang: Lang): JobOpening =>
  lang === 'zh' && role.zh ? { ...role, ...role.zh } : role;

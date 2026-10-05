import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'zh';

// Chinese wording follows the Nomix 系统建设蓝图 deck: 门店, 轻连锁, 海外中餐, 规模复制, 经营 …
const STRINGS = {
  en: {
    meta: { title: 'NOMIX Hospitality Group | From Texas to the World', group: 'NOMIX Hospitality Group' },
    langToggle: '中文',
    langToggleLabel: 'Switch to Chinese',
    nav: { brands: 'Our Brands', story: 'Our Story', locations: 'Locations', careers: 'Careers', contact: 'Contact', findRestaurant: 'Find a Restaurant', toggleMenu: 'Toggle navigation menu' },
    home: {
      titleLine1: 'From Texas',
      titleLine2: 'to the World',
      stats: [
        { value: '40+', label: 'Restaurants' },
        { value: '10', label: 'States' },
        { value: '6', label: 'Culinary Brands' },
      ],
      lead: 'Fresh sliced sushi, steaming cajun crab boils, roaring hibachi flame, hand whisked ceremonial matcha, slow simmered ramen broths',
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
      ourBrands: 'Our Brands',
    },
    brandsPage: { title: 'Our Brands', subtitle: 'Six distinct culinary concepts, real kitchens, real food' },
    story: {
      eyebrow: 'The NOMIX Story',
      title: 'Rooted in Texas',
      subtitle: 'From one family table to six beloved hospitality brands',
      tiles: [
        { tag: 'Live Flame', title: 'Theatrical Teppanyaki', alt: 'Hibachi fire' },
        { tag: 'Coastal Flavors', title: 'Southern Cajun Boil', alt: 'Cajun boil' },
        { tag: 'Daily Ritual', title: '100% Organic Matcha', alt: 'Organic matcha' },
      ],
      explore: 'Explore Our Brands',
    },
    locations: {
      eyebrow: 'Find a Restaurant',
      title: 'Locations',
      subtitle: '40+ restaurants across Texas and beyond',
      search: 'Search city, state, zip, or brand',
      allStates: (n: number) => `All States (${n})`,
      allBrands: 'All Brands',
      openNow: 'Open now',
      closed: 'Closed',
      showOnMap: 'Show on Map',
      directions: 'Get Directions',
      website: 'Website',
    },
    modal: { close: 'Close', locations: 'Locations: ', viewLocations: 'View Locations', website: 'Official Website' },
    careers: {
      title: 'Open Opportunities',
      count: (n: number) => `${n} Roles Available`,
      apply: 'Apply Now',
      fullName: 'Full Name',
      namePlaceholder: 'Your name',
      email: 'Email Address',
      emailPlaceholder: 'Your email',
      phone: 'Phone Number',
      resume: 'Resume',
      resumePlaceholder: 'Upload PDF or Word document',
      submit: 'Send Application',
      sentTitle: 'Application Sent',
      sentBody: (name: string, brand: string, email: string) => `Thank you ${name}, the ${brand} team will reach out to ${email}`,
      close: 'Close',
    },
    contact: {
      direct: 'Direct Contact',
      city: 'Houston and Dallas, Texas',
      realEstate: 'Real Estate & Landlords',
      realEstateBody: 'Actively seeking 2,500 to 10,000 sq ft restaurant and retail spaces',
      formTitle: 'Send a Note',
      name: 'Your Name',
      namePlaceholder: 'Your name',
      email: 'Email Address',
      emailPlaceholder: 'Your email',
      inquiry: 'Inquiry Type',
      inquiryPlaceholder: 'Select an inquiry type',
      inquiryTypes: [
        'Franchising Opportunities',
        'Real Estate & Landlords',
        'Private Events & Catering',
        'Partnerships & Vendors',
        'Media & Press',
        'Guest Feedback',
        'General Question',
      ],
      message: 'Your Message',
      messagePlaceholder: 'Tell us what is on your mind',
      submit: 'Send Message',
      sentTitle: 'Message Received',
      sentBody: (name: string, email: string) => `Thank you ${name}, we will reply to ${email} shortly`,
      again: 'Send Another',
    },
    footer: {
      brands: 'Our Brands',
      explore: 'Explore',
      story: 'Story',
      locations: 'Locations',
      careers: 'Careers',
      contact: 'Contact',
      motto: ['Texas Roots', 'Real Food', 'Warm Tables'],
    },
  },
  zh: {
    meta: { title: 'NOMIX 餐饮集团 | 从德州走向世界', group: 'NOMIX 餐饮集团' },
    langToggle: 'EN',
    langToggleLabel: 'Switch to English',
    nav: { brands: '旗下品牌', story: '品牌故事', locations: '门店分布', careers: '加入我们', contact: '联系我们', findRestaurant: '查找门店', toggleMenu: '打开导航菜单' },
    home: {
      titleLine1: '从德州',
      titleLine2: '走向世界',
      stats: [
        { value: '40+', label: '家门店' },
        { value: '10', label: '个州' },
        { value: '6', label: '大餐饮品牌' },
      ],
      lead: '现切寿司、热气腾腾的卡津海鲜锅、火焰铁板烧、手刷仪式级抹茶、慢熬拉面高汤',
      prevPhoto: '上一张',
      nextPhoto: '下一张',
      ourBrands: '旗下品牌',
    },
    brandsPage: { title: '旗下品牌', subtitle: '六大餐饮品牌，真厨房，真味道' },
    story: {
      eyebrow: 'NOMIX 品牌故事',
      title: '扎根德州',
      subtitle: '从一张家庭餐桌，到六大深受喜爱的餐饮品牌',
      tiles: [
        { tag: '现场火焰', title: '剧场式铁板烧', alt: '铁板烧火焰' },
        { tag: '海岸风味', title: '美式南方卡津海鲜锅', alt: '卡津海鲜锅' },
        { tag: '日常仪式', title: '100% 有机抹茶', alt: '有机抹茶' },
      ],
      explore: '探索旗下品牌',
    },
    locations: {
      eyebrow: '查找门店',
      title: '门店分布',
      subtitle: '40+ 家门店，从德州遍布全美',
      search: '搜索城市、州、邮编或品牌',
      allStates: (n: number) => `全部州（${n}）`,
      allBrands: '全部品牌',
      openNow: '营业中',
      closed: '已打烊',
      showOnMap: '在地图上查看',
      directions: '导航前往',
      website: '门店官网',
    },
    modal: { close: '关闭', locations: '所在地区：', viewLocations: '查看门店', website: '品牌官网' },
    careers: {
      title: '招聘职位',
      count: (n: number) => `共 ${n} 个职位`,
      apply: '立即申请',
      fullName: '姓名',
      namePlaceholder: '请输入您的姓名',
      email: '电子邮箱',
      emailPlaceholder: '请输入您的邮箱',
      phone: '电话号码',
      resume: '简历',
      resumePlaceholder: '上传 PDF 或 Word 文档',
      submit: '提交申请',
      sentTitle: '申请已提交',
      sentBody: (name: string, brand: string, email: string) => `感谢您，${name}！${brand} 团队将通过 ${email} 与您联系`,
      close: '关闭',
    },
    contact: {
      direct: '直接联系',
      city: '美国德州 · 休斯顿 / 达拉斯',
      realEstate: '商业地产合作',
      realEstateBody: '正在寻找 2,500 至 10,000 平方英尺的餐饮及零售空间',
      formTitle: '给我们留言',
      name: '您的姓名',
      namePlaceholder: '请输入您的姓名',
      email: '电子邮箱',
      emailPlaceholder: '请输入您的邮箱',
      inquiry: '咨询类型',
      inquiryPlaceholder: '请选择咨询类型',
      inquiryTypes: ['加盟合作', '商业地产与房东', '私人活动与团餐', '合作伙伴与供应商', '媒体与公关', '顾客反馈', '一般咨询'],
      message: '留言内容',
      messagePlaceholder: '请告诉我们您的想法',
      submit: '发送留言',
      sentTitle: '留言已收到',
      sentBody: (name: string, email: string) => `感谢您，${name}！我们会尽快回复至 ${email}`,
      again: '再写一条',
    },
    footer: {
      brands: '旗下品牌',
      explore: '探索',
      story: '品牌故事',
      locations: '门店分布',
      careers: '加入我们',
      contact: '联系我们',
      motto: ['扎根德州', '真材实料', '温暖餐桌'],
    },
  },
};

export type Strings = (typeof STRINGS)['en'];

const STATE_NAMES_ZH: Record<string, string> = {
  Texas: '德克萨斯州',
  Nevada: '内华达州',
  'New Jersey': '新泽西州',
  'New York': '纽约州',
  Florida: '佛罗里达州',
  Tennessee: '田纳西州',
  Virginia: '弗吉尼亚州',
  California: '加利福尼亚州',
  Delaware: '特拉华州',
  Connecticut: '康涅狄格州',
};

export const stateName = (state: string, lang: Lang) => (lang === 'zh' ? STATE_NAMES_ZH[state] ?? state : state);

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} });

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'zh' || fromUrl === 'en') return fromUrl;
  try {
    const saved = localStorage.getItem('nomix-lang');
    if (saved === 'zh' || saved === 'en') return saved;
  } catch {
    // storage blocked (private mode etc.) — fall through to default
  }
  return 'en';
}

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = STRINGS[lang].meta.title;
    try {
      localStorage.setItem('nomix-lang', lang);
    } catch {
      // ignore
    }
    // Keep the URL shareable: ?lang=zh opens the Chinese site
    const url = new URL(window.location.href);
    if (lang === 'zh') url.searchParams.set('lang', 'zh');
    else url.searchParams.delete('lang');
    window.history.replaceState(null, '', url);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
export const useT = (): Strings => STRINGS[useContext(LangContext).lang];

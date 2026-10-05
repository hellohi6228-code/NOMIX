import type { Lang } from '../i18n';

const STORY_HIGHLIGHTS_EN = [
  {
    badge: 'Roots',
    headline: 'Texas born and raised',
    note: 'One restaurant idea growing into six beloved dining brands across the country'
  },
  {
    badge: 'Coast to Coast',
    headline: '40+ restaurants and counting',
    note: 'Welcoming guests across Texas, Nevada, New Jersey, New York, Florida, and California'
  },
  {
    badge: 'Next Chapter',
    headline: 'Houston debuts October 2026',
    note: 'Matcha Zen daily ritual house and Chilin hand pulled ramen kitchen'
  }
];

const STORY_HIGHLIGHTS_ZH = [
  {
    badge: '根基',
    headline: '生于德州，长于德州',
    note: '从一家餐厅的构想出发，成长为遍布全美的六大餐饮品牌'
  },
  {
    badge: '遍布全美',
    headline: '40+ 家门店，持续增长',
    note: '门店遍布德克萨斯、内华达、新泽西、纽约、佛罗里达与加利福尼亚'
  },
  {
    badge: '下一篇章',
    headline: '2026 年 10 月登陆休斯顿',
    note: 'Matcha Zen 抹茶仪式馆与 Chilin 手工拉面厨房即将开业'
  }
];

export const storyHighlights = (lang: Lang) => (lang === 'zh' ? STORY_HIGHLIGHTS_ZH : STORY_HIGHLIGHTS_EN);

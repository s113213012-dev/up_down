import type { TagDef } from '../types/menu'

export const tagDefs: TagDef[] = [
  {
    code: 'R',
    icon: '⭐',
    label: { zh: '本店推薦', en: 'Recommended', ja: 'おすすめ', ko: '추천' },
  },
  {
    code: '1',
    icon: '🌶️',
    label: { zh: '小辣', en: 'Mild Spicy', ja: '少し辛い', ko: '약간 매운' },
  },
  {
    code: '2',
    icon: '🌶️🌶️',
    label: { zh: '中辣', en: 'Medium Spicy', ja: '中辛', ko: '보통 매운' },
  },
  {
    code: '3',
    icon: '🔥',
    label: { zh: '大辣', en: 'Very Spicy', ja: '激辛', ko: '매우 매운' },
  },
  {
    code: 'P',
    icon: '🐷',
    label: { zh: '含豬肉', en: 'Contains Pork', ja: '豚肉入り', ko: '돼지고기 포함' },
  },
  {
    code: 'B',
    icon: '🐂',
    label: { zh: '含牛肉', en: 'Contains Beef', ja: '牛肉入り', ko: '소고기 포함' },
  },
  {
    code: 'L',
    icon: '🐑',
    label: { zh: '含羊肉', en: 'Contains Lamb', ja: 'ラム入り', ko: '양고기 포함' },
  },
  {
    code: 'V',
    icon: '🥬',
    label: { zh: '素食', en: 'Vegetarian', ja: 'ベジタリアン', ko: '채식' },
  },
  {
    code: 'V5',
    icon: '🧄',
    label: {
      zh: '五辛素',
      en: 'Plant-based with Allium',
      ja: '五葷あり精進',
      ko: '오신채 포함 채식',
    },
  },
  {
    code: 'H',
    icon: '☪️',
    label: { zh: '清真認證', en: 'Halal Certified', ja: 'ハラール認証', ko: '할랄 인증' },
  },
]

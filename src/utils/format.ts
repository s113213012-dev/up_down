import type { Lang } from '../types/menu'

const marketLabel: Record<Lang, string> = {
  zh: '時價',
  en: 'Market Price',
  ja: '時価',
  ko: '시가',
}

export function formatPrice(value: number | 'market', lang: Lang): string {
  if (value === 'market') return marketLabel[lang]
  return `NT$${value}`
}

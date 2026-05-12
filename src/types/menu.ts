export type Lang = 'zh' | 'en' | 'ja' | 'ko'

export type I18nText = Record<Lang, string>

export type TagCode = 'R' | '1' | '2' | '3' | 'P' | 'B' | 'L' | 'V' | 'V5' | 'H'

export type PriceOption = {
  label: I18nText | null
  value: number | 'market'
}

export type MenuItem = {
  id: string
  category: string
  names: I18nText
  price: PriceOption[]
  image: string | null
  emoji: string
  tags: TagCode[]
  desc: I18nText
  note: I18nText
}

export type Category = {
  id: string
  label: I18nText
}

export type TagDef = {
  code: TagCode
  icon: string
  label: I18nText
}

import type { I18nText, Category, Lang } from '../types/menu'

export const siteInfo = {
  name: {
    zh: '山上山下',
    en: 'Shanshangxiaxia',
    ja: '山上山下',
    ko: '산상산하',
  } as I18nText,
  subtitle: {
    zh: '深濃咖哩飯',
    en: 'Deep Curry Rice',
    ja: '深濃カレーライス',
    ko: '깊은 카레 라이스',
  } as I18nText,
  address: {
    zh: '（地址請填入）',
    en: '(Address — please fill in)',
    ja: '（住所をご記入ください）',
    ko: '（주소를 입력해 주세요）',
  } as I18nText,
  phone: '02-XXXX-XXXX',
  website: '3S3S.TW',
  diningInfo: {
    title: {
      zh: '內用流程',
      en: 'Dine-In Steps',
      ja: '店内ご利用の流れ',
      ko: '매장 이용 안내',
    } as I18nText,
    steps: {
      zh: ['掃條碼', '量體溫', '再點餐', '先取號', '再入座', '等叫號'],
      en: ['Scan QR', 'Check Temp', 'Order', 'Get Number', 'Be Seated', 'Wait for Call'],
      ja: ['QR読取', '体温測定', '注文', '番号取得', '着席', '呼び出し待ち'],
      ko: ['QR 스캔', '체온 측정', '주문', '번호 뽑기', '착석', '호출 대기'],
    } as Record<Lang, string[]>,
  },
}

export const categories: Category[] = [
  {
    id: 'curry',
    label: {
      zh: '咖哩定食類',
      en: 'Curry Sets',
      ja: 'カレー定食類',
      ko: '카레 정식류',
    },
  },
  {
    id: 'addon',
    label: {
      zh: '加點類',
      en: 'Add-ons',
      ja: 'サイドオーダー',
      ko: '추가 주문',
    },
  },
]

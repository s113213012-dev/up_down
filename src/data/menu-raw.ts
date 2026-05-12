// ═══════════════════════════════════════════════════════════════════════════
//  菜單原始資料 — 餐廳業者在此編輯
//
//  欄位說明:
//    category  分類代碼: 'curry' = 咖哩定食類, 'addon' = 加點類
//    name      品項中文名稱
//    options   價格選項，字串陣列:
//                不分規格 → ['270']
//                分規格   → ['烤雞腿 270', '牛肉 340']
//                時價     → ['時價']
//    tags      標記代碼陣列，無標記填 []
//    image     圖片檔名（放在 public/images/），無圖片填 null
//    emoji     無圖片時顯示的替代圖示
//    note      中文備註，不需要時填 ''
//
//  ★ 新增品項時，只要複製一個 { } 區塊，改掉內容即可
// ═══════════════════════════════════════════════════════════════════════════

export const menuRaw = [
  {
    category: 'curry',
    name: '炸蝦天婦羅咖哩定食',
    options: ['390'],
    tags: [],
    image: null,
    emoji: '🍤',
    note: '原始咖哩配菜與兩雙料黃金炸白蝦',
  },
  {
    category: 'curry',
    name: '豬雞雙拼咖哩定食',
    options: ['375'],
    tags: [],
    image: null,
    emoji: '🍛',
    note: '原始咖哩配菜與黃金炸豬排及唐揚雞雙主食',
  },
  {
    category: 'curry',
    name: '極★厚切豬排咖哩定食',
    options: ['360'],
    tags: [],
    image: null,
    emoji: '🥩',
    note: '原始咖哩配菜與整片厚切炸豬里肌',
  },
  {
    category: 'curry',
    name: '招牌唐揚雞咖哩定食',
    options: ['345'],
    tags: [],
    image: null,
    emoji: '🍗',
    note: '原始咖哩配菜與整片鮮嫩唐揚雞',
  },
  {
    category: 'curry',
    name: '黃金炸豬排咖哩定食',
    options: ['325'],
    tags: [],
    image: null,
    emoji: '🍖',
    note: '原始咖哩配菜與整片秘製醬炸豬排',
  },
  {
    category: 'curry',
    name: '山上秘滷牛腱套餐',
    options: ['295'],
    tags: [],
    image: null,
    emoji: '🍲',
    note: '韓式泡菜、鮮蔬、炸洋蔥、胡麻鮮蔬、醬牛腱心、薑黃豆腐',
  },
  {
    category: 'addon',
    name: '北海道醬油漬鮭魚卵',
    options: ['45'],
    tags: [],
    image: null,
    emoji: '🐟',
    note: '',
  },
  {
    category: 'addon',
    name: '炙燒半黃金切達起司',
    options: ['15'],
    tags: [],
    image: null,
    emoji: '🧀',
    note: '',
  },
]

# 山上山下 — 深濃咖哩飯 線上菜單

手機版多語言線上菜單（繁中 / EN / 日本語 / 한국어），以 React + Vite + TypeScript 建置，部署至 GitHub Pages。

## 本地開發

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 輸出至 dist/
npm run preview  # 預覽 build 結果
```

## 部署（GitHub Pages）

1. Push 到 `main` branch 後，GitHub Actions 會自動 build 並部署
2. 首次使用需到 Repository → **Settings → Pages → Source** 選 **GitHub Actions**
3. 部署完成後可透過 `https://s113213012-dev.github.io/up_down/` 存取

## 編輯菜單

1. 開啟 `src/data/menu-raw.ts`，依格式新增或修改品項（純中文即可）
2. 同步更新 `src/data/menu-i18n.ts`（補上英/日/韓翻譯）
3. 品項照片放入 `public/images/`，並在 `menu-raw.ts` 的 `image` 欄位填入檔名

## 待補充

- [ ] 店家地址（`src/data/site-info.ts` → `address`）
- [ ] 店家電話（`src/data/site-info.ts` → `phone`）
- [ ] 品項照片（放入 `public/images/` 並更新 `menu-raw.ts`）
- [ ] 品項標記（`src/data/menu-raw.ts` → `tags`，如需標示辣度、肉類等）

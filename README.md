# Taiwanese Souvenirs Vue App

Vue 3 + Vite 製作的台灣伴手禮活動頁。

## 本次更新

`src/components/PrizesSection.vue` 的獎品資料已更新為三個運動用品獎項：

- 頭獎：運動背包
- 二獎：運動水壺
- 三獎：運動毛巾

同步新增對應的卡片圖示與獎品圖片：

- `public/images/prize_sports_backpack.svg`
- `public/images/prize_sports_bottle.svg`
- `public/images/prize_sports_towel.svg`

獎品卡片現在由同一份 `prizes` 陣列集中管理名稱、獎項、圖示、圖片與說明。後續翻修時，只要替換陣列資料與 `public/images` 圖片即可，不需要重改版型。

其他同步調整：

- `src/components/HeroSection.vue` 的首圖改用 `public/images/rti.jpg`
- `tests/sections.test.mjs` 補上獎品資料測試，並讓 Hero 測試可接受額外 HTML 屬性，降低測試對版型細節的脆弱度

## 開發與驗證

```sh
npm install
npm run dev
npm test
```

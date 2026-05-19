<template>
  <section id="rules" class="rules-section">
    <div class="container">
      <p class="section-subtitle">RULES</p>
      <h2 class="section-title">報名說明與注意事項</h2>
      <p class="section-desc">
        這一區用群組陣列拆開不同性質的規則，版型好維護，文案也不會全部混在同一坨。
      </p>

      <div class="rules-grid">
        <article
          v-for="group in ruleGroups"
          :key="group.id"
          class="rule-card"
        >
          <h3 class="rule-title">{{ group.title }}</h3>
          <p class="rule-description">{{ group.description }}</p>

          <ul class="rule-list">
            <li
              v-for="(item, index) in group.items"
              :key="`${group.id}-${index}`"
              class="rule-item"
            >
              <span class="rule-index">{{ String(index + 1).padStart(2, "0") }}</span>
              <span class="rule-text">{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RulesSection",
  data() {
    return {
      ruleGroups: [
        {
          id: "signup",
          title: "報名說明",
          description: "先用清單整理參與流程，使用者和維護者都比較不容易迷路。",
          items: [
            "選擇欲參與的活動內容，先確認自己想投稿還是投票。",
            "填寫真實姓名、Email 與必要資料，避免通知時找不到人。",
            "送出前再次檢查內容，確認圖片、文字與聯絡方式都正確。"
          ]
        },
        {
          id: "notice",
          title: "注意事項",
          description: "把限制條件與提醒獨立出來，能降低使用者誤解，也方便後續改版維護。",
          items: [
            "每位參加者請以同一組聯絡資訊報名，避免重複計算或通知失敗。",
            "若活動內容有調整，請以網站公告版本為準，這是專題頁常見的更新點。",
            "中獎或入選通知通常依報名資料發送，因此資料正確性比畫面更重要。"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.rules-section {
  padding: 5rem 1rem;
  background: #ffffff;
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.section-subtitle {
  margin: 0 0 0.5rem;
  text-align: center;
  color: #c75b39;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.section-title {
  margin: 0 0 0.75rem;
  text-align: center;
  font-size: 2.2rem;
  color: #4a3c31;
}

.section-desc {
  max-width: 760px;
  margin: 0 auto 2.5rem;
  text-align: center;
  color: #6d5b4d;
  line-height: 1.8;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.rule-card {
  padding: 1.75rem;
  border-radius: 24px;
  background: #fff8f3;
  box-shadow: 0 16px 36px rgba(126, 80, 50, 0.08);
}

.rule-title {
  margin: 0 0 0.5rem;
  color: #4a3c31;
  font-size: 1.5rem;
}

.rule-description {
  margin: 0 0 1.5rem;
  color: #6d5b4d;
  line-height: 1.75;
}

.rule-list {
  display: grid;
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.rule-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.85rem;
  align-items: start;
  padding: 0.95rem 1rem;
  border-radius: 18px;
  background: #ffffff;
}

.rule-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.4rem;
  min-height: 2.4rem;
  border-radius: 50%;
  background: rgba(199, 91, 57, 0.12);
  color: #b25333;
  font-weight: 700;
}

.rule-text {
  color: #5f4f43;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .rules-grid {
    grid-template-columns: 1fr;
  }
}
</style>

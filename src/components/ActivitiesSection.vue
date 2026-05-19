<template>
  <section id="activities" class="activities-section">
    <div class="container">
      <p class="section-subtitle">HOW TO JOIN</p>
      <h2 class="section-title">活動辦法</h2>
      <p class="section-desc">
        以步驟陣列整理每一個活動流程，之後若要替換成新的專題主題，只需要調整資料內容即可。
      </p>

      <div class="activities-grid">
        <article
          v-for="activity in activities"
          :key="activity.id"
          class="activity-card"
        >
          <span class="activity-badge">{{ activity.badge }}</span>
          <h3 class="activity-title">{{ activity.title }}</h3>
          <p class="activity-text">{{ activity.description }}</p>

          <ol class="activity-steps">
            <li
              v-for="step in activity.steps"
              :key="step.id"
              class="activity-step"
            >
              <span class="step-index">{{ String(step.id).padStart(2, "0") }}</span>
              <div class="step-content">
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-text">{{ step.text }}</p>
              </div>
            </li>
          </ol>

          <a :href="activity.actionLink" class="activity-link">
            {{ activity.actionText }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ActivitiesSection",
  data() {
    return {
      activities: [
        {
          id: 1,
          badge: "VOTE",
          title: "人氣票選活動",
          description: "挑出你心中最具代表性的台灣伴手禮，完成投票後就能參加抽獎。",
          actionText: "前往票選",
          actionLink: "#products",
          steps: [
            {
              id: 1,
              title: "挑選喜歡的品項",
              text: "先瀏覽熱門伴手禮卡片，找出最想推薦給朋友的一款。"
            },
            {
              id: 2,
              title: "填寫基本資料",
              text: "輸入姓名與聯絡方式，方便活動結束後通知中獎資訊。"
            },
            {
              id: 3,
              title: "送出完成參加",
              text: "確認內容後送出，即可完成這次人氣票選活動。"
            }
          ]
        },
        {
          id: 2,
          badge: "ESSAY",
          title: "故事徵集活動",
          description: "分享你和台灣味道之間的記憶，讓專題頁多一層情感溫度。",
          actionText: "閱讀活動說明",
          actionLink: "#rules",
          steps: [
            {
              id: 1,
              title: "選定主題切角",
              text: "可以從旅行、送禮、家鄉回憶等角度切入，讓故事更有畫面。"
            },
            {
              id: 2,
              title: "整理文字內容",
              text: "簡短描述你與伴手禮的連結，重點放在真實感受與記憶點。"
            },
            {
              id: 3,
              title: "依規則完成投稿",
              text: "確認字數與資料完整後再送出，能大幅降低後續補件成本。"
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.activities-section {
  padding: 5rem 1rem;
  background: #fff7f2;
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

.activities-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.activity-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
  border-radius: 24px;
  background: linear-gradient(180deg, #ffffff 0%, #fff4ed 100%);
  box-shadow: 0 18px 40px rgba(126, 80, 50, 0.1);
}

.activity-badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(199, 91, 57, 0.12);
  color: #a64d30;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.activity-title {
  margin: 0;
  font-size: 1.55rem;
  color: #4a3c31;
}

.activity-text {
  margin: 0;
  color: #6d5b4d;
  line-height: 1.75;
}

.activity-steps {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.activity-step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: start;
  padding: 0.9rem 0;
  border-top: 1px solid rgba(199, 91, 57, 0.12);
}

.step-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  min-height: 2.5rem;
  border-radius: 50%;
  background: #c75b39;
  color: #ffffff;
  font-weight: 700;
}

.step-content {
  display: grid;
  gap: 0.25rem;
}

.step-title {
  margin: 0;
  font-size: 1rem;
  color: #4a3c31;
}

.step-text {
  margin: 0;
  color: #6d5b4d;
  line-height: 1.7;
}

.activity-link {
  display: inline-flex;
  align-self: flex-start;
  margin-top: auto;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  background: #c75b39;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.activity-link:hover {
  transform: translateY(-2px);
  background: #aa4828;
}

@media (max-width: 900px) {
  .activities-grid {
    grid-template-columns: 1fr;
  }
}
</style>

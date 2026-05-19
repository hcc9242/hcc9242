<template>
  <section id="prizes" class="prizes-section">
    <div class="container">
      <p class="section-subtitle">PRIZES</p>
      <h2 class="section-title">獎品展示</h2>
      <p class="section-desc">
        獎品區用卡片陣列管理名稱、圖片與說明，後續新增或替換獎項時，不需要重改整個版型。
      </p>

      <div class="prizes-grid">
        <article
          v-for="prize in prizes"
          :key="prize.id"
          class="prize-card"
        >
          <div class="prize-card-top">
            <span class="prize-rank">{{ prize.rank }}</span>
            <span class="prize-icon" :class="`prize-icon--${prize.icon}`" aria-hidden="true">
              <svg v-if="prize.icon === 'backpack'" viewBox="0 0 24 24">
                <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                <path d="M7 8h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Z" />
                <path d="M8 15h8" />
                <path d="M9 12h6" />
              </svg>
              <svg v-else-if="prize.icon === 'bottle'" viewBox="0 0 24 24">
                <path d="M9 2h6v4l-2 2v12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V8L9 6V2Z" />
                <path d="M8 14h8" />
                <path d="M9 5h6" />
              </svg>
              <svg v-else viewBox="0 0 24 24">
                <path d="M6 4h12v5H6z" />
                <path d="M7 9h10l-2 11H9L7 9Z" />
                <path d="M10 13h4" />
                <path d="M10 16h4" />
              </svg>
            </span>
          </div>
          <div class="prize-image-wrap">
            <img :src="$appConfig.publicAsset(prize.image)" :alt="prize.name" class="prize-image" />
          </div>
          <div class="prize-body">
            <h3 class="prize-name">{{ prize.name }}</h3>
            <p class="prize-description">{{ prize.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PrizesSection",
  data() {
    return {
      prizes: [
        {
          id: 1,
          rank: "頭獎",
          name: "運動背包",
          icon: "backpack",
          image: "images/prize_sports_backpack.svg",
          description: "容量充足、收納清楚，適合運動訓練、健身房與日常外出使用。"
        },
        {
          id: 2,
          rank: "二獎",
          name: "運動水壺",
          icon: "bottle",
          image: "images/prize_sports_bottle.svg",
          description: "輕巧好攜帶，運動、通勤或戶外活動都能隨時補水。"
        },
        {
          id: 3,
          rank: "三獎",
          name: "運動毛巾",
          icon: "towel",
          image: "images/prize_sports_towel.svg",
          description: "吸水性佳、觸感柔軟，適合運動後擦汗或日常隨身備用。"
        }
      ]
    }
  }
}
</script>

<style scoped>
.prizes-section {
  padding: 5rem 1rem;
  background: linear-gradient(180deg, #fff4ec 0%, #fffdfb 100%);
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

.prizes-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.prize-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(126, 80, 50, 0.1);
}

.prize-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1.1rem 1.1rem 0;
}

.prize-rank {
  align-self: flex-start;
  margin: 0;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(199, 91, 57, 0.12);
  color: #a64d30;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.prize-icon {
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #fff7f2;
  color: #c75b39;
  box-shadow: inset 0 0 0 1px rgba(199, 91, 57, 0.14);
}

.prize-icon svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.prize-image-wrap {
  padding: 1rem 1rem 0;
}

.prize-image {
  width: 100%;
  height: 220px;
  object-fit: contain;
  display: block;
  border-radius: 18px;
  background: #fff7f2;
}

.prize-body {
  padding: 1.2rem 1.1rem 1.4rem;
}

.prize-name {
  margin: 0 0 0.6rem;
  color: #4a3c31;
  font-size: 1.3rem;
}

.prize-description {
  margin: 0;
  color: #6d5b4d;
  line-height: 1.75;
}

@media (max-width: 960px) {
  .prizes-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <section id="products" class="gifts-section">
    <div class="container">
      <p class="section-subtitle">TOP PICKS</p>
      <h2 class="section-title">熱門伴手禮</h2>
      <p class="section-desc">
        挑幾款經典的台灣味，做成一個有動畫的小展示區塊。
      </p>

      <div class="gifts-grid">
        <GiftCard
          v-for="gift in gifts"
          :key="gift.id"
          :name="gift.name"
          :image="$appConfig.publicAsset(gift.image)"
          :description="gift.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import GiftCard from "./GiftCard.vue"

export default {
  name: "GiftsSection",
  components: {
    GiftCard
  },
  data() {
    return {
      gifts: [
        {
          id: 1,
          name: "鳳梨酥",
          description: "台灣經典代表，酸甜平衡很適合送禮。",
          image: "images/pineapple_cake.png"
        },
        {
          id: 2,
          name: "牛軋糖",
          description: "奶香濃郁，搭配堅果很有層次。",
          image: "images/nougat_candy.png"
        },
        {
          id: 3,
          name: "高山茶",
          description: "茶香清雅，包裝精緻也很有質感。",
          image: "images/high_mountain_tea.png"
        },
        {
          id: 4,
          name: "太陽餅",
          description: "台中知名伴手禮，口感酥鬆順口。",
          image: "images/sun_cake.png"
        },
        {
          id: 5,
          name: "蛋黃酥",
          description: "層層酥香的外皮搭配鹹蛋黃，中秋必備。",
          image: "images/yolk_pastry.png"
        },
        {
          id: 6,
          name: "芋頭酥",
          description: "外觀有著螺旋浪漫紫，綿密芋泥超迷人。",
          image: "images/taro_pastry.png"
        },
        {
          id: 7,
          name: "綠豆椪",
          description: "酥皮加上綠豆沙內餡，傳統經典好味道。",
          image: "images/mung_bean_pastry.png"
        },
        {
          id: 8,
          name: "台灣肉乾",
          description: "蜜汁烘烤，肉汁飽滿又香甜的唰嘴零食。",
          image: "images/pork_jerky.png"
        },
        {
          id: 9,
          name: "珍珠奶茶",
          description: "風靡全球的台灣飲品，Ｑ彈珍珠配上濃郁奶茶。",
          image: "images/bubble_tea.png"
        },
        {
          id: 10,
          name: "宜蘭牛舌餅",
          description: "薄脆香甜的傳統小吃，大人小孩都喜愛。",
          image: "images/ox_tongue_biscuit.png"
        }
      ]
    }
  }
}
</script>

<style scoped>
.gifts-section {
  padding: 4rem 1rem 5rem;
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.section-subtitle {
  text-align: center;
  color: #c75b39;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin-bottom: 0.5rem;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 0.75rem;
}

.section-desc {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 2rem;
  color: #666;
  line-height: 1.8;
}

/* Grid 排版 */
.gifts-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

/* 平板 */
@media (min-width: 768px) {
  .gifts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 桌面 */
@media (min-width: 1024px) {
  .gifts-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>

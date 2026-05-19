<template>
  <section id="about" class="intro-section">
    <div class="container intro-layout">
      <div class="intro-copy">
        <p class="intro-eyebrow">BRAND STORY</p>
        <h2 class="intro-title">把台灣的味道，變成有記憶點的專題敘事</h2>
        <p class="intro-text">
          伴手禮不只是商品，更像是一張把地方風景、職人手藝與送禮心意打包起來的名片。
          我們把經典台灣味整理成更容易閱讀的專題頁，讓使用者能快速理解每一款特色。
        </p>
        <p class="intro-text">
          這一區的設計重點是先建立情境，再帶進產品清單，讓整體瀏覽節奏不會只有卡片堆疊，
          而是更像在看一個完整主題故事。
        </p>

        <div class="intro-points">
          <span class="intro-point">地方特色</span>
          <span class="intro-point">送禮靈感</span>
          <span class="intro-point">專題敘事</span>
        </div>
      </div>

      <div class="intro-visual">
        <img
          :src="imageUrl"
          :alt="imageAlt"
          class="intro-image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroSection",
  data() {
    return {
      imagePath: "images/hero.jpg",
      imageAlt: "台灣伴手禮與茶點展示照片"
    }
  },
  computed: {
    imageUrl() {
      return this.$appConfig.publicAsset(this.imagePath)
    }
  }
}
</script>

<style scoped>
.intro-section {
  position: relative;
  z-index: 3;
  padding: 5rem 1rem;
  background:
    radial-gradient(circle at top left, rgba(255, 216, 201, 0.65), transparent 32%),
    linear-gradient(180deg, #fffaf6 0%, #fff2ea 100%);
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.intro-layout {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2rem;
  align-items: center;
}

.intro-copy {
  color: #4a3c31;
}

.intro-eyebrow {
  margin-bottom: 0.75rem;
  color: #c75b39;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.intro-title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 3.8vw, 3rem);
  line-height: 1.2;
}

.intro-text {
  margin: 0 0 1rem;
  color: #6d5b4d;
  line-height: 1.85;
}

.intro-points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.intro-point {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(199, 91, 57, 0.14);
  color: #8a4c35;
  font-weight: 600;
  box-shadow: 0 10px 24px rgba(120, 72, 42, 0.08);
}

.intro-visual {
  position: relative;
}

.intro-visual::before {
  content: "";
  position: absolute;
  inset: auto 1rem -1rem auto;
  width: 72%;
  height: 72%;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(199, 91, 57, 0.18), rgba(255, 214, 170, 0.3));
  z-index: 0;
}

.intro-image {
  position: relative;
  z-index: 1;
  width: 100%;
  display: block;
  border-radius: 24px;
  object-fit: cover;
  min-height: 360px;
  box-shadow: 0 24px 50px rgba(90, 54, 35, 0.18);
}

@media (max-width: 900px) {
  .intro-layout {
    grid-template-columns: 1fr;
  }

  .intro-visual {
    order: -1;
  }

  .intro-image {
    min-height: 280px;
  }
}
</style>

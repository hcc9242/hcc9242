<template>
  <section id="hero" class="hero">
    <div ref="banner" class="hero-banner" :style="heroBannerStyle" aria-hidden="true">
      <img
        :src="imageUrl"
        alt=""
        class="hero-banner-img"
      />
      <div class="overlay"></div>

      <a
        href="#about"
        class="hero-scroll-hint"
        :style="heroScrollHintStyle"
        aria-label="往下瀏覽"
      ></a>
    </div>

    <div class="hero-content">
      <p class="hero-subtitle">{{ subtitle }}</p>
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-text">{{ description }}</p>

      <div class="hero-actions">
        <a href="#products" class="hero-btn primary-btn">{{ primaryButtonText }}</a>
        <a href="#about" class="hero-btn secondary-btn">{{ secondaryButtonText }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      subtitle: "來自台灣的經典電影",
      title: "探索台灣電影",
      description: `鳳梨酥、牛軋糖、高山茶，
    一次帶你認識最有代表性的台灣味，
    挑選最適合送禮與收藏的特色名產。`,
      imagePath: "images/rti.jpg",
      primaryButtonText: "立即探索",
      secondaryButtonText: "品牌故事",
      scrollProgress: 0,
      scrollRafId: null,
      viewportHeight: 0
    }
  },
  computed: {
    imageUrl() {
      return this.$appConfig.publicAsset(this.imagePath)
    },
    heroCompression() {
      const maxCompression = Math.min(this.viewportHeight * 0.52, 500)
      return this.scrollProgress * maxCompression
    },
    heroBannerStyle() {
      if (!this.viewportHeight) {
        return {
          height: "100svh"
        }
      }

      const bannerHeight = Math.max(this.viewportHeight - this.heroCompression, 320)

      return {
        height: `${bannerHeight}px`
      }
    },
    heroScrollHintStyle() {
      return {
        opacity: Math.max(1 - this.scrollProgress * 2, 0)
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.queueHeroScrollUpdate, { passive: true })
    window.addEventListener("resize", this.queueHeroScrollUpdate)
    this.viewportHeight = window.innerHeight || 0
    this.queueHeroScrollUpdate()
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.queueHeroScrollUpdate)
    window.removeEventListener("resize", this.queueHeroScrollUpdate)

    if (this.scrollRafId) {
      window.cancelAnimationFrame(this.scrollRafId)
    }
  },
  methods: {
    queueHeroScrollUpdate() {
      if (this.scrollRafId) return

      this.scrollRafId = window.requestAnimationFrame(() => {
        this.scrollRafId = null
        this.updateHeroScrollProgress()
      })
    },
    updateHeroScrollProgress() {
      const banner = this.$refs.banner
      if (!banner) return

      const { top } = banner.getBoundingClientRect()
      const viewportHeight = window.innerHeight || banner.offsetHeight
      const activeDistance = Math.max(viewportHeight * 0.85, 1)
      const scrolledPastBannerTop = Math.max(-top, 0)
      const progress = Math.min(scrolledPastBannerTop / activeDistance, 1)

      this.viewportHeight = viewportHeight
      this.scrollProgress = progress
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  background-color: #ffe4e1;
}

.hero-banner {
  position: relative;
  height: 100svh;
  overflow: hidden;
  background-color: #161616;
  isolation: isolate;
}

.hero-banner-img {
  position: absolute;
  top: -14svh;
  left: 0;
  display: block;
  width: 100%;
  height: 128svh;
  object-fit: cover;
  object-position: center center;
}

.overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: none;
  background:
    linear-gradient(rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.42)),
    linear-gradient(90deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.08));
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(760px, 100%);
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
  color: #4a3c31;
}

.hero-subtitle {
  font-size: 1rem;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-text {
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 680px;
  margin: 0 auto 2rem;
  white-space: pre-line;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-btn {
  display: inline-block;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.hero-btn:hover {
  transform: translateY(-2px);
}

.primary-btn {
  background-color: rgba(216, 27, 96, 0.85); /* 玫瑰粉色按鈕 */
  color: #ffffff;
  border: 1px solid rgba(216, 27, 96, 1);
}

.primary-btn:hover {
  background-color: rgba(216, 27, 96, 1);
}

.secondary-btn {
  background-color: rgba(74, 60, 49, 0.08);
  color: #4a3c31;
  border: 1px solid rgba(74, 60, 49, 0.2);
}

.secondary-btn:hover {
  background-color: rgba(74, 60, 49, 0.15);
}

.hero-scroll-hint {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  z-index: 2;
  width: 2.25rem;
  height: 2.25rem;
  transform: translateX(-50%) rotate(45deg);
  border-right: 3px solid rgba(255, 255, 255, 0.86);
  border-bottom: 3px solid rgba(255, 255, 255, 0.86);
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-banner {
    height: 100svh;
  }

  .hero-text {
    font-size: 1rem;
  }
}
</style>

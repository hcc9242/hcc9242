<template>
  <footer id="contact" class="app-footer">
    <div class="container footer-content">
      <p class="footer-title">{{ siteName }}</p>
      <p class="footer-text">
        聯絡信箱：
        <a class="footer-link" :href="`mailto:${contactEmail}`">
          {{ contactEmail }}
        </a>
      </p>
      <p class="footer-copy">
        © {{ currentYear }} {{ siteName }}. {{ copyrightLabel }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    siteName() {
      return this.$appConfig.siteName
    },
    contactEmail() {
      return this.$appConfig.contactEmail
    },
    copyrightLabel() {
      return this.$appConfig.copyrightLabel
    },
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.app-footer {
  background-color: #2f2f2f;
  color: #ffffff;
  padding: 2.5rem 1.5rem;
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.footer-content {
  text-align: center;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.footer-text {
  margin-bottom: 0.75rem;
  opacity: 0.9;
}

.footer-link {
  color: #ffd7b8;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.footer-link:hover {
  color: #fff1e4;
}

.footer-copy {
  font-size: 0.9rem;
  opacity: 0.7;
}
</style>

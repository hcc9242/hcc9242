<template>
  <footer id="contact" class="site-footer">
    <div class="container footer-content">
      <p class="footer-title">Taiwanese Souvenirs</p>
      <p class="footer-text">把最有台灣味的祝福，送給最重要的人。</p>
      <p class="footer-copy">© 2026 Taiwanese Souvenirs. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection"
}
</script>

<style scoped>
.site-footer {
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

.footer-copy {
  font-size: 0.9rem;
  opacity: 0.7;
}
</style>
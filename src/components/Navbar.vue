<template>
  <header class="site-header">
    <div class="container nav-wrapper">
      <div class="brand">Taiwanese Souvenirs</div>

      <nav class="site-nav">
        <a href="#hero">首頁</a>
        <a href="#products">商品</a>
        <a href="#about">關於我們</a>
        <a href="#contact">聯絡我們</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
}

.brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: #c75b39;
}

.site-nav {
  display: flex;
  gap: 1rem;
}

.site-nav a {
  text-decoration: none;
  color: #333;
  font-size: 0.95rem;
}

.site-nav a:hover {
  color: #c75b39;
}

@media (max-width: 768px) {
  .nav-wrapper {
    flex-direction: column;
    justify-content: center;
    padding: 0.75rem 0;
    gap: 0.5rem;
  }

  .site-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
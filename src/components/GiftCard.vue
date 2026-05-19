<template>
  <article class="gift-card">
    <div class="gift-image-wrap">
      <img :src="image" :alt="name" class="gift-image" />
    </div>

    <div class="gift-body">
      <h3 class="gift-title">{{ name }}</h3>
      <p class="gift-description">{{ description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "GiftCard",
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
.gift-card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: fadeInUp 0.8s ease;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gift-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
}

.gift-image-wrap {
  overflow: hidden;
  aspect-ratio: 5 / 4;
  width: 100%;
}

.gift-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gift-card:hover .gift-image {
  transform: scale(1.08);
}

.gift-body {
  padding: 1.2rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
}

.gift-title {
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
}

.gift-description {
  margin: 0;
  color: #666;
  line-height: 1.7;
  text-align: center;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

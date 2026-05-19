<template>
  <main>
    <HeroSection />
    <IntroSection />
    <GiftsSection />
    <ActivitiesSection />
    <PrizesSection />
    <RulesSection />
  </main>
  <AppFooter />
</template>

<script>
import HeroSection from "./components/HeroSection.vue"
import IntroSection from "./components/IntroSection.vue"
import GiftsSection from "./components/GiftsSection.vue"
import ActivitiesSection from "./components/ActivitiesSection.vue"
import PrizesSection from "./components/PrizesSection.vue"
import RulesSection from "./components/RulesSection.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
  name: "App",
  components: {
    HeroSection,
    IntroSection,
    GiftsSection,
    ActivitiesSection,
    PrizesSection,
    RulesSection,
    AppFooter
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body {
  font-family: Arial, "Noto Sans TC", sans-serif;
  color: #333;
  background-color: #fffaf7;
}

a {
  color: inherit;
}
</style>

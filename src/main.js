import { createApp } from "vue"
import App from "./App.vue"
import { appConfig } from "./config/appConfig.js"

// 建立 Vue 應用實例，並以 App.vue 作為根元件。
const app = createApp(App)

// 註冊全域設定，讓 Options API 與 Composition API 元件都能共用站台資訊。
app.config.globalProperties.$appConfig = appConfig
app.provide("appConfig", appConfig)

// 將整個 Vue 應用掛載到 index.html 中 id="app" 的節點。
app.mount("#app")

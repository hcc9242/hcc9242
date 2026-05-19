const baseUrl = import.meta.env.BASE_URL

export const appConfig = Object.freeze({
  siteName: "Taiwanese Souvenirs",
  contactEmail: "rtifans@rti.org.tw",
  locale: "zh-TW",
  copyrightLabel: "All rights reserved.",
  publicAsset(path) {
    return `${baseUrl}${path.replace(/^\/+/, "")}`
  }
})

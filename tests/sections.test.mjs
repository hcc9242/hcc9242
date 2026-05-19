import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { spawn } from "node:child_process"
import { fileURLToPath } from "node:url"
import { test } from "node:test"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, "..")
const componentsRoot = path.join(projectRoot, "src", "components")
const configRoot = path.join(projectRoot, "src", "config")

async function readComponent(name) {
  return readFile(path.join(componentsRoot, name), "utf8")
}

function extractBlock(source, tagName) {
  const block = source.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`))
  assert.ok(block, `找不到 <${tagName}> 區塊`)
  return block[1].trim()
}

function loadComponentOptions(source) {
  const script = extractBlock(source, "script")
  const executable = script
    .replace(/^import\s+.+$/gm, "")
    .replace("export default", "return")
    .trim()

  return new Function(executable)()
}

function assertKeys(target, keys, label) {
  for (const key of keys) {
    assert.ok(key in target, `${label} 缺少必要欄位：${key}`)
  }
}

function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: "pipe" })
    let stdout = ""
    let stderr = ""

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString()
    })

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString()
    })

    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr })
        return
      }

      reject(
        new Error(
          `指令失敗：${command} ${args.join(" ")}\n${stdout}\n${stderr}`.trim()
        )
      )
    })
  })
}

test("App.vue 應串接主要 section 元件", async () => {
  const source = await readFile(path.join(projectRoot, "src", "App.vue"), "utf8")

  for (const tag of [
    "<HeroSection />",
    "<IntroSection />",
    "<GiftsSection />",
    "<ActivitiesSection />",
    "<PrizesSection />",
    "<RulesSection />",
    "<AppFooter />"
  ]) {
    assert.match(source, new RegExp(tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
  }

  assert.doesNotMatch(source, /top-banner/, "HeroSection 應作為第一屏滿版視覺")
})

test("main.js 應初始化 Vue 應用並註冊全域設定", async () => {
  const source = await readFile(path.join(projectRoot, "src", "main.js"), "utf8")

  assert.match(source, /import\s+\{\s*createApp\s*\}\s+from\s+"vue"/)
  assert.match(source, /import\s+App\s+from\s+"\.\/App\.vue"/)
  assert.match(source, /import\s+\{\s*appConfig\s*\}\s+from\s+"\.\/config\/appConfig\.js"/)
  assert.match(source, /const app = createApp\(App\)/)
  assert.match(source, /app\.config\.globalProperties\.\$appConfig = appConfig/)
  assert.match(source, /app\.provide\("appConfig", appConfig\)/)
  assert.match(source, /app\.mount\("#app"\)/)
})

test("appConfig 應集中管理站台全域資訊", async () => {
  const source = await readFile(path.join(configRoot, "appConfig.js"), "utf8")

  for (const key of ["siteName", "contactEmail", "locale", "copyrightLabel"]) {
    assert.match(source, new RegExp(`${key}:`))
  }
})

test("GiftsSection 應將 description 傳給 GiftCard", async () => {
  const source = await readComponent("GiftsSection.vue")

  assert.match(source, /:description="gift\.description"/)
  assert.match(source, /id="products"/)
})

test("HeroSection 應讓第一張首圖隨滾動被壓縮", async () => {
  const source = await readComponent("HeroSection.vue")

  assert.match(source, /scrollProgress/)
  assert.match(source, /requestAnimationFrame/)
  assert.match(source, /heroCompression/)
  assert.match(source, /heroBannerStyle/)
  assert.match(source, /height: `\$\{bannerHeight\}px`/)
  assert.doesNotMatch(source, /clipPath|WebkitClipPath|scaleY|scale\(/, "圖片本體不應被縮放或裁切")
  assert.match(source, /<div ref="banner" class="hero-banner" :style="heroBannerStyle"[^>]*>/)
  assert.match(source, /\.hero-banner[\s\S]*height: 100svh[\s\S]*overflow: hidden/)
  assert.match(source, /\.hero-banner-img[\s\S]*position: absolute[\s\S]*object-position: center center/)
  assert.match(source, /\.hero-banner-img[\s\S]*height: 128svh/)
  assert.doesNotMatch(source, /\.hero-banner-img[\s\S]*height: 128%/, "首圖高度不應跟著首圖容器縮小")
  assert.match(source, /<div ref="banner" class="hero-banner"[\s\S]*<div class="overlay"><\/div>[\s\S]*<\/div>/)
})

test("IntroSection 應維持可覆蓋前景的層級", async () => {
  const source = await readComponent("IntroSection.vue")

  assert.match(source, /\.intro-section[\s\S]*position: relative/)
  assert.match(source, /\.intro-section[\s\S]*z-index: 3/)
})

test("ActivitiesSection 的活動資料應包含步驟陣列", async () => {
  const source = await readComponent("ActivitiesSection.vue")
  const component = loadComponentOptions(source)
  const activities = component.data().activities

  assert.ok(Array.isArray(activities) && activities.length > 0, "activities 應為非空陣列")

  for (const activity of activities) {
    assertKeys(
      activity,
      ["id", "badge", "title", "description", "actionText", "actionLink", "steps"],
      "activity"
    )
    assert.ok(Array.isArray(activity.steps) && activity.steps.length > 0, "steps 應為非空陣列")

    for (const step of activity.steps) {
      assertKeys(step, ["id", "title", "text"], "step")
    }
  }
})

test("RulesSection 的規則資料應分群管理", async () => {
  const source = await readComponent("RulesSection.vue")
  const component = loadComponentOptions(source)
  const ruleGroups = component.data().ruleGroups

  assert.ok(Array.isArray(ruleGroups) && ruleGroups.length >= 2, "ruleGroups 應至少有兩組")

  for (const group of ruleGroups) {
    assertKeys(group, ["id", "title", "description", "items"], "ruleGroup")
    assert.ok(Array.isArray(group.items) && group.items.length > 0, "items 應為非空陣列")
    assert.ok(group.items.every((item) => typeof item === "string" && item.length > 0), "items 內容需為文字")
  }
})

test("PrizesSection 的獎品資料應包含名稱、圖片、圖示與說明", async () => {
  const source = await readComponent("PrizesSection.vue")
  const component = loadComponentOptions(source)
  const prizes = component.data().prizes

  assert.ok(Array.isArray(prizes) && prizes.length > 0, "prizes 應為非空陣列")

  for (const prize of prizes) {
    assertKeys(prize, ["id", "rank", "name", "icon", "image", "description"], "prize")
  }
})

test("PrizesSection 應顯示運動獎品資料", async () => {
  const source = await readComponent("PrizesSection.vue")
  const component = loadComponentOptions(source)
  const prizes = component.data().prizes

  assert.deepEqual(
    prizes.map(({ rank, name, icon, image }) => ({ rank, name, icon, image })),
    [
      {
        rank: "頭獎",
        name: "運動背包",
        icon: "backpack",
        image: "images/prize_sports_backpack.svg"
      },
      {
        rank: "二獎",
        name: "運動水壺",
        icon: "bottle",
        image: "images/prize_sports_bottle.svg"
      },
      {
        rank: "三獎",
        name: "運動毛巾",
        icon: "towel",
        image: "images/prize_sports_towel.svg"
      }
    ]
  )
})

test("AppFooter 應包含聯絡信箱", async () => {
  const source = await readComponent("AppFooter.vue")

  assert.match(source, /\$appConfig\.siteName/)
  assert.match(source, /\$appConfig\.contactEmail/)
  assert.match(source, /:href="`mailto:\$\{contactEmail\}`"/)
})

test("專案應可成功 build", async () => {
  await runCommand("npm", ["run", "build"], projectRoot)
})

let lessLoaded = false

// 动态加载less.js
export function loadLess() {
  return new Promise((resolve, reject) => {
    if (lessLoaded) {
      resolve(window.less)
      return
    }

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/less@3.9.0/dist/less.min.js"
    script.onload = () => {
      lessLoaded = true
      // 配置less选项
      window.less.options.javascriptEnabled = true
      resolve(window.less)
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// 生成主题样式
export async function generateTheme(colors) {
  try {
    const less = await loadLess()

    // 获取当前的antd样式
    const antdStyleLink =
      document.querySelector('link[href*="antd"]') || document.querySelector("style[data-vue-ssr-id]")

    if (!antdStyleLink) {
      throw new Error("未找到antd样式文件")
    }

    // 构建less变量字符串
    const lessVars = Object.keys(colors)
      .map((key) => `@${key}: ${colors[key]};`)
      .join("\n")

    // 编译less
    const result = await less.render(
      `
      ${lessVars}
      @import (reference) "~ant-design-vue/lib/style/themes/default.less";
      @import "~ant-design-vue/dist/antd.less";
    `,
      {
        javascriptEnabled: true,
        modifyVars: colors,
      },
    )

    // 应用新样式
    updateStyles(result.css)
  } catch (error) {
    console.error("主题生成失败:", error)
    throw error
  }
}

// 更新页面样式
function updateStyles(css) {
  const styleId = "dynamic-theme-styles"
  let styleElement = document.getElementById(styleId)

  if (!styleElement) {
    styleElement = document.createElement("style")
    styleElement.id = styleId
    document.head.appendChild(styleElement)
  }

  styleElement.textContent = css
}

// 颜色工具函数
export function hexToHsb(hex) {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min

  let h = 0
  const s = max === 0 ? 0 : diff / max
  const brightness = max

  if (diff !== 0) {
    switch (max) {
      case r:
        h = ((g - b) / diff + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / diff + 2) / 6
        break
      case b:
        h = ((r - g) / diff + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    b: Math.round(brightness * 100),
  }
}

export function hsbToHex(h, s, b) {
  s /= 100
  b /= 100

  const c = b * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = b - c

  let r = 0,
    g = 0,
    blue = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    blue = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    blue = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    blue = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    blue = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    blue = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    blue = x
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  blue = Math.round((blue + m) * 255)

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`
}

// 验证十六进制颜色
export function isValidHex(hex) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)
}

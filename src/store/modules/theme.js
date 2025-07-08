import { generateTheme } from "../../utils/theme"

// 预设主题配置
const PRESET_THEMES = {
  default: {
    name: "默认主题",
    key: "default",
    colors: {
      "primary-color": "#1890ff",
      "link-color": "#1890ff",
      "success-color": "#52c41a",
      "warning-color": "#faad14",
      "error-color": "#f5222d",
      "heading-color": "rgba(0, 0, 0, 0.85)",
      "text-color": "rgba(0, 0, 0, 0.65)",
      "text-color-secondary": "rgba(0, 0, 0, 0.45)",
      "component-background": "#fff",
      "body-background": "#f0f2f5",
      "layout-body-background": "#f0f2f5",
    },
  },
  dark: {
    name: "暗黑主题",
    key: "dark",
    colors: {
      "primary-color": "#1890ff",
      "link-color": "#1890ff",
      "success-color": "#52c41a",
      "warning-color": "#faad14",
      "error-color": "#f5222d",
      "heading-color": "rgba(255, 255, 255, 0.85)",
      "text-color": "rgba(255, 255, 255, 0.65)",
      "text-color-secondary": "rgba(255, 255, 255, 0.45)",
      "component-background": "#141414",
      "body-background": "#000000",
      "layout-body-background": "#000000",
      "layout-header-background": "#001529",
      "menu-dark-bg": "#001529",
    },
  },
  compact: {
    name: "紧凑主题",
    key: "compact",
    colors: {
      "primary-color": "#1890ff",
      "link-color": "#1890ff",
      "success-color": "#52c41a",
      "warning-color": "#faad14",
      "error-color": "#f5222d",
      "font-size-base": "12px",
      "heading-color": "rgba(0, 0, 0, 0.85)",
      "text-color": "rgba(0, 0, 0, 0.65)",
      "text-color-secondary": "rgba(0, 0, 0, 0.45)",
      "component-background": "#fff",
      "body-background": "#f0f2f5",
      "layout-body-background": "#f0f2f5",
      "height-base": "28px",
      "height-lg": "32px",
      "height-sm": "22px",
    },
  },
}

const state = {
  currentTheme: "default",
  customColors: {},
  isCustomTheme: false,
  loading: false,
  presetThemes: PRESET_THEMES,
}

const mutations = {
  SET_CURRENT_THEME(state, theme) {
    state.currentTheme = theme
  },
  SET_CUSTOM_COLORS(state, colors) {
    state.customColors = colors
  },
  SET_IS_CUSTOM_THEME(state, isCustom) {
    state.isCustomTheme = isCustom
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
}

const actions = {
  // 初始化主题
  async initTheme({ commit, dispatch }) {
    const savedTheme = localStorage.getItem("user-theme")
    const savedCustomColors = localStorage.getItem("user-custom-colors")

    if (savedCustomColors) {
      const customColors = JSON.parse(savedCustomColors)
      commit("SET_CUSTOM_COLORS", customColors)
      commit("SET_IS_CUSTOM_THEME", true)
      await dispatch("applyCustomTheme", customColors)
    } else if (savedTheme && PRESET_THEMES[savedTheme]) {
      await dispatch("switchTheme", savedTheme)
    }
  },

  // 切换预设主题
  async switchTheme({ commit, dispatch }, themeKey) {
    if (!PRESET_THEMES[themeKey]) {
      console.warn(`主题 ${themeKey} 不存在，回退到默认主题`)
      themeKey = "default"
    }

    commit("SET_LOADING", true)

    try {
      const theme = PRESET_THEMES[themeKey]
      await generateTheme(theme.colors)

      commit("SET_CURRENT_THEME", themeKey)
      commit("SET_IS_CUSTOM_THEME", false)
      commit("SET_CUSTOM_COLORS", {})

      // 持久化
      localStorage.setItem("user-theme", themeKey)
      localStorage.removeItem("user-custom-colors")

      // 更新body类名用于样式切换
      document.body.className = `theme-${themeKey}`
    } catch (error) {
      console.error("主题切换失败:", error)
      // 回退到默认主题
      if (themeKey !== "default") {
        await dispatch("switchTheme", "default")
      }
    } finally {
      commit("SET_LOADING", false)
    }
  },

  // 应用自定义主题
  async applyCustomTheme({ commit, dispatch }, customColors) {
    commit("SET_LOADING", true)

    try {
      // 基于当前主题合并自定义颜色
      const baseTheme = PRESET_THEMES[state.currentTheme] || PRESET_THEMES.default
      const mergedColors = { ...baseTheme.colors, ...customColors }

      await generateTheme(mergedColors)

      commit("SET_CUSTOM_COLORS", customColors)
      commit("SET_IS_CUSTOM_THEME", true)

      // 持久化
      localStorage.setItem("user-custom-colors", JSON.stringify(customColors))
      localStorage.removeItem("user-theme")

      document.body.className = "theme-custom"
    } catch (error) {
      console.error("自定义主题应用失败:", error)
    } finally {
      commit("SET_LOADING", false)
    }
  },

  // 重置主题
  async resetTheme({ dispatch }) {
    localStorage.removeItem("user-theme")
    localStorage.removeItem("user-custom-colors")
    await dispatch("switchTheme", "default")
  },
}

const getters = {
  currentThemeConfig: (state) => {
    if (state.isCustomTheme) {
      const baseTheme = PRESET_THEMES[state.currentTheme] || PRESET_THEMES.default
      return {
        name: "自定义主题",
        key: "custom",
        colors: { ...baseTheme.colors, ...state.customColors },
      }
    }
    return PRESET_THEMES[state.currentTheme] || PRESET_THEMES.default
  },

  availableThemes: (state) => Object.values(state.presetThemes),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

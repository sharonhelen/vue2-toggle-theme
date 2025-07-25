
const blue =  {
  name: "默认主题",
  key: "default",
  colors: {
    // -------- Colors -----------
    "@primary-color": "#3573f3",
    "@link-color": "#3573f3",
    "@success-color": "#52c41a",
    "@warning-color": "#faad14",
    "@error-color": "#f5222d",
    "@heading-color": "rgba(0, 0, 0, 0.85)",
    "@text-color": "#323233",
    "@text-color-secondary": "#646566",
    // Base background color for most components
    "@component-background": "#fff",
    // Background color for `<body>`
    "@body-background": "#000", 
    // Buttons
    '@btn-primary-color': '#fff',
    // Layout
    '@layout-body-background': '#f0f2f5',
    '@layout-header-background': '#3573f3',
    '@heading-color': 'fade(#000, 85%)',
    '@layout-sider-background': '#3573F3',
    // '@heading-color-dark': 'fade(@white, 100%)',
    // '@text-color-dark': 'fade(@white, 85%)',
    // '@text-color-secondary-dark': 'fade(@white, 65%)',
    // Menu
    '@menu-bg': '#3573f3',
    '@menu-popup-bg': '#3573f3',
    '@menu-item-color': '#fff',
    '@menu-highlight-color': '#fff',
    '@menu-item-active-bg': '#3573f3',
    '@menu-item-group-title-color':'#fff',
    // dark theme
    '@menu-dark-color': '#fff',
    '@menu-dark-bg': '#3573f3',
    '@menu-dark-arrow-color': '#fff',
    '@menu-dark-submenu-bg': '#fff',
    '@menu-dark-highlight-color': '#fff',
    // '@menu-dark-item-active-bg': '@primary-color',
    '@menu-dark-selected-item-icon-color': '#fff',
    '@menu-dark-selected-item-text-color': '#fff',
    // Table
    '@table-header-bg': '#f8f9fc',
    '@table-header-color': '#323233',
    '@table-header-sort-bg': '#f8f9fc',
    '@table-row-hover-bg': '#d8e3f4',
    '@table-selected-row-bg': '#fafafa',
    '@table-expanded-row-bg': '#fbfbfb',
    '@table-footer-bg': '#fbfbfb',
    '@table-footer-color': '#323233',
    // Form 
    '@label-color': '#323233',
    // Input
    '@input-placeholder-color': '#969f99',
    '@input-color': '#323233',
    '@input-border-color': '#dcdee0',
    '@input-hover-border-color': '#3573f3',
    '@input-bg': '#fff',
    '@input-disabled-bg': '#e5e8ea',
  },
}
const dark = {
  name: "暗黑主题",
  key: "dark",
  colors: {
    "@primary-color": "#f6d8ae",
    "@link-color": "#aecffa",
    "@success-color": "#52c41a",
    "@warning-color": "#faad14",
    "@error-color": "#f5222d",
    "@heading-color": "rgba(255, 255, 255, 0.85)",
    "@text-color": "#f6d8ae",
    "@text-color-secondary": "#1c2943",
    // Border
    "@btn-default-border": '#404850',
    // Base background color for most components
    "@component-background": "#1c2943",
    // Background color for `<body>`
    "@body-background": "#000", 
    // Buttons
    '@btn-primary-color': '#fff',
    // Layout
    '@layout-body-background': '#0d192c',
    '@layout-header-background': '#0d192c',
    '@heading-color': 'fade(#000, 85%)',
    '@layout-sider-background': '#0d192c',
    // '@heading-color-dark': 'fade(@white, 100%)',
    // '@text-color-dark': 'fade(@white, 85%)',
    // '@text-color-secondary-dark': 'fade(@white, 65%)',
  
    // Menu
    '@menu-bg': '#001529',
    '@menu-popup-bg': '#001529',
    '@menu-item-color': '#0d192c',
    '@menu-highlight-color': '#001529',
    '@menu-item-active-bg': '#001529',
    '@menu-item-group-title-color':'#001529',

    // dark theme
    '@menu-dark-color': '#f6d8ae',
    '@menu-dark-bg': '#001529',
    '@menu-dark-arrow-color': '#f6d8ae',
    '@menu-dark-submenu-bg': '#001529',
    '@menu-dark-highlight-color': '#f6d8ae',
    // '@menu-dark-item-active-bg': '@primary-color',
    '@menu-dark-selected-item-icon-color': '#001529',
    '@menu-dark-selected-item-text-color': '#001529',
    '@menu-dark-item-hover-bg': '#001529',
    // Table
    '@table-header-bg': '#405069',
    '@table-header-color': '#c8c9cc',
    '@table-header-sort-bg': '#405069',
    '@table-row-hover-bg': '#fafafa',
    '@table-selected-row-bg': '#163050',
    '@table-expanded-row-bg': '#fafafa',
    '@table-footer-bg': '#fbfbfb',
    '@table-footer-color': '#323233',
    // Form 
    '@label-color': '#323233',
    // Input
    '@input-placeholder-color': '#969f99',
    '@input-color': '#f6d8ae',
    '@input-border-color': '#151f32',
    '@input-hover-border-color': '#6880b0',
    '@input-bg': '#0d192c',
    '@input-disabled-bg': '#35435a',
  },
}

// export const themes = {
//   default: {
//     name: "默认主题",
//     key: "default",
//     colors: {
//       // -------- Colors -----------
// 			"@primary-color": "#3573f3",
// 			"@link-color": "#3573f3",
// 			"@success-color": "#52c41a",
// 			"@warning-color": "#faad14",
// 			"@error-color": "#f5222d",
// 			"@heading-color": "rgba(0, 0, 0, 0.85)",
// 			"@text-color": "#323233",
// 			"@text-color-secondary": "#646566",
//       // Base background color for most components
// 			"@component-background": "#fff",
//       // Background color for `<body>`
// 			"@body-background": "#000", 
//       // Buttons
//       '@btn-primary-color': '#fff',
//       // Layout
//       '@layout-body-background': '#f0f2f5',
//       '@layout-header-background': '#3573f3',
//       '@heading-color': 'fade(#000, 85%)',
//       '@layout-sider-background': '#3573F3',
//       // '@heading-color-dark': 'fade(@white, 100%)',
//       // '@text-color-dark': 'fade(@white, 85%)',
//       // '@text-color-secondary-dark': 'fade(@white, 65%)',
//       // Menu
//       '@menu-bg': '#3573f3',
//       '@menu-popup-bg': '#3573f3',
//       '@menu-item-color': '#3573F3',
//       '@menu-highlight-color': '#3573F3',
//       '@menu-item-active-bg': '#3573f3',
//       '@menu-item-group-title-color':'#3573f3',
//       // dark theme
//       '@menu-dark-color': '#3573f3',
//       '@menu-dark-bg': '#3573f3',
//       '@menu-dark-arrow-color': '#3573F3',
//       '@menu-dark-submenu-bg': '#3573F3',
//       '@menu-dark-highlight-color': '#373F3',
//       // '@menu-dark-item-active-bg': '@primary-color',
//       '@menu-dark-selected-item-icon-color': '#373F3',
//       '@menu-dark-selected-item-text-color': '#373F3',
//       // Table
//       '@table-header-bg': '#f8f9fc',
//       '@table-header-color': '#323233',
//       '@table-header-sort-bg': '#f8f9fc',
//       '@table-row-hover-bg': '#d8e3f4',
//       '@table-selected-row-bg': '#fafafa',
//       '@table-expanded-row-bg': '#fbfbfb',
//       '@table-footer-bg': '#fbfbfb',
//       '@table-footer-color': '#323233',
//       // Form 
//       '@label-color': '#323233',
//       // Input
//       '@input-placeholder-color': '#969f99',
//       '@input-color': '#323233',
//       '@input-border-color': '#dcdee0',
//       '@input-hover-border-color': '#3573f3',
//       '@input-bg': '#fff',
//       '@input-disabled-bg': '#e5e8ea',
//     },
//   },
//   dark: {
//     name: "暗黑主题",
//     key: "dark",
//     colors: {
//       "@primary-color": "#f6d8ae",
//       "@link-color": "#aecffa",
//       "@success-color": "#52c41a",
//       "@warning-color": "#faad14",
//       "@error-color": "#f5222d",
//       "@heading-color": "rgba(255, 255, 255, 0.85)",
//       "@text-color": "#f0f2f5",
//       "@text-color-secondary": "#c8c9cc",
//       // Base background color for most components
// 			"@component-background": "#fff",
//       // Background color for `<body>`
// 			"@body-background": "#000", 
//       // Buttons
//       '@btn-primary-color': '#fff',
//       // Layout
//       '@layout-body-background': '#0d192c',
//       '@layout-header-background': '#0d192c',
//       '@heading-color': 'fade(#000, 85%)',
//       '@layout-sider-background': '#f6d8ae',
//       // '@heading-color-dark': 'fade(@white, 100%)',
//       // '@text-color-dark': 'fade(@white, 85%)',
//       // '@text-color-secondary-dark': 'fade(@white, 65%)',
    
//       // Menu
//       '@menu-bg': '#001529',
//       '@menu-popup-bg': '#001529',
//       '@menu-item-color': '#f6d8ae',
//       '@menu-highlight-color': '#f6d8ae',
//       '@menu-item-active-bg': '#f6d8ae',
//       '@menu-item-group-title-color':'#f6d8ae',

//       // dark theme
//       '@menu-dark-color': '#f6d8ae',
//       '@menu-dark-bg': '#001529',
//       '@menu-dark-arrow-color': '#f6d8ae',
//       '@menu-dark-submenu-bg': '#001529',
//       '@menu-dark-highlight-color': '#001529',
//       // '@menu-dark-item-active-bg': '@primary-color',
//       '@menu-dark-selected-item-icon-color': '#f6d8ae',
//       '@menu-dark-selected-item-text-color': '#f6d8ae',
//       // Table
//       '@table-header-bg': '#405069',
//       '@table-header-color': '#c8c9cc',
//       '@table-header-sort-bg': '#405069',
//       '@table-row-hover-bg': '#fafafa',
//       '@table-selected-row-bg': '#163050',
//       '@table-expanded-row-bg': '#fafafa',
//       '@table-footer-bg': '#fbfbfb',
//       '@table-footer-color': '#323233',
//       // Form 
//       '@label-color': '#323233',
//       // Input
//       '@input-placeholder-color': '#969f99',
//       '@input-color': '#f6d8ae',
//       '@input-border-color': '#151f32',
//       '@input-hover-border-color': '#6880b0',
//       '@input-bg': '#0d192c',
//       '@input-disabled-bg': '#35435a',
//     },
//   },
//   // compact: {
//   //   name: "紧凑主题",
//   //   key: "compact",
//   //   colors: {
//   //     "primary-color": "#1890ff",
//   //     "link-color": "#1890ff",
//   //     "success-color": "#52c41a",
//   //     "warning-color": "#faad14",
//   //     "error-color": "#f5222d",
//   //     "font-size-base": "12px",
//   //     "heading-color": "rgba(0, 0, 0, 0.85)",
//   //     "text-color": "rgba(0, 0, 0, 0.65)",
//   //     "text-color-secondary": "rgba(0, 0, 0, 0.45)",
//   //     "component-background": "#fff",
//   //     "body-background": "#f0f2f5",
//   //     "layout-body-background": "#f0f2f5",
//   //     "height-base": "28px",
//   //     "height-lg": "32px",
//   //     "height-sm": "22px",
//   //   },
//   // },
// };

const themes = [
  blue,
  dark
]

const themeMap = themes.reduce((map, theme) => {
  map[theme.key] = theme
  return map
}, {})


function getTheme (themeKey) {
  console.log(themeMap, themeKey)
  return themeMap[themeKey] || themeMap['default']
}

const themeVars = themes.reduce((vars, theme) => {
  return [...new Set(vars.concat(Object.keys(theme.colors)))]
}, [])

console.log('themeVars', themeVars)
// export const themeColors = [
//   { theme: 'default', vars: {} },
//   { theme: 'blue', vars: { '@primary-color': '#177ddc', '@layout-sider-background': '#177ddc', '@menu-dark-bg': '#177ddc' } },
//   { theme: 'brandX',  vars: { '@primary-color': '#f759ab', '@layout-sider-background': '#f759ab', '@menu-dark-bg': '#f759ab' } }
// ];
module.exports = {
  themes,
  themeVars,
  themeMap,
  getTheme,
}
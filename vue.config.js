const AntDesignThemePlugin = require("./webpack-plugins/antd-theme-webpack-plugin");
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //antd包位置
  stylesDir: path.join(__dirname, "./src/styles/theme"), //主题文件所在文件夹
  varFile: path.join(__dirname, "./src/styles/theme/variables.less"), // 自定义默认的主题色
  mainLessFile: path.join(__dirname, "./src/styles/theme/index.less"), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
  outputFilePath: path.join(__dirname, "./public/theme.less"), //提取的less文件输出到什么地方
  themeVariables: ["@primary-color"], //要改变的主题变量
  indexFileName: "./public/index.html", // index.html所在位置
  generateOnce: false // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
};

console.log(15, options)
module.exports = defineConfig({
  transpileDependencies: true,
  // 禁用 ESLint
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: {
          //   // 默认主题变量
          //   "primary-color": "#1890ff",
          //   "link-color": "#1890ff",
          //   "success-color": "#52c41a",
          //   "warning-color": "#faad14",
          //   "error-color": "#f5222d",
          //   "font-size-base": "14px",
          //   "heading-color": "rgba(0, 0, 0, 0.85)",
          //   "text-color": "rgba(0, 0, 0, 0.65)",
          //   "text-color-secondary": "rgba(0, 0, 0, 0.45)",
          //   "disabled-color": "rgba(0, 0, 0, 0.25)",
          //   "border-radius-base": "6px",
          //   "border-color-base": "#d9d9d9",
          // },
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [new AntDesignThemePlugin(options)]
  },
  // // 链式配置
  // chainWebpack: config => {
  //   // 移除 ESLint loader
  //   config.module.rules.delete('eslint')
    
  //   // 优化构建
  //   config.optimization.splitChunks({
  //     chunks: 'all',
  //     cacheGroups: {
  //       vendor: {
  //         name: 'chunk-vendors',
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: 10,
  //         chunks: 'initial'
  //       },
  //       antd: {
  //         name: 'chunk-antd',
  //         test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
  //         priority: 20,
  //         chunks: 'all'
  //       }
  //     }
  //   })
  // },
})

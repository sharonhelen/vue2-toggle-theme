<template>
  <a-layout style="height: 100%">
    <a-layout-sider
      theme="dark"
    >
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :inline-collapsed="collapsed"
        theme="dark"
        :style="{height: '100%'}"
      >
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="inbox" />
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="mail" /><span>Navigation One</span></span
          >
          <a-menu-item key="5"> Option 5 </a-menu-item>
          <a-menu-item key="6"> Option 6 </a-menu-item>
          <a-menu-item key="7"> Option 7 </a-menu-item>
          <a-menu-item key="8"> Option 8 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="appstore" /><span>Navigation Two</span></span
          >
          <a-menu-item key="9"> Option 9 </a-menu-item>
          <a-menu-item key="10"> Option 10 </a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11"> Option 11 </a-menu-item>
            <a-menu-item key="12"> Option 12 </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout-content>
      <a-space>
        <a-button @click="changeTheme('default')">白蓝</a-button>
        <a-button @click="changeTheme('dark')">黑金</a-button>
      </a-space>
    </a-layout-content>
  </a-layout>
</template>

<script>
const { getTheme } = require('../theme/theme')
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      theme: 'default',
    }
  },
  methods: {
    changeTheme(type) {
      this.theme = type
      const theme = getTheme(type);
      const vars = theme["colors"];
      window.less.modifyVars(vars).then(res => {
        console.log(66, res, vars)
      })
    },
    loadTheme(name) {
      const id = 'antd-theme';
      let link = document.getElementById(id);
      if (!link) {
        link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      link.href = `/theme-${name}.css`;
      localStorage.setItem('theme', name);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
// import { Button, Menu, Layout } from "ant-design-vue";
Vue.config.productionTip = false
Vue.use(Antd);
// Vue.component(Button.name, Button);
// Vue.component(Menu.name, Menu);
// Vue.component(Layout.name, Layout)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

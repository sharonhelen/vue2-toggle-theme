import Vue from "vue"
import Vuex from "vuex"
import themeModule from "./modules/theme"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    theme: themeModule,
  },
})

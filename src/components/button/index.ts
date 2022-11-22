import { App, Plugin } from 'vue'

import VButton from './VButton.vue'

export default {
  install(Vue: App) {
    Vue.component(VButton.name, VButton)
  }
} as Plugin

export {
  VButton
}